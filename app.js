// ── App Controller ──
(function() {
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('mainContent');
  const overlay = document.getElementById('sidebarOverlay');

  // Mobile menu toggle
  window.toggleMenu = function() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  };
  function closeMobileMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  // Exam timer (set your exam date here)
  function startExamTimer() {
    // Set to tomorrow 9 AM
    const now = new Date();
    const exam = new Date(now);
    exam.setDate(exam.getDate() + 1);
    exam.setHours(9, 0, 0, 0);

    setInterval(() => {
      const diff = exam - new Date();
      if (diff <= 0) { document.getElementById('examTimer').textContent = "NOW! 🔥"; return; }
      const h = Math.floor(diff/3600000);
      const m = Math.floor((diff%3600000)/60000);
      const s = Math.floor((diff%60000)/1000);
      document.getElementById('examTimer').textContent =
        `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }, 1000);
  }
  startExamTimer();

  // Build sidebar
  function buildSidebar() {
    let html = `<div class="section-label">📚 Topics</div>`;
    TOPICS.forEach(t => {
      html += `<button data-id="${t.id}" onclick="loadTopic('${t.id}')">
        <span class="icon">${t.icon}</span>${t.title}
      </button>`;
    });
    html += `<div class="section-label" style="margin-top:12px">🎮 Games</div>`;
    html += `<button data-id="speed" onclick="loadSpeed()"><span class="icon">⚡</span>Speed Round</button>`;
    html += `<button data-id="fde-sim" onclick="loadFDESim()"><span class="icon">🔄</span>FDE Simulator</button>`;
    html += `<button data-id="sql-lab" onclick="loadSQLLab()"><span class="icon">💻</span>SQL Challenge</button>`;
    sidebar.innerHTML = html;
  }
  buildSidebar();

  // Active sidebar
  function setActive(id) {
    sidebar.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.id === id));
  }

  // Load topic
  window.loadTopic = function(id) {
    const t = TOPICS.find(x => x.id === id);
    if (!t) return;
    setActive(id);
    closeMobileMenu();

    main.innerHTML = `
      <div class="topic-card fade-in">
        <h2>${t.icon} ${t.title}</h2>
        ${t.notes}
      </div>
      <div class="game-zone fade-in">
        <h2>🎮 Practice: ${t.title}</h2>
        <p class="subtitle">Test yourself with interactive games</p>
        <div class="game-tabs">
          <button class="game-tab active" onclick="switchGame(this,'quiz','${id}')">📝 Quiz</button>
          <button class="game-tab" onclick="switchGame(this,'flash','${id}')">🃏 Flashcards</button>
        </div>
        <div class="game-body" id="gameBody"></div>
      </div>`;

    Games.renderQuiz(document.getElementById('gameBody'), t.quiz);
  };

  // Switch game mode within topic
  window.switchGame = function(btn, mode, topicId) {
    btn.closest('.game-tabs').querySelectorAll('.game-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const t = TOPICS.find(x => x.id === topicId);
    const body = document.getElementById('gameBody');
    if (mode === 'quiz') Games.renderQuiz(body, t.quiz);
    else if (mode === 'flash') Games.renderFlashcards(body, t.quiz);
  };

  // Speed round
  window.loadSpeed = function() {
    setActive('speed');
    closeMobileMenu();
    main.innerHTML = `
      <div class="game-zone fade-in">
        <h2>⚡ Speed Round</h2>
        <p class="subtitle">15 random questions from ALL topics. 60 seconds. GO!</p>
        <div class="game-body" id="gameBody"></div>
      </div>`;
    Games.renderSpeedRound(document.getElementById('gameBody'), TOPICS);
  };

  // FDE Simulator
  window.loadFDESim = function() {
    setActive('fde-sim');
    closeMobileMenu();
    main.innerHTML = `
      <div class="game-zone fade-in">
        <h2>🔄 FDE Cycle Simulator</h2>
        <p class="subtitle">Step through the Fetch-Decode-Execute cycle and watch registers change</p>
        <div class="game-body" id="gameBody"></div>
      </div>`;
    Games.renderFDE(document.getElementById('gameBody'));
  };

  // SQL Lab
  window.loadSQLLab = function() {
    setActive('sql-lab');
    closeMobileMenu();
    main.innerHTML = `
      <div class="game-zone fade-in">
        <h2>💻 SQL Challenge</h2>
        <p class="subtitle">Write SQL queries to solve each challenge</p>
        <div class="game-body" id="gameBody"></div>
      </div>`;
    Games.renderSQL(document.getElementById('gameBody'));
  };

})();
