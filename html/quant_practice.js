// App State
let allQuestions = [];
let filteredQuestions = [];
let currentIndex = 0;
let currentMode = 'practice'; // 'practice' or 'exam'

let userAnswers = {}; // qId -> selectedKey ('a', 'b', etc.)
let userBookmarks = new Set();
let markedForReview = new Set();

let selectedCategory = 'All';
let selectedSubtopic = 'All';
let searchQuery = '';

let timerInterval = null;
let examTimeSeconds = 1200; // 20 mins

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  if (window.QUESTIONS_DATA && Array.isArray(window.QUESTIONS_DATA)) {
    allQuestions = window.QUESTIONS_DATA;
    filteredQuestions = [...allQuestions];
  }

  buildCategoryFilters();
  buildSubtopicFilters();
  renderQuestionPalette();
  loadQuestion(0);

  // Setup Keyboard Shortcuts
  document.addEventListener('keydown', handleKeybindings);
});

// Toggle Filter & Question Palette Drawer
function toggleFilterDrawer() {
  const drawer = document.getElementById('filterDrawer');
  const btn = document.getElementById('toggleDrawerBtn');
  if (!drawer) return;

  drawer.classList.toggle('open');
  const isOpen = drawer.classList.contains('open');
  btn.innerHTML = isOpen ? '🔍 Hide Filter & Palette ▴' : '🔍 Search, Filter & Palette ▾';
}

// Render KaTeX Formulas safely
function renderKaTeX() {
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ],
      throwOnError: false
    });
  }
}

// Convert markdown tables / bold text in passage & questions
function formatMarkdown(text) {
  if (!text) return '';
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // Format tables if present
  if (formatted.includes('|')) {
    let lines = formatted.split('\n');
    let inTable = false;
    let tableHtml = '<table class="data-table">';
    let newLines = [];
    
    for (let line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('|') || trimmed.startsWith(':---')) {
        if (trimmed.includes(':---') || trimmed.includes('---')) continue;
        inTable = true;
        let cells = trimmed.split('|').map(c => c.trim()).filter(c => c !== '');
        tableHtml += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
      } else {
        if (inTable) {
          tableHtml += '</table>';
          newLines.push(tableHtml);
          tableHtml = '<table class="data-table">';
          inTable = false;
        }
        newLines.push(line);
      }
    }
    if (inTable) {
      tableHtml += '</table>';
      newLines.push(tableHtml);
    }
    formatted = newLines.join('<br>');
  } else {
    formatted = formatted.replace(/\n/g, '<br>');
  }
  return formatted;
}

// Build Category Sidebar List
function buildCategoryFilters() {
  const container = document.getElementById('categoryFilterList');
  if (!container) return;
  const categories = ['All', ...new Set(allQuestions.map(q => q.category))];

  container.innerHTML = categories.map(cat => {
    const count = cat === 'All' ? allQuestions.length : allQuestions.filter(q => q.category === cat).length;
    return `
      <div class="filter-pill-item ${cat === selectedCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">
        <span>${cat}</span>
        <span class="pill-count">(${count})</span>
      </div>
    `;
  }).join('');
}

// Build Subtopic Sidebar List
function buildSubtopicFilters() {
  const container = document.getElementById('subtopicFilterList');
  if (!container) return;
  let pool = selectedCategory === 'All' ? allQuestions : allQuestions.filter(q => q.category === selectedCategory);
  const subtopics = ['All', ...new Set(pool.map(q => q.subtopic))];

  container.innerHTML = subtopics.map(sub => {
    const count = sub === 'All' ? pool.length : pool.filter(q => q.subtopic === sub).length;
    return `
      <div class="filter-pill-item ${sub === selectedSubtopic ? 'active' : ''}" onclick="selectSubtopic('${sub}')">
        <span>${sub}</span>
        <span class="pill-count">(${count})</span>
      </div>
    `;
  }).join('');
}

