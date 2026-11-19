/**
 * 數位科技概論練習平台 - 核心前端邏輯
 */

(function () {
  // 核心狀態管理
  const state = {
    currentTab: "practice", // practice, exam, mistakes, flashcards, browse
    currentChapter: "all",  // "all", 3, 4, 5, 6
    practiceIndex: 0,
    practiceQuestions: [],
    userAnswers: {},       // { [questionId]: chosenKey }
    bookmarks: new Set(),  // Set of questionId
    wrongQuestionIds: new Set(), // Set of questionId
    
    // 考試模式狀態
    examState: {
      active: false,
      questions: [],
      currentIndex: 0,
      userAnswers: {},     // { [questionId]: chosenKey }
      startTime: null,
      timerInterval: null,
      remainingSeconds: 1200, // 20 分鐘
      submitted: false,
      score: 0
    },

    // 錯題本模式狀態
    mistakesIndex: 0,
    mistakesQuestions: [],
    
    // 搜尋模式
    searchQuery: ""
  };

  // DOM 元素快取
  const dom = {
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    navTabs: document.querySelectorAll(".tab-btn"),
    viewContainers: {
      practice: document.getElementById("viewPractice"),
      exam: document.getElementById("viewExam"),
      mistakes: document.getElementById("viewMistakes"),
      flashcards: document.getElementById("viewFlashcards"),
      browse: document.getElementById("viewBrowse")
    },
    // 頂部統計
    statTotal: document.getElementById("statTotal"),
    statAccuracy: document.getElementById("statAccuracy"),
    statMistakes: document.getElementById("statMistakes"),
    statBookmarks: document.getElementById("statBookmarks")
  };

  // 初始化載入
  function init() {
    loadFromLocalStorage();
    initTheme();
    bindGlobalEvents();
    filterPracticeQuestions();
    renderStats();
    renderPracticeView();
    renderExamView();
    renderFlashcardsView();
    renderBrowseView();
  }

  // 本地儲存讀取
  function loadFromLocalStorage() {
    try {
      const savedTheme = localStorage.getItem("app_theme") || "light";
      document.documentElement.setAttribute("data-theme", savedTheme);

      const savedBookmarks = localStorage.getItem("app_bookmarks");
      if (savedBookmarks) {
        state.bookmarks = new Set(JSON.parse(savedBookmarks));
      }

      const savedWrongs = localStorage.getItem("app_wrong_questions");
      if (savedWrongs) {
        state.wrongQuestionIds = new Set(JSON.parse(savedWrongs));
      }

      const savedAnswers = localStorage.getItem("app_user_answers");
      if (savedAnswers) {
        state.userAnswers = JSON.parse(savedAnswers);
      }
    } catch (e) {
      console.warn("無法從 LocalStorage 讀取資料", e);
    }
  }

  // 儲存至 LocalStorage
  function saveToLocalStorage() {
    try {
      localStorage.setItem("app_bookmarks", JSON.stringify([...state.bookmarks]));
      localStorage.setItem("app_wrong_questions", JSON.stringify([...state.wrongQuestionIds]));
      localStorage.setItem("app_user_answers", JSON.stringify(state.userAnswers));
    } catch (e) {
      console.warn("無法存入 LocalStorage", e);
    }
  }

  // 主題切換
  function initTheme() {
    dom.themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const nextTheme = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nextTheme);
      dom.themeToggleBtn.innerHTML = nextTheme === "dark" ? "☀️" : "🌙";
      localStorage.setItem("app_theme", nextTheme);
    });

    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    dom.themeToggleBtn.innerHTML = isDark ? "☀️" : "🌙";
  }

  // 綁定全域切換事件
  function bindGlobalEvents() {
    // 頂部分頁切換
    dom.navTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetView = tab.dataset.view;
        switchTab(targetView);
      });
    });

    // 鍵盤快捷鍵 (A, B, C, D / 1, 2, 3, 4 / 方向鍵左右切題)
    window.addEventListener("keydown", (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        return;
      }

      const key = e.key.toUpperCase();

      if (state.currentTab === "practice") {
        if (["A", "B", "C", "D"].includes(key)) {
          handleAnswerSelect(key);
        } else if (["1", "2", "3", "4"].includes(key)) {
          const map = { "1": "A", "2": "B", "3": "C", "4": "D" };
          handleAnswerSelect(map[key]);
        } else if (e.key === "ArrowLeft") {
          prevPracticeQuestion();
        } else if (e.key === "ArrowRight") {
          nextPracticeQuestion();
        }
      } else if (state.currentTab === "exam" && state.examState.active && !state.examState.submitted) {
        if (["A", "B", "C", "D"].includes(key)) {
          handleExamAnswerSelect(key);
        } else if (["1", "2", "3", "4"].includes(key)) {
          const map = { "1": "A", "2": "B", "3": "C", "4": "D" };
          handleExamAnswerSelect(map[key]);
        } else if (e.key === "ArrowLeft") {
          prevExamQuestion();
        } else if (e.key === "ArrowRight") {
          nextExamQuestion();
        }
      }
    });
  }

  // 切換分頁檢視
  function switchTab(tabName) {
    state.currentTab = tabName;

    dom.navTabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.view === tabName);
    });

    Object.entries(dom.viewContainers).forEach(([name, container]) => {
      if (container) {
        container.style.display = name === tabName ? "block" : "none";
      }
    });

    if (tabName === "practice") {
      renderPracticeView();
    } else if (tabName === "exam") {
      renderExamView();
    } else if (tabName === "mistakes") {
      filterMistakesQuestions();
      renderMistakesView();
    } else if (tabName === "flashcards") {
      renderFlashcardsView();
    } else if (tabName === "browse") {
      renderBrowseView();
    }

    renderStats();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 更新頂部統計數據
  function renderStats() {
    const answeredCount = Object.keys(state.userAnswers).length;
    let correctCount = 0;

    Object.entries(state.userAnswers).forEach(([qid, ans]) => {
      const q = QUESTION_BANK.find((item) => item.id === Number(qid));
      if (q && q.answer === ans) {
        correctCount++;
      }
    });

    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    dom.statTotal.textContent = `${answeredCount} / ${QUESTION_BANK.length}`;
    dom.statAccuracy.textContent = answeredCount > 0 ? `${accuracy}%` : "--%";
    dom.statMistakes.textContent = state.wrongQuestionIds.size;
    dom.statBookmarks.textContent = state.bookmarks.size;
  }

  // ==========================================
  // 1. 練習模式 (Practice Mode)
  // ==========================================
  function filterPracticeQuestions() {
    if (state.currentChapter === "all") {
      state.practiceQuestions = [...QUESTION_BANK];
    } else {
      state.practiceQuestions = QUESTION_BANK.filter(
        (q) => q.chapter === Number(state.currentChapter)
      );
    }
    state.practiceIndex = 0;
  }

  function renderPracticeView() {
    const container = dom.viewContainers.practice;
    if (!container) return;

    const currentQ = state.practiceQuestions[state.practiceIndex];
    if (!currentQ) {
      container.innerHTML = `<div class="empty-state">此章節尚無題目</div>`;
      return;
    }

    const answered = state.userAnswers[currentQ.id];
    const isBookmarked = state.bookmarks.has(currentQ.id);

    container.innerHTML = `
      <!-- 章節選擇過濾列 -->
      <div class="control-bar fade-in">
        <div class="filter-group">
          <span class="filter-label">選擇章節：</span>
          <button class="chip-btn ${state.currentChapter === "all" ? "active" : ""}" data-ch="all">全範圍 (103題)</button>
          <button class="chip-btn ${state.currentChapter === "3" ? "active" : ""}" data-ch="3">第 3 章 硬體 (35題)</button>
          <button class="chip-btn ${state.currentChapter === "4" ? "active" : ""}" data-ch="4">第 4 章 軟體與網路 (35題)</button>
          <button class="chip-btn ${state.currentChapter === "5" ? "active" : ""}" data-ch="5">第 5 章 運作與發展 (23題)</button>
          <button class="chip-btn ${state.currentChapter === "6" ? "active" : ""}" data-ch="6">第 6 章 辦公室與影音 (10題)</button>
        </div>
        <div class="view-controls">
          <button id="togglePaletteBtn" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">
            🗺️ 題目導航板
          </button>
          <button id="resetChapterAnswersBtn" class="btn btn-outline" title="清除本章節答題紀錄" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">
            🔄 重置作答
          </button>
        </div>
      </div>

      <!-- 題號導航板 (Palette) -->
      <div id="practicePalette" class="question-palette" style="display: none; margin-bottom: 1.5rem;">
        <div class="palette-title">
          <span>題目跳轉 (${state.practiceQuestions.length} 題)</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">🟩 正確 🟥 錯誤 ⬜ 未答</span>
        </div>
        <div class="palette-grid">
          ${state.practiceQuestions
            .map((q, idx) => {
              const ans = state.userAnswers[q.id];
              let statusClass = "";
              if (ans) {
                statusClass = ans === q.answer ? "correct" : "wrong";
              }
              const isCurrent = idx === state.practiceIndex ? "current" : "";
              return `<button class="palette-btn ${statusClass} ${isCurrent}" data-jump="${idx}">${idx + 1}</button>`;
            })
            .join("")}
        </div>
      </div>

      <!-- 主題目卡片 -->
      <div class="quiz-card fade-in">
        <div class="quiz-header">
          <div class="badge-group">
            <span class="badge badge-chapter">第 ${currentQ.chapter} 章</span>
            <span class="badge badge-source">${currentQ.source}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="question-progress">第 ${state.practiceIndex + 1} / ${state.practiceQuestions.length} 題</span>
            <button class="bookmark-btn ${isBookmarked ? "active" : ""}" id="bookmarkBtn" title="加入/取消收藏">
              ${isBookmarked ? "★" : "☆"}
            </button>
          </div>
        </div>

        <div class="question-title">
          ${currentQ.question}
        </div>

        <div class="options-list">
          ${currentQ.options
            .map((opt) => {
              let optClass = "";
              let feedbackHtml = "";

              if (answered) {
                if (opt.key === currentQ.answer) {
                  optClass = "correct";
                  feedbackHtml = `<span class="feedback-tag correct">✓ 正確解答</span>`;
                } else if (opt.key === answered) {
                  optClass = "wrong";
                  feedbackHtml = `<span class="feedback-tag wrong">✗ 您的選擇</span>`;
                }
              }

              return `
                <button class="option-btn ${optClass}" data-key="${opt.key}" ${answered ? "disabled" : ""}>
                  <span class="option-key">${opt.key}</span>
                  <span class="option-text">${opt.text}</span>
                  ${feedbackHtml}
                </button>
              `;
            })
            .join("")}
        </div>

        ${
          answered
            ? `
          <div class="explanation-box fade-in">
            <div class="explanation-header">
              <span>💡 精解說明</span>
            </div>
            <div class="explanation-content">
              ${currentQ.explanation}
            </div>
          </div>
        `
            : `
          <div style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 1.5rem; text-align: center;">
            提示：可使用鍵盤數字鍵 1~4 或 A~D 快捷選擇答案，左右鍵 ← → 可快速切換題目
          </div>
        `
        }

        <div class="quiz-actions">
          <button id="prevQBtn" class="btn btn-outline" ${state.practiceIndex === 0 ? "disabled" : ""}>
            ← 上一題
          </button>
          
          <div style="display: flex; gap: 0.5rem;">
            ${
              answered
                ? `
              <button id="retryCurrentBtn" class="btn btn-outline">
                重練此題
              </button>
            `
                : ""
            }
            <button id="nextQBtn" class="btn btn-primary" ${
              state.practiceIndex === state.practiceQuestions.length - 1 ? "disabled" : ""
            }>
              下一題 →
            </button>
          </div>
        </div>
      </div>
    `;

    bindPracticeEvents();
  }

  function bindPracticeEvents() {
    // 章節過濾按鈕
    document.querySelectorAll(".chip-btn[data-ch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.currentChapter = btn.dataset.ch;
        filterPracticeQuestions();
        renderPracticeView();
      });
    });

    // 題目跳轉抽屜
    const toggleBtn = document.getElementById("togglePaletteBtn");
    const palette = document.getElementById("practicePalette");
    if (toggleBtn && palette) {
      toggleBtn.addEventListener("click", () => {
        palette.style.display = palette.style.display === "none" ? "block" : "none";
      });
    }

    // 重置答題
    const resetBtn = document.getElementById("resetChapterAnswersBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("確定要重置目前章節的所有作答紀錄嗎？")) {
          state.practiceQuestions.forEach((q) => {
            delete state.userAnswers[q.id];
            state.wrongQuestionIds.delete(q.id);
          });
          saveToLocalStorage();
          renderStats();
          renderPracticeView();
        }
      });
    }

    // 題目跳轉按鈕
    document.querySelectorAll(".palette-btn[data-jump]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.practiceIndex = Number(btn.dataset.jump);
        renderPracticeView();
      });
    });

    // 選項按鈕點擊
    document.querySelectorAll(".option-btn:not(:disabled)").forEach((btn) => {
      btn.addEventListener("click", () => {
        handleAnswerSelect(btn.dataset.key);
      });
    });

    // 收藏切換
    const bookmarkBtn = document.getElementById("bookmarkBtn");
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener("click", () => {
        const currentQ = state.practiceQuestions[state.practiceIndex];
        if (state.bookmarks.has(currentQ.id)) {
          state.bookmarks.delete(currentQ.id);
        } else {
          state.bookmarks.add(currentQ.id);
        }
        saveToLocalStorage();
        renderStats();
        renderPracticeView();
      });
    }

    // 上一題 / 下一題
    const prevBtn = document.getElementById("prevQBtn");
    if (prevBtn) prevBtn.addEventListener("click", prevPracticeQuestion);

    const nextBtn = document.getElementById("nextQBtn");
    if (nextBtn) nextBtn.addEventListener("click", nextPracticeQuestion);

    // 重練當前題目
    const retryBtn = document.getElementById("retryCurrentBtn");
    if (retryBtn) {
      retryBtn.addEventListener("click", () => {
        const currentQ = state.practiceQuestions[state.practiceIndex];
        delete state.userAnswers[currentQ.id];
        saveToLocalStorage();
        renderStats();
        renderPracticeView();
      });
    }
  }

  function handleAnswerSelect(chosenKey) {
    const currentQ = state.practiceQuestions[state.practiceIndex];
    if (!currentQ || state.userAnswers[currentQ.id]) return;

    state.userAnswers[currentQ.id] = chosenKey;

    if (chosenKey !== currentQ.answer) {
      state.wrongQuestionIds.add(currentQ.id);
    } else {
      // 答對時從錯題本自動移除
      state.wrongQuestionIds.delete(currentQ.id);
    }

    saveToLocalStorage();
    renderStats();
    renderPracticeView();
  }

  function prevPracticeQuestion() {
    if (state.practiceIndex > 0) {
      state.practiceIndex--;
      renderPracticeView();
    }
  }

  function nextPracticeQuestion() {
    if (state.practiceIndex < state.practiceQuestions.length - 1) {
      state.practiceIndex++;
      renderPracticeView();
    }
  }

  // ==========================================
  // 2. 模擬測驗模式 (Exam Mode)
  // ==========================================
  function renderExamView() {
    const container = dom.viewContainers.exam;
    if (!container) return;

    if (!state.examState.active && !state.examState.submitted) {
      // 測驗設定與準備畫面
      container.innerHTML = `
        <div class="exam-setup-card fade-in">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⏱️</div>
          <h2>數位科技概論 模擬全真測驗</h2>
          <p>自訂測驗範圍與題目數量，仿造升學與學科能力測驗計時模式。</p>
          
          <div class="form-group">
            <label for="examChapterSelect">測驗範圍：</label>
            <select id="examChapterSelect" class="select-control">
              <option value="all">全範圍綜合測驗（第 3 ~ 6 章）</option>
              <option value="3">第 3 章 系統平台的組成架構－硬體</option>
              <option value="4">第 4 章 系統平台的組成架構－軟體與網路</option>
              <option value="5">第 5 章 系統平台的運作與未來發展</option>
              <option value="6">第 6 章 辦公室軟體與影像／影音軟體</option>
            </select>
          </div>

          <div class="form-group">
            <label for="examCountSelect">測驗題數：</label>
            <select id="examCountSelect" class="select-control">
              <option value="20">20 題 (建議測驗時間 15 分鐘)</option>
              <option value="30">30 題 (建議測驗時間 25 分鐘)</option>
              <option value="50">50 題 (精選大題庫 40 分鐘)</option>
              <option value="max">全部題目 (完整考卷)</option>
            </select>
          </div>

          <button id="startExamBtn" class="btn btn-primary" style="width: 100%; padding: 0.85rem; font-size: 1.1rem; margin-top: 1rem;">
            開始模擬測驗
          </button>
        </div>
      `;

      document.getElementById("startExamBtn").addEventListener("click", startExam);
    } else if (state.examState.active && !state.examState.submitted) {
      // 測驗進行中畫面
      renderActiveExamView();
    } else if (state.examState.submitted) {
      // 測驗結果畫面
      renderExamResultView();
    }
  }

  function startExam() {
    const chapterVal = document.getElementById("examChapterSelect").value;
    const countVal = document.getElementById("examCountSelect").value;

    let candidateQuestions = [];
    if (chapterVal === "all") {
      candidateQuestions = [...QUESTION_BANK];
    } else {
      candidateQuestions = QUESTION_BANK.filter((q) => q.chapter === Number(chapterVal));
    }

    // 隨機洗牌
    candidateQuestions.sort(() => Math.random() - 0.5);

    let finalCount = candidateQuestions.length;
    if (countVal !== "max") {
      finalCount = Math.min(Number(countVal), candidateQuestions.length);
    }

    state.examState.questions = candidateQuestions.slice(0, finalCount);
    state.examState.currentIndex = 0;
    state.examState.userAnswers = {};
    state.examState.active = true;
    state.examState.submitted = false;
    state.examState.remainingSeconds = finalCount * 45; // 每題 45 秒
    state.examState.startTime = Date.now();

    // 啟動倒數計時器
    if (state.examState.timerInterval) clearInterval(state.examState.timerInterval);
    state.examState.timerInterval = setInterval(() => {
      state.examState.remainingSeconds--;
      updateExamTimerDisplay();
      if (state.examState.remainingSeconds <= 0) {
        clearInterval(state.examState.timerInterval);
        alert("測驗時間截止，系統將自動為您提交試卷！");
        submitExam();
      }
    }, 1000);

    renderActiveExamView();
  }

  function updateExamTimerDisplay() {
    const timerEl = document.getElementById("examTimer");
    if (!timerEl) return;
    const mins = Math.floor(state.examState.remainingSeconds / 60);
    const secs = state.examState.remainingSeconds % 60;
    timerEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function renderActiveExamView() {
    const container = dom.viewContainers.exam;
    const currentQ = state.examState.questions[state.examState.currentIndex];
    const userSelected = state.examState.userAnswers[currentQ.id];
    const totalCount = state.examState.questions.length;
    const answeredCount = Object.keys(state.examState.userAnswers).length;

    container.innerHTML = `
      <!-- 考試頂部資訊列 -->
      <div class="control-bar fade-in" style="justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span class="timer-badge">
            ⏱️ <span id="examTimer">--:--</span>
          </span>
          <span style="font-size: 0.9rem; font-weight: 600; color: var(--text-muted);">
            已作答：${answeredCount} / ${totalCount} 題
          </span>
        </div>
        <button id="submitExamBtn" class="btn btn-primary" style="background: #10b981; border: none;">
          📝 繳卷結算
        </button>
      </div>

      <!-- 考試題目卡片 -->
      <div class="quiz-card fade-in">
        <div class="quiz-header">
          <div class="badge-group">
            <span class="badge badge-chapter">第 ${currentQ.chapter} 章</span>
            <span class="badge badge-source">模擬試題</span>
          </div>
          <span class="question-progress">第 ${state.examState.currentIndex + 1} / ${totalCount} 題</span>
        </div>

        <div class="question-title">
          ${currentQ.question}
        </div>

        <div class="options-list">
          ${currentQ.options
            .map((opt) => {
              const isSelected = userSelected === opt.key;
              return `
                <button class="option-btn ${isSelected ? "selected" : ""}" data-exam-key="${opt.key}">
                  <span class="option-key">${opt.key}</span>
                  <span class="option-text">${opt.text}</span>
                </button>
              `;
            })
            .join("")}
        </div>

        <div class="quiz-actions">
          <button id="examPrevBtn" class="btn btn-outline" ${state.examState.currentIndex === 0 ? "disabled" : ""}>
            ← 上一題
          </button>
          
          <button id="examNextBtn" class="btn btn-primary" ${
            state.examState.currentIndex === totalCount - 1 ? "disabled" : ""
          }>
            下一題 →
          </button>
        </div>
      </div>

      <!-- 答題卡跳轉區 -->
      <div class="question-palette" style="margin-top: 1.5rem;">
        <div class="palette-title">
          <span>考卷答題卡（點選題號可快速跳轉）</span>
        </div>
        <div class="palette-grid">
          ${state.examState.questions
            .map((q, idx) => {
              const isAns = state.examState.userAnswers[q.id] !== undefined;
              const isCur = idx === state.examState.currentIndex;
              return `
                <button class="palette-btn ${isAns ? "current" : ""} ${isCur ? "selected" : ""}" 
                        style="${isAns ? "background: var(--primary-light); color: var(--primary); font-weight: bold;" : ""}" 
                        data-exam-jump="${idx}">
                  ${idx + 1}
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
    `;

    updateExamTimerDisplay();

    // 綁定考試模式按鈕事件
    document.querySelectorAll(".option-btn[data-exam-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        handleExamAnswerSelect(btn.dataset.examKey);
      });
    });

    document.querySelectorAll(".palette-btn[data-exam-jump]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.examState.currentIndex = Number(btn.dataset.examJump);
        renderActiveExamView();
      });
    });

    const prevBtn = document.getElementById("examPrevBtn");
    if (prevBtn) prevBtn.addEventListener("click", prevExamQuestion);

    const nextBtn = document.getElementById("examNextBtn");
    if (nextBtn) nextBtn.addEventListener("click", nextExamQuestion);

    const submitBtn = document.getElementById("submitExamBtn");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const unAnsCount = totalCount - Object.keys(state.examState.userAnswers).length;
        let confirmMsg = "確定要送出試卷嗎？";
        if (unAnsCount > 0) {
          confirmMsg = `您還有 ${unAnsCount} 題尚未作答，確定要現在交卷結算嗎？`;
        }
        if (confirm(confirmMsg)) {
          submitExam();
        }
      });
    }
  }

  function handleExamAnswerSelect(key) {
    const currentQ = state.examState.questions[state.examState.currentIndex];
    state.examState.userAnswers[currentQ.id] = key;
    renderActiveExamView();
  }

  function prevExamQuestion() {
    if (state.examState.currentIndex > 0) {
      state.examState.currentIndex--;
      renderActiveExamView();
    }
  }

  function nextExamQuestion() {
    if (state.examState.currentIndex < state.examState.questions.length - 1) {
      state.examState.currentIndex++;
      renderActiveExamView();
    }
  }

  function submitExam() {
    if (state.examState.timerInterval) clearInterval(state.examState.timerInterval);

    state.examState.active = false;
    state.examState.submitted = true;

    // 計算分數
    let correctCount = 0;
    const questions = state.examState.questions;

    questions.forEach((q) => {
      const userAns = state.examState.userAnswers[q.id];
      if (userAns === q.answer) {
        correctCount++;
        // 測驗答對時如果原本在錯題本，予以移除
        state.wrongQuestionIds.delete(q.id);
      } else {
        // 測驗做錯自動收錄至錯題本
        state.wrongQuestionIds.add(q.id);
      }
      // 同步回全域答題紀錄
      if (userAns) {
        state.userAnswers[q.id] = userAns;
      }
    });

    state.examState.score = Math.round((correctCount / questions.length) * 100);
    saveToLocalStorage();
    renderStats();
    renderExamResultView();
  }

  function renderExamResultView() {
    const container = dom.viewContainers.exam;
    const score = state.examState.score;
    const questions = state.examState.questions;
    let badgeText = "太強了！表現優異！🎉";
    let scoreColor = "var(--success)";

    if (score < 60) {
      badgeText = "加油！建議多複習錯題強化概念 💪";
      scoreColor = "var(--error)";
    } else if (score < 85) {
      badgeText = "成績良好！再接再厲邁向滿分 👍";
      scoreColor = "var(--primary)";
    }

    container.innerHTML = `
      <div class="result-card fade-in">
        <h2>模擬測驗成績單</h2>
        <div style="font-size: 1rem; color: var(--text-muted); margin-top: 0.25rem;">
          ${badgeText}
        </div>

        <div class="score-display" style="border-color: ${scoreColor};">
          <span class="score-num" style="color: ${scoreColor};">${score}</span>
          <span class="score-total">/ 100 分</span>
        </div>

        <div class="result-metrics">
          <div class="metric-item">
            <span class="metric-label">總題數</span>
            <span class="metric-val">${questions.length} 題</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">答對題數</span>
            <span class="metric-val" style="color: var(--success);">${
              questions.filter((q) => state.examState.userAnswers[q.id] === q.answer).length
            } 題</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">答錯題數</span>
            <span class="metric-val" style="color: var(--error);">${
              questions.filter((q) => state.examState.userAnswers[q.id] !== q.answer).length
            } 題</span>
          </div>
        </div>

        <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1.5rem;">
          <button id="reExamBtn" class="btn btn-primary">重新測驗一次</button>
          <button id="goMistakesBtn" class="btn btn-outline">查看錯題本 (${state.wrongQuestionIds.size})</button>
        </div>
      </div>

      <h3 style="margin-bottom: 1rem;">📋 測驗詳細試卷檢視與精解</h3>
      <div class="exam-review-list">
        ${questions
          .map((q, idx) => {
            const userAns = state.examState.userAnswers[q.id];
            const isCorrect = userAns === q.answer;

            return `
              <div class="quiz-card" style="margin-bottom: 1.25rem; border-left: 6px solid ${
                isCorrect ? "var(--success)" : "var(--error)"
              };">
                <div class="quiz-header">
                  <span class="badge badge-chapter">第 ${idx + 1} 題 / 第 ${q.chapter} 章</span>
                  <span class="badge ${isCorrect ? "badge-chapter" : "badge-source"}" style="color: ${
                    isCorrect ? "var(--success)" : "var(--error)"
                  }; font-weight: bold;">
                    ${isCorrect ? "✓ 答對" : `✗ 答錯（您的答案：${userAns || "未作答"}）`}
                  </span>
                </div>
                <div style="font-weight: 600; margin-bottom: 1rem;">${q.question}</div>
                <div class="options-list" style="margin-bottom: 1rem;">
                  ${q.options
                    .map((opt) => `
                    <div style="padding: 0.5rem 0.85rem; border-radius: 6px; font-size: 0.95rem; margin-bottom: 0.35rem; ${
                      opt.key === q.answer
                        ? "background: var(--success-bg); font-weight: bold; color: var(--success);"
                        : opt.key === userAns
                        ? "background: var(--error-bg); color: var(--error);"
                        : "background: var(--bg-subtle);"
                    }">
                      ${opt.key}. ${opt.text} ${opt.key === q.answer ? " ★ 正確答案" : ""}
                    </div>
                  `).join("")}
                </div>
                <div class="explanation-box" style="margin-bottom: 0;">
                  <div class="explanation-header">💡 精解說明</div>
                  <div class="explanation-content">${q.explanation}</div>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;

    document.getElementById("reExamBtn").addEventListener("click", () => {
      state.examState.submitted = false;
      state.examState.active = false;
      renderExamView();
    });

    document.getElementById("goMistakesBtn").addEventListener("click", () => {
      switchTab("mistakes");
    });
  }

  // ==========================================
  // 3. 錯題本模式 (Mistakes Mode)
  // ==========================================
  function filterMistakesQuestions() {
    state.mistakesQuestions = QUESTION_BANK.filter((q) => state.wrongQuestionIds.has(q.id));
    state.mistakesIndex = 0;
  }

  function renderMistakesView() {
    const container = dom.viewContainers.mistakes;
    if (!container) return;

    if (state.mistakesQuestions.length === 0) {
      container.innerHTML = `
        <div class="empty-state fade-in">
          <div class="empty-icon">🎉</div>
          <h3>太棒了！目前沒有任何做錯的題目！</h3>
          <p style="margin-top: 0.5rem; color: var(--text-muted);">
            在練習或模擬測驗中答錯的題目會自動收集到這裡，幫助您精準複習弱點。
          </p>
          <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="document.querySelector('[data-view=practice]').click()">
            前往題庫刷題
          </button>
        </div>
      `;
      return;
    }

    const currentQ = state.mistakesQuestions[state.mistakesIndex];
    const isBookmarked = state.bookmarks.has(currentQ.id);

    container.innerHTML = `
      <div class="control-bar fade-in">
        <div>
          <span style="font-weight: 700; color: var(--error);">❌ 錯題專項複習</span>
          <span style="color: var(--text-muted); font-size: 0.9rem; margin-left: 0.5rem;">
            共 ${state.mistakesQuestions.length} 題需強化
          </span>
        </div>
        <button id="clearAllMistakesBtn" class="btn btn-outline" style="font-size: 0.85rem; padding: 0.4rem 0.8rem;">
          清空錯題本
        </button>
      </div>

      <div class="quiz-card fade-in">
        <div class="quiz-header">
          <div class="badge-group">
            <span class="badge badge-chapter">第 ${currentQ.chapter} 章</span>
            <span class="badge" style="background: var(--error-bg); color: var(--error);">弱點重練</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="question-progress">錯題 ${state.mistakesIndex + 1} / ${state.mistakesQuestions.length}</span>
            <button class="bookmark-btn ${isBookmarked ? "active" : ""}" id="mistakeBookmarkBtn">
              ${isBookmarked ? "★" : "☆"}
            </button>
          </div>
        </div>

        <div class="question-title">${currentQ.question}</div>

        <div class="options-list">
          ${currentQ.options
            .map((opt) => `
              <button class="option-btn" data-mistake-key="${opt.key}">
                <span class="option-key">${opt.key}</span>
                <span class="option-text">${opt.text}</span>
              </button>
            `)
            .join("")}
        </div>

        <div id="mistakeFeedback" style="display: none; margin-bottom: 1.5rem;"></div>

        <div class="quiz-actions">
          <button id="prevMistakeBtn" class="btn btn-outline" ${state.mistakesIndex === 0 ? "disabled" : ""}>
            ← 上一題
          </button>
          <button id="removeThisMistakeBtn" class="btn btn-outline" style="color: var(--success); border-color: var(--success-border);">
            ✓ 我已經學會了（移出租借）
          </button>
          <button id="nextMistakeBtn" class="btn btn-primary" ${
            state.mistakesIndex === state.mistakesQuestions.length - 1 ? "disabled" : ""
          }>
            下一題 →
          </button>
        </div>
      </div>
    `;

    // 錯題選項點擊
    document.querySelectorAll(".option-btn[data-mistake-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.mistakeKey;
        const feedbackEl = document.getElementById("mistakeFeedback");
        if (key === currentQ.answer) {
          btn.classList.add("correct");
          feedbackEl.style.display = "block";
          feedbackEl.innerHTML = `
            <div class="explanation-box fade-in" style="border-left-color: var(--success);">
              <div class="explanation-header" style="color: var(--success);">🎉 答對了！太厲害了！</div>
              <div class="explanation-content">${currentQ.explanation}</div>
            </div>
          `;
          // 答對自動移除並更新
          state.wrongQuestionIds.delete(currentQ.id);
          saveToLocalStorage();
          renderStats();
        } else {
          btn.classList.add("wrong");
          feedbackEl.style.display = "block";
          feedbackEl.innerHTML = `
            <div class="explanation-box fade-in" style="border-left-color: var(--error);">
              <div class="explanation-header" style="color: var(--error);">❌ 再想想看，標準答案是 (${currentQ.answer})</div>
              <div class="explanation-content">${currentQ.explanation}</div>
            </div>
          `;
        }
      });
    });

    // 收藏切換
    const mistakeBookmarkBtn = document.getElementById("mistakeBookmarkBtn");
    if (mistakeBookmarkBtn) {
      mistakeBookmarkBtn.addEventListener("click", () => {
        if (state.bookmarks.has(currentQ.id)) {
          state.bookmarks.delete(currentQ.id);
        } else {
          state.bookmarks.add(currentQ.id);
        }
        saveToLocalStorage();
        renderStats();
        renderMistakesView();
      });
    }

    // 手動移出錯題本
    document.getElementById("removeThisMistakeBtn").addEventListener("click", () => {
      state.wrongQuestionIds.delete(currentQ.id);
      saveToLocalStorage();
      filterMistakesQuestions();
      renderStats();
      renderMistakesView();
    });

    // 清空錯題本
    document.getElementById("clearAllMistakesBtn").addEventListener("click", () => {
      if (confirm("確定要清空所有錯題記錄嗎？")) {
        state.wrongQuestionIds.clear();
        saveToLocalStorage();
        filterMistakesQuestions();
        renderStats();
        renderMistakesView();
      }
    });

    // 上一題 / 下一題
    document.getElementById("prevMistakeBtn").addEventListener("click", () => {
      if (state.mistakesIndex > 0) {
        state.mistakesIndex--;
        renderMistakesView();
      }
    });

    document.getElementById("nextMistakeBtn").addEventListener("click", () => {
      if (state.mistakesIndex < state.mistakesQuestions.length - 1) {
        state.mistakesIndex++;
        renderMistakesView();
      }
    });
  }

  // ==========================================
  // 4. 考點速記卡 (Flashcards Mode)
  // ==========================================
  function renderFlashcardsView() {
    const container = dom.viewContainers.flashcards;
    if (!container) return;

    container.innerHTML = `
      <div class="control-bar fade-in" style="margin-bottom: 1.5rem;">
        <span style="font-weight: 700;">📖 數位科技概論（上）高頻考點速記表</span>
        <span style="font-size: 0.85rem; color: var(--text-muted);">整理自教材與習作精解表格</span>
      </div>

      <div class="flashcards-grid">
        ${FLASHCARDS.map(
          (card) => `
          <div class="concept-card fade-in">
            <div class="concept-header">
              <span class="badge badge-chapter">${card.badge}</span>
            </div>
            <div class="concept-title">${card.title}</div>
            <div class="concept-content">${card.content}</div>
          </div>
        `
        ).join("")}
      </div>
    `;
  }

  // ==========================================
  // 5. 題庫檢索瀏覽 (Browse Mode)
  // ==========================================
  function renderBrowseView() {
    const container = dom.viewContainers.browse;
    if (!container) return;

    const filtered = QUESTION_BANK.filter((q) => {
      if (!state.searchQuery) return true;
      const lower = state.searchQuery.toLowerCase();
      return (
        q.question.toLowerCase().includes(lower) ||
        q.explanation.toLowerCase().includes(lower) ||
        q.options.some((opt) => opt.text.toLowerCase().includes(lower))
      );
    });

    container.innerHTML = `
      <div class="search-box-container fade-in">
        <input type="text" id="browseSearchInput" class="search-input" 
               placeholder="🔍 輸入關鍵字快速檢索題目或知識點（例如：SRAM、Linux、工作管理員、ppm、快閃記憶體...）" 
               value="${state.searchQuery || ""}">
      </div>

      <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
        搜尋結果：共找到 ${filtered.length} 題
      </div>

      <div class="browse-list">
        ${filtered
          .map(
            (q) => `
            <div class="question-list-item fade-in">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="badge badge-chapter">第 ${q.chapter} 章</span>
                <span class="badge badge-source">${q.source} (題號 #${q.id})</span>
              </div>
              <div class="item-title">${q.question}</div>
              <div class="item-options">
                ${q.options.map((opt) => `<div>${opt.key}. ${opt.text}</div>`).join("")}
              </div>
              <div class="item-answer">
                <strong>標準答案：(${q.answer})</strong>
                <div style="margin-top: 0.35rem; font-size: 0.85rem; color: var(--text-main);">${q.explanation}</div>
              </div>
            </div>
          `
          )
          .join("")}
      </div>
    `;

    const searchInput = document.getElementById("browseSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value.trim();
        renderBrowseView();
      });
      // 保持游標位置
      searchInput.focus();
      searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
    }
  }

  // 啟動應用
  init();
})();
