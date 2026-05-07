// ── Games Engine ──
const Games = {

  // Shuffle helper
  shuffle(arr) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; },

  // ─── QUIZ GAME ───
  renderQuiz(container, quiz, onDone) {
    const questions = this.shuffle(quiz);
    let idx = 0, score = 0, total = questions.length;
    const timerState = { seconds: 0, interval: null };

    const render = () => {
      if (idx >= total) {
        clearInterval(timerState.interval);
        const pct = Math.round(score/total*100);
        const emoji = pct>=80?'🔥':pct>=50?'👍':'💪';
        container.innerHTML = `
          <div class="score-bar"><span class="badge badge-blue">Quiz Complete</span></div>
          <div style="text-align:center;padding:20px">
            <div style="font-size:2.5rem;margin-bottom:8px">${emoji}</div>
            <h3>${score}/${total} correct (${pct}%)</h3>
            <p style="color:var(--text2);margin:8px 0">Time: ${timerState.seconds}s</p>
            <button class="btn btn-primary" onclick="Games.renderQuiz(this.closest('.game-zone').querySelector('.game-body'),${JSON.stringify(quiz).replace(/"/g,'&quot;')})">🔄 Retry</button>
          </div>`;
        return;
      }
      const q = questions[idx];
      container.innerHTML = `
        <div class="score-bar">
          <span class="badge badge-green">✓ ${score}</span>
          <span class="badge badge-red">✗ ${idx-score}</span>
          <span style="margin-left:auto" class="game-timer">⏱ <span id="qTimer">${timerState.seconds}s</span></span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${idx/total*100}%"></div></div>
        <p class="quiz-question">${idx+1}. ${q.q}</p>
        <div class="quiz-options">${q.opts.map((o,i)=>`<div class="quiz-opt" data-i="${i}">${o}</div>`).join('')}</div>
        <div id="qExp"></div>`;

      container.querySelectorAll('.quiz-opt').forEach(el => {
        el.addEventListener('click', () => {
          const picked = +el.dataset.i;
          container.querySelectorAll('.quiz-opt').forEach(o => {
            o.classList.add('disabled');
            if(+o.dataset.i === q.ans) o.classList.add('correct');
          });
          if(picked === q.ans) { score++; el.classList.add('correct'); }
          else el.classList.add('wrong');
          document.getElementById('qExp').innerHTML = `<div class="explanation">💡 ${q.exp}</div>`;
          setTimeout(() => { idx++; render(); }, 1800);
        });
      });
    };

    timerState.interval = setInterval(() => {
      timerState.seconds++;
      const el = document.getElementById('qTimer');
      if(el) el.textContent = timerState.seconds + 's';
    }, 1000);
    render();
  },

  // ─── FLASHCARD GAME ───
  renderFlashcards(container, quiz) {
    const cards = this.shuffle(quiz);
    let idx = 0;
    const render = () => {
      if(idx >= cards.length) {
        container.innerHTML = `<div style="text-align:center;padding:20px">
          <h3>🎉 All cards reviewed!</h3>
          <button class="btn btn-primary" style="margin-top:12px" onclick="Games.renderFlashcards(this.closest('.game-zone').querySelector('.game-body'),${JSON.stringify(quiz).replace(/"/g,'&quot;')})">🔄 Restart</button>
        </div>`;
        return;
      }
      const c = cards[idx];
      container.innerHTML = `
        <p style="font-size:.8rem;color:var(--text2);margin-bottom:8px">Card ${idx+1}/${cards.length} — Click to flip</p>
        <div class="flashcard" id="fc">
          <div class="flashcard-inner">
            <div class="flashcard-front"><strong>${c.q}</strong></div>
            <div class="flashcard-back">${c.opts[c.ans]}<br><br><em style="font-size:.78rem">${c.exp}</em></div>
          </div>
        </div>
        <div style="display:flex;gap:8px;justify-content:center;margin-top:8px">
          <button class="btn btn-outline btn-sm" id="fcNext">Next →</button>
        </div>`;
      document.getElementById('fc').addEventListener('click', () => document.getElementById('fc').classList.toggle('flipped'));
      document.getElementById('fcNext').addEventListener('click', () => { idx++; render(); });
    };
    render();
  },

  // ─── FDE SIMULATOR ───
  renderFDE(container) {
    const steps = [
      {phase:'FETCH', desc:'PC contents copied to MAR', regs:{PC:'0101',MAR:'0101',MDR:'—',CIR:'—',ACC:'—'}, highlight:['PC','MAR']},
      {phase:'FETCH', desc:'Address bus carries address from MAR to memory', regs:{PC:'0101',MAR:'0101',MDR:'—',CIR:'—',ACC:'—'}, highlight:['MAR']},
      {phase:'FETCH', desc:'Data at address loaded into MDR via data bus', regs:{PC:'0101',MAR:'0101',MDR:'LDD 42',CIR:'—',ACC:'—'}, highlight:['MDR']},
      {phase:'FETCH', desc:'PC incremented (PC++)', regs:{PC:'0110',MAR:'0101',MDR:'LDD 42',CIR:'—',ACC:'—'}, highlight:['PC']},
      {phase:'FETCH', desc:'MDR contents copied to CIR', regs:{PC:'0110',MAR:'0101',MDR:'LDD 42',CIR:'LDD 42',ACC:'—'}, highlight:['MDR','CIR']},
      {phase:'DECODE', desc:'CU decodes instruction in CIR → opcode LDD, operand 42', regs:{PC:'0110',MAR:'0101',MDR:'LDD 42',CIR:'LDD 42',ACC:'—'}, highlight:['CIR']},
      {phase:'EXECUTE', desc:'Address 42 sent to MAR, data fetched to MDR, loaded to ACC', regs:{PC:'0110',MAR:'0042',MDR:'00FF',CIR:'LDD 42',ACC:'00FF'}, highlight:['MAR','MDR','ACC']},
    ];
    let idx = 0;
    const render = () => {
      const s = steps[idx];
      const phaseColor = s.phase==='FETCH'?'var(--accent)':s.phase==='DECODE'?'var(--orange)':'var(--green)';
      container.innerHTML = `
        <div class="score-bar">
          <span class="badge" style="background:${phaseColor}22;color:${phaseColor}">${s.phase}</span>
          <span style="font-size:.82rem;color:var(--text2)">Step ${idx+1}/${steps.length}</span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${(idx+1)/steps.length*100}%;background:${phaseColor}"></div></div>
        <p style="margin:12px 0;font-size:.92rem">${s.desc}</p>
        <div class="fde-visual">
          ${['PC','MAR','MDR','CIR','ACC'].map(r=>`
            <div class="fde-box ${s.highlight.includes(r)?'active':''}">
              <div class="label">${r}</div>
              <div class="value">${s.regs[r]}</div>
            </div>`).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn btn-outline btn-sm" ${idx===0?'disabled':''} onclick="Games._fdeStep(this,-1)">← Back</button>
          <button class="btn btn-primary btn-sm" onclick="Games._fdeStep(this,1)">${idx===steps.length-1?'🔄 Restart':'Next →'}</button>
        </div>`;
    };
    this._fdeSteps = steps;
    this._fdeIdx = 0;
    this._fdeRender = render;
    this._fdeContainer = container;
    render();
  },
  _fdeStep(btn, dir) {
    if(dir === 1 && this._fdeIdx >= this._fdeSteps.length-1) this._fdeIdx = -1;
    this._fdeIdx += dir;
    if(this._fdeIdx < 0) this._fdeIdx = 0;
    const s = this._fdeSteps[this._fdeIdx];
    const phaseColor = s.phase==='FETCH'?'var(--accent)':s.phase==='DECODE'?'var(--orange)':'var(--green)';
    this._fdeContainer.innerHTML = `
      <div class="score-bar">
        <span class="badge" style="background:${phaseColor}22;color:${phaseColor}">${s.phase}</span>
        <span style="font-size:.82rem;color:var(--text2)">Step ${this._fdeIdx+1}/${this._fdeSteps.length}</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${(this._fdeIdx+1)/this._fdeSteps.length*100}%;background:${phaseColor}"></div></div>
      <p style="margin:12px 0;font-size:.92rem">${s.desc}</p>
      <div class="fde-visual">
        ${['PC','MAR','MDR','CIR','ACC'].map(r=>`
          <div class="fde-box ${s.highlight.includes(r)?'active':''}">
            <div class="label">${r}</div>
            <div class="value">${s.regs[r]}</div>
          </div>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <button class="btn btn-outline btn-sm" ${this._fdeIdx===0?'disabled':''} onclick="Games._fdeStep(this,-1)">← Back</button>
        <button class="btn btn-primary btn-sm" onclick="Games._fdeStep(this,1)">${this._fdeIdx===this._fdeSteps.length-1?'🔄 Restart':'Next →'}</button>
      </div>`;
  },

  // ─── SQL CHALLENGE ───
  renderSQL(container) {
    const challenges = [
      {task:"Select ALL columns from a table called 'Students'", answer:"SELECT * FROM Students", hint:"SELECT ... FROM ..."},
      {task:"Select the Name and Age from 'Students' WHERE Age > 18", answer:"SELECT Name, Age FROM Students WHERE Age > 18", hint:"SELECT cols FROM table WHERE condition"},
      {task:"Insert a new record: Name='Ali', Age=17 into 'Students'", answer:"INSERT INTO Students (Name, Age) VALUES ('Ali', 17)", hint:"INSERT INTO table (cols) VALUES (vals)"},
      {task:"Delete all students where Age < 16", answer:"DELETE FROM Students WHERE Age < 16", hint:"DELETE FROM table WHERE condition"},
      {task:"Update the Age to 20 for student named 'Sara'", answer:"UPDATE Students SET Age = 20 WHERE Name = 'Sara'", hint:"UPDATE table SET col = val WHERE condition"},
      {task:"Select Name from Students ORDER BY Age descending", answer:"SELECT Name FROM Students ORDER BY Age DESC", hint:"... ORDER BY col DESC"},
      {task:"Create a table 'Courses' with CourseID (INT, PRIMARY KEY) and CourseName (VARCHAR)", answer:"CREATE TABLE Courses (CourseID INT PRIMARY KEY, CourseName VARCHAR)", hint:"CREATE TABLE name (col type, ...)"},
    ];
    let idx = 0, score = 0;
    const render = () => {
      if(idx >= challenges.length) {
        container.innerHTML = `<div style="text-align:center;padding:20px">
          <h3>🎉 ${score}/${challenges.length} correct!</h3>
          <button class="btn btn-primary" style="margin-top:12px" onclick="Games.renderSQL(this.closest('.game-zone').querySelector('.game-body'))">🔄 Retry</button>
        </div>`;
        return;
      }
      const c = challenges[idx];
      container.innerHTML = `
        <div class="score-bar">
          <span class="badge badge-green">✓ ${score}</span>
          <span class="badge badge-blue">${idx+1}/${challenges.length}</span>
        </div>
        <p class="quiz-question">📝 ${c.task}</p>
        <p style="font-size:.78rem;color:var(--text2);margin-bottom:8px">Hint: <code>${c.hint}</code></p>
        <textarea class="sql-editor" id="sqlInput" rows="2" placeholder="Type your SQL here..."></textarea>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn btn-primary btn-sm" id="sqlCheck">Check ✓</button>
          <button class="btn btn-outline btn-sm" id="sqlShow">Show Answer</button>
          <button class="btn btn-outline btn-sm" id="sqlSkip">Skip →</button>
        </div>
        <div id="sqlResult"></div>`;
      document.getElementById('sqlCheck').addEventListener('click', () => {
        // Normalize: trim, collapse whitespace, strip trailing semicolons, lowercase
        const normalize = s => s.trim().replace(/\s+/g,' ').replace(/;+\s*$/,'').toLowerCase();
        const input = normalize(document.getElementById('sqlInput').value);
        const expected = normalize(c.answer);
        const ok = input === expected;
        if(ok) score++;
        document.getElementById('sqlResult').innerHTML = ok
          ? `<div class="explanation" style="border-color:var(--green)">✅ Correct!</div>`
          : `<div class="explanation" style="border-color:var(--red)">❌ Not quite. Expected:<br><code>${c.answer}</code></div>`;
        setTimeout(() => { idx++; render(); }, 2000);
      });
      document.getElementById('sqlShow').addEventListener('click', () => {
        document.getElementById('sqlInput').value = c.answer;
      });
      document.getElementById('sqlSkip').addEventListener('click', () => { idx++; render(); });
    };
    render();
  },

  // ─── SPEED ROUND (timed quiz) ───
  renderSpeedRound(container, allTopics) {
    let allQ = [];
    allTopics.forEach(t => t.quiz.forEach(q => allQ.push({...q, topic: t.title})));
    allQ = this.shuffle(allQ).slice(0, 15);
    let idx=0, score=0, timeLeft=60;
    const timer = setInterval(()=>{
      timeLeft--;
      const el=document.getElementById('srTimer');
      if(el) { el.textContent=timeLeft+'s'; if(timeLeft<=10) el.parentElement.classList.add('danger'); }
      if(timeLeft<=0) { clearInterval(timer); idx=allQ.length; render(); }
    },1000);
    const render = () => {
      if(idx>=allQ.length) {
        clearInterval(timer);
        container.innerHTML=`<div style="text-align:center;padding:20px">
          <div style="font-size:2rem;margin-bottom:8px">⚡</div>
          <h3>${score}/${Math.min(idx,allQ.length)} in ${60-timeLeft}s!</h3>
          <button class="btn btn-primary" style="margin-top:12px" onclick="Games.renderSpeedRound(this.closest('.game-zone').querySelector('.game-body'),TOPICS)">🔄 Again</button>
        </div>`;
        return;
      }
      const q=allQ[idx];
      container.innerHTML=`
        <div class="score-bar">
          <span class="badge badge-green">✓ ${score}</span>
          <span class="badge badge-blue">${q.topic}</span>
          <span style="margin-left:auto" class="game-timer ${timeLeft<=10?'danger':''}">⏱ <span id="srTimer">${timeLeft}s</span></span>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${idx/allQ.length*100}%"></div></div>
        <p class="quiz-question">${q.q}</p>
        <div class="quiz-options">${q.opts.map((o,i)=>`<div class="quiz-opt" data-i="${i}">${o}</div>`).join('')}</div>`;
      container.querySelectorAll('.quiz-opt').forEach(el=>{
        el.addEventListener('click',()=>{
          if(+el.dataset.i===q.ans) score++;
          idx++; render();
        });
      });
    };
    render();
  }
};