function selectCategory(cat) {
  selectedCategory = cat;
  selectedSubtopic = 'All';
  buildCategoryFilters();
  buildSubtopicFilters();
  applyFilters();
}

function selectSubtopic(sub) {
  selectedSubtopic = sub;
  buildSubtopicFilters();
  applyFilters();
}

function handleSearch() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
  applyFilters();
}

function applyFilters() {
  filteredQuestions = allQuestions.filter(q => {
    const matchesCat = selectedCategory === 'All' || q.category === selectedCategory;
    const matchesSub = selectedSubtopic === 'All' || q.subtopic === selectedSubtopic;
    const matchesSearch = !searchQuery || 
      q.q_num.toLowerCase().includes(searchQuery) ||
      q.question.toLowerCase().includes(searchQuery) ||
      q.passage.toLowerCase().includes(searchQuery);
    
    return matchesCat && matchesSub && matchesSearch;
  });

  const badge = document.getElementById('paletteCountBadge');
  if (badge) badge.innerText = `(${filteredQuestions.length})`;
  
  renderQuestionPalette();
  if (filteredQuestions.length > 0) {
    loadQuestion(0);
  } else {
    document.getElementById('questionStatement').innerText = 'No questions match the current filter.';
    document.getElementById('optionsContainer').innerHTML = '';
    document.getElementById('passagePanel').style.display = 'none';
    document.getElementById('solvingContainer').classList.remove('has-passage');
  }
}

// Render Question Palette Grid
function renderQuestionPalette() {
  const grid = document.getElementById('paletteGrid');
  if (!grid) return;
  grid.innerHTML = filteredQuestions.map((q, idx) => {
    let classes = ['pal-btn'];
    if (idx === currentIndex) classes.push('current');
    if (userAnswers[q.id]) classes.push('answered');
    if (markedForReview.has(q.id)) classes.push('review');

    return `
      <button class="${classes.join(' ')}" onclick="loadQuestion(${idx})">
        ${idx + 1}
      </button>
    `;
  }).join('');
}

// Load Question onto Tata iON Console
function loadQuestion(index) {
  if (index < 0 || index >= filteredQuestions.length) return;
  currentIndex = index;
  const q = filteredQuestions[currentIndex];

  // Update Card Badges & Tags
  document.getElementById('qBadgeNum').innerText = `${q.q_num}`;
  document.getElementById('qCategoryTag').innerText = q.category;
  document.getElementById('qSubtopicTag').innerText = q.subtopic;

  // Bookmarking & Review States
  document.getElementById('bookmarkBtn').classList.toggle('active', userBookmarks.has(q.id));
  document.getElementById('reviewMarkBtn').classList.toggle('active', markedForReview.has(q.id));

  // TATA iON Split Layout Logic: Left Dataset Panel
  const passagePanel = document.getElementById('passagePanel');
  const solvingContainer = document.getElementById('solvingContainer');

  if (q.passage && q.passage.trim() !== '') {
    passagePanel.style.display = 'flex';
    solvingContainer.classList.add('has-passage');
    document.getElementById('passageContent').innerHTML = formatMarkdown(q.passage);
  } else {
    passagePanel.style.display = 'none';
    solvingContainer.classList.remove('has-passage');
  }

  // Render Question Statement
  document.getElementById('questionStatement').innerHTML = formatMarkdown(q.question);

  // Render Options
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = q.options.map(opt => {
    const isSelected = userAnswers[q.id] === opt.key;
    let optionClasses = ['option-item'];
    if (isSelected) optionClasses.push('selected');

    return `
      <div class="${optionClasses.join(' ')}" data-key="${opt.key}" onclick="selectOption('${q.id}', '${opt.key}')">
        <div class="opt-circle">${opt.key.toUpperCase()}</div>
        <div class="opt-label">${opt.text}</div>
      </div>
    `;
  }).join('');

  // Close Solution Box on load
  document.getElementById('solutionBox').classList.remove('open');

  renderQuestionPalette();
  calculateAccuracy();

  // Render LaTeX formulas after DOM update
  setTimeout(renderKaTeX, 50);
}

// Option Selection Logic
function selectOption(qId, key) {
  const q = filteredQuestions[currentIndex];
  userAnswers[q.id] = key;

  const optionItems = document.querySelectorAll('.option-item');
  optionItems.forEach(item => {
    item.classList.remove('selected');
    if (item.getAttribute('data-key') === key) {
      item.classList.add('selected');
    }
  });

  renderQuestionPalette();
  calculateAccuracy();
}

function clearChoice() {
  const q = filteredQuestions[currentIndex];
  delete userAnswers[q.id];
  loadQuestion(currentIndex);
}

function toggleBookmark() {
  const q = filteredQuestions[currentIndex];
  if (userBookmarks.has(q.id)) {
    userBookmarks.delete(q.id);
  } else {
    userBookmarks.add(q.id);
  }
  document.getElementById('bookmarkBtn').classList.toggle('active', userBookmarks.has(q.id));
}

function toggleMarkForReview() {
  const q = filteredQuestions[currentIndex];
  if (markedForReview.has(q.id)) {
    markedForReview.delete(q.id);
  } else {
    markedForReview.add(q.id);
  }
  document.getElementById('reviewMarkBtn').classList.toggle('active', markedForReview.has(q.id));
  renderQuestionPalette();
}

function toggleSolution() {
  const solBox = document.getElementById('solutionBox');
  solBox.classList.toggle('open');
}

function navigateQuestion(direction) {
  const newIdx = currentIndex + direction;
  if (newIdx >= 0 && newIdx < filteredQuestions.length) {
    loadQuestion(newIdx);
  }
}

// App Mode Toggle
function setAppMode(mode) {
  currentMode = mode;
  document.getElementById('modePracticeBtn').classList.toggle('active', mode === 'practice');
  document.getElementById('modeExamBtn').classList.toggle('active', mode === 'exam');
  
  const timerChip = document.getElementById('examTimerChip');
  const showSolBtn = document.getElementById('showSolBtn');

  if (mode === 'exam') {
    timerChip.style.display = 'flex';
    if (showSolBtn) showSolBtn.style.display = 'none';
    startExamTimer();
  } else {
    timerChip.style.display = 'none';
    if (showSolBtn) showSolBtn.style.display = 'inline-block';
    clearInterval(timerInterval);
  }
}

function startExamTimer() {
  clearInterval(timerInterval);
  examTimeSeconds = 1200; // 20 mins
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    examTimeSeconds--;
    updateTimerDisplay();
    if (examTimeSeconds <= 0) {
      clearInterval(timerInterval);
      alert('Time is up! Exam auto-submitted.');
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(examTimeSeconds / 60);
  const secs = examTimeSeconds % 60;
  const disp = document.getElementById('timerDisplay');
  if (disp) {
    disp.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
}

// Calculate Accuracy Stat
function calculateAccuracy() {
  const totalAnswered = Object.keys(userAnswers).length;
  const accElem = document.getElementById('accuracyText');
  if (!accElem) return;

  if (totalAnswered === 0) {
    accElem.innerText = '0 Solved';
  } else {
    accElem.innerText = `${totalAnswered} / ${filteredQuestions.length} Solved`;
  }
}

// Keybindings Handler
function handleKeybindings(e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (['1', '2', '3', '4', '5'].includes(e.key)) {
    const keys = ['a', 'b', 'c', 'd', 'e'];
    const selectedKey = keys[parseInt(e.key) - 1];
    const q = filteredQuestions[currentIndex];
    selectOption(q.id, selectedKey);
  } else if (e.key === 'ArrowLeft') {
    navigateQuestion(-1);
  } else if (e.key === 'ArrowRight') {
    navigateQuestion(1);
  } else if (e.key.toLowerCase() === 'm') {
    toggleMarkForReview();
  } else if (e.key.toLowerCase() === 's') {
    toggleSolution();
  }
}
