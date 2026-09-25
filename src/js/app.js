// Excel Mastery Hub - Core Application Logic
// Enhanced with Teacher-Led Curriculum (30 modules), Shortcuts Encyclopedia, Problem Solver & Interactive Grid

(function () {
  'use strict';

  // --- Local Storage Keys ---
  const STORAGE_KEYS = {
    COMPLETED: 'excel_mastery_completed_modules',
    XP: 'excel_mastery_user_xp',
    STREAK: 'excel_mastery_streak_data',
    BOOKMARKS: 'excel_mastery_bookmarked_solutions',
    LAST_MODULE: 'excel_mastery_last_active_module',
    HINGLISH_PREF: 'excel_mastery_hinglish_pref',
    THEME: 'excel_mastery_theme'
  };

  // --- App State ---
  const state = {
    completedModules: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETED) || '[]')),
    xp: parseInt(localStorage.getItem(STORAGE_KEYS.XP) || '0', 10),
    streak: JSON.parse(localStorage.getItem(STORAGE_KEYS.STREAK) || '{"count": 1, "lastDate": ""}'),
    bookmarks: new Set(JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || '[]')),
    activeTab: 'learn', // 'learn' | 'career' | 'solver' | 'shortcuts' | 'formulas' | 'videos' | 'practice' | 'dashboard'
    theme: localStorage.getItem('excel_mastery_theme') || 'light', // 'light' | 'dark'
    currentLevelId: 'level-1',
    currentModuleId: localStorage.getItem(STORAGE_KEYS.LAST_MODULE) || 'l1-m1',
    hinglishMode: localStorage.getItem(STORAGE_KEYS.HINGLISH_PREF) !== 'false', // default true
    solverSearchQuery: '',
    solverSelectedCategory: 'All',
    shortcutsSearchQuery: '',
    shortcutsSelectedClass: 'All',
    formulasSearchQuery: '',
    formulasSelectedCategory: 'All',
    videosSearchQuery: '',
    videosSelectedCategory: 'All',
    // Editorial Hero Slider State
    heroActiveSlide: 0,
    // Career & Job Launchpad State
    careerActiveSubTab: 'roadmap', // 'roadmap' | 'tests' | 'portfolio' | 'companies' | 'emails'
    careerChecklist: new Set(JSON.parse(localStorage.getItem('excel_career_checklist') || '[]')),
    careerTestsFilter: 'All',
    coldEmailCustomFields: {
      candidateName: localStorage.getItem('excel_candidate_name') || 'Rahul Sharma',
      companyName: localStorage.getItem('excel_target_company') || 'Deloitte',
      managerName: localStorage.getItem('excel_manager_name') || 'Hiring Manager',
      portfolioLink: localStorage.getItem('excel_portfolio_link') || 'https://drive.google.com/your-excel-portfolio',
      phone: localStorage.getItem('excel_phone') || '+91 98765 43210'
    },
    // File Inspector & AI Chatbot state
    uploadedFileData: null,
    fileAuditReport: null,
    chatMessages: [],
    chatFilterErrorsOnly: false,
    // Practice Sandbox state
    sandboxGrid: {
      headers: ['A', 'B', 'C', 'D', 'E'],
      rows: [
        ['Product', 'Category', 'Price', 'Qty', 'Total'],
        ['Laptop', 'Tech', '1200', '3', '=C2*D2'],
        ['Mouse', 'Tech', '25', '10', '=C3*D3'],
        ['Desk', 'Furniture', '350', '2', '=C4*D4'],
        ['Total Revenue', '', '', '', '=SUM(E2:E4)']
      ]
    },
    activeSandboxCell: { r: 1, c: 4 },
    // Active lesson simulator grid
    lessonGrid: null,
    activeLessonCell: { r: 0, c: 0 }
  };

  // --- Initialize App ---
  document.addEventListener('DOMContentLoaded', () => {
    updateStreak();
    applyTheme(state.theme);
    initUI();
    renderCurrentTab();
    renderUserStats();
  });

  // --- Streak Calculation ---
  function updateStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = state.streak.lastDate;

    if (!lastDate) {
      state.streak = { count: 1, lastDate: today };
    } else if (lastDate === today) {
      // already recorded today
    } else {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().slice(0, 10);

      if (lastDate === yesterdayStr) {
        state.streak.count += 1;
        state.streak.lastDate = today;
      } else {
        state.streak.count = 1;
        state.streak.lastDate = today;
      }
    }
    localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(state.streak));
  }

  // --- Progress / XP Helpers ---
  function addXP(points) {
    state.xp += points;
    localStorage.setItem(STORAGE_KEYS.XP, state.xp.toString());
    renderUserStats();
    showToast(`🎉 +${points} XP Earned! Great job!`, 'success');
  }

  function getRank(xp) {
    if (xp < 150) return { title: 'Excel Newbie', badge: '🌱 Level 1', nextThreshold: 150, progress: (xp / 150) * 100 };
    if (xp < 450) return { title: 'Formula Apprentice', badge: '📘 Level 2', nextThreshold: 450, progress: ((xp - 150) / 300) * 100 };
    if (xp < 900) return { title: 'Office Data Analyst', badge: '📊 Level 3', nextThreshold: 900, progress: ((xp - 450) / 450) * 100 };
    if (xp < 1500) return { title: 'Spreadsheet Wizard', badge: '⚡ Level 4', nextThreshold: 1500, progress: ((xp - 900) / 600) * 100 };
    return { title: 'Excel Grandmaster', badge: '👑 Master', nextThreshold: 2500, progress: 100 };
  }

  function markModuleCompleted(moduleId, xpReward) {
    if (!state.completedModules.has(moduleId)) {
      state.completedModules.add(moduleId);
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(Array.from(state.completedModules)));
      addXP(xpReward || 50);
      triggerCelebration();
    }
  }

  // --- UI Initialization ---
  function initUI() {
    // Navigation Tabs (Sidebar & Mobile Quick Bar)
    const navButtons = document.querySelectorAll('[data-tab-target]');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeTab = btn.getAttribute('data-tab-target');
        updateNavActiveState();
        renderCurrentTab();
        scrollToViewportTop(false);
        window.appCloseMobileSidebar();
      });
    });

    // Hinglish Toggle (Desktop Sidebar)
    const hinglishBtn = document.getElementById('toggle-hinglish-btn');
    if (hinglishBtn) {
      hinglishBtn.addEventListener('click', () => {
        state.hinglishMode = !state.hinglishMode;
        localStorage.setItem(STORAGE_KEYS.HINGLISH_PREF, state.hinglishMode.toString());
        updateHinglishButtonUI();
        renderCurrentTab();
        showToast(state.hinglishMode ? 'Teacher Hinglish Tips: ON 💡' : 'Teacher Hinglish Tips: OFF', 'info');
      });
      updateHinglishButtonUI();
    }
    updateThemeButtonsUI();
  }

  function updateHinglishButtonUI() {
    const btn = document.getElementById('toggle-hinglish-btn');
    const mobileBtn = document.getElementById('mobile-hinglish-btn');
    if (btn) {
      if (state.hinglishMode) {
        btn.className = 'w-full text-xs font-bold px-3 py-2.5 rounded-lg border transition-all flex items-center justify-center gap-2 bg-[#2D3C31] text-sage-200 border-sage-600 shadow-xs hover:border-sage-400';
        btn.innerHTML = '<span>💡 Hinglish: <strong class="text-white">ON</strong></span>';
      } else {
        btn.className = 'w-full text-xs font-bold px-3 py-2.5 rounded-lg border transition-all flex items-center justify-center gap-2 bg-[#23211E] text-warmgray-300 border-[#383530] hover:border-warmgray-400';
        btn.innerHTML = '<span>💡 Hinglish: <strong>OFF</strong></span>';
      }
    }
    if (mobileBtn) {
      if (state.hinglishMode) {
        mobileBtn.className = 'text-[11px] font-bold px-2 py-1 rounded bg-[#2D3C31] border border-sage-600 text-sage-200';
        mobileBtn.innerHTML = '💡 Hinglish: ON';
      } else {
        mobileBtn.className = 'text-[11px] font-bold px-2 py-1 rounded bg-[#252320] border border-[#383530] text-warmgray-300';
        mobileBtn.innerHTML = '💡 Hinglish: OFF';
      }
    }
  }

  function updateNavActiveState() {
    const navButtons = document.querySelectorAll('[data-tab-target]');
    navButtons.forEach(btn => {
      const target = btn.getAttribute('data-tab-target');
      const isSidebar = btn.classList.contains('nav-sidebar-btn');
      const isMobileTaskbar = btn.closest('#mobile-nav-taskbar');
      
      if (target === state.activeTab) {
        if (isSidebar) {
          btn.classList.add('active-tab', 'text-white');
          btn.classList.remove('text-warmgray-300', 'hover:bg-[#282623]');
        } else if (isMobileTaskbar) {
          btn.classList.add('bg-sage-600', 'text-white', 'border-sage-500/50');
          btn.classList.remove('text-warmgray-300', 'bg-[#201E1B]', 'border-[#33302B]');
          try {
            btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          } catch (e) {}
        } else {
          // Generic mobile button fallback
          btn.classList.add('bg-sage-600', 'text-white');
          btn.classList.remove('text-warmgray-400');
        }
      } else {
        if (isSidebar) {
          btn.classList.remove('active-tab', 'text-white');
          btn.classList.add('text-warmgray-300');
        } else if (isMobileTaskbar) {
          btn.classList.remove('bg-sage-600', 'text-white', 'border-sage-500/50');
          btn.classList.add('text-warmgray-300', 'bg-[#201E1B]', 'border-[#33302B]');
        } else {
          btn.classList.remove('bg-sage-600', 'text-white');
          btn.classList.add('text-warmgray-400');
        }
      }
    });
  }

  // Window Mobile Drawer Helpers
  window.appToggleMobileSidebar = function () {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar && backdrop) {
      const isClosed = sidebar.classList.contains('-translate-x-full');
      if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        backdrop.classList.remove('hidden');
      } else {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }
  };

  window.appCloseMobileSidebar = function () {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) {
      sidebar.classList.remove('translate-x-0');
      sidebar.classList.add('-translate-x-full');
    }
    if (backdrop) backdrop.classList.add('hidden');
  };

  window.appToggleHinglish = function () {
    const btn = document.getElementById('toggle-hinglish-btn');
    if (btn) btn.click();
  };

  // --- Dark & Light Mode Handling ---
  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    const bodyEl = document.body;
    const docEl = document.documentElement;
    
    if (theme === 'dark') {
      bodyEl.classList.add('dark-theme');
      bodyEl.classList.remove('light-theme');
      docEl.classList.add('dark');
    } else {
      bodyEl.classList.remove('dark-theme');
      bodyEl.classList.add('light-theme');
      docEl.classList.remove('dark');
    }
    updateThemeButtonsUI();
  }

  function updateThemeButtonsUI() {
    const headerBtn = document.getElementById('sidebar-header-theme-btn');
    const headerIcon = document.getElementById('sidebar-header-theme-icon');
    const mobileBtn = document.getElementById('mobile-theme-btn');
    const mobileIcon = document.getElementById('mobile-theme-icon');

    const isDark = state.theme === 'dark';
    const iconChar = isDark ? '☀️' : '🌙';
    const nextThemeAction = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';

    if (headerIcon) headerIcon.textContent = iconChar;
    if (headerBtn) {
      headerBtn.title = nextThemeAction;
      headerBtn.setAttribute('aria-label', nextThemeAction);
    }
    if (mobileIcon) mobileIcon.textContent = iconChar;
    if (mobileBtn) {
      mobileBtn.title = nextThemeAction;
      mobileBtn.setAttribute('aria-label', nextThemeAction);
    }
  }

  window.appToggleTheme = function () {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    showToast(state.theme === 'dark' ? '🌙 Dark Mode activated' : '☀️ Light Mode activated', 'info');
  };

  function renderUserStats() {
    // XP, Level, and Streak ONLY appear in the Progress (Dashboard) tab
    const streakEl = document.getElementById('dashboard-streak-counter');
    const xpEl = document.getElementById('dashboard-xp-counter');
    const rankBadgeEl = document.getElementById('dashboard-rank-badge');

    const rankInfo = getRank(state.xp);

    if (streakEl) streakEl.textContent = `${state.streak.count} Day${state.streak.count === 1 ? '' : 's'}`;
    if (xpEl) xpEl.textContent = `${state.xp} XP`;
    if (rankBadgeEl) rankBadgeEl.textContent = `${rankInfo.title} (${rankInfo.badge})`;
  }

  // --- Scroll & Viewport Helpers ---
  function scrollToViewportTop(smooth = false) {
    const vp = document.getElementById('content-scroll-viewport');
    if (vp) {
      if (smooth) {
        vp.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        vp.scrollTop = 0;
      }
    }
  }

  function triggerFadeAnimation(el) {
    const target = el || document.getElementById('main-content-area');
    if (!target) return;
    target.classList.remove('page-fade-in', 'fade-in-action', 'tab-content-fade');
    void target.offsetWidth; // Force synchronous layout reflow
    target.classList.add('page-fade-in');
  }

  // --- Render Current Active Tab ---
  function renderCurrentTab() {
    const container = document.getElementById('main-content-area');
    if (!container) return;

    // Trigger smooth fade-in animation whenever switching tabs or content
    triggerFadeAnimation(container);

    if (state.activeTab === 'learn') {
      renderCurriculumView(container);
    } else if (state.activeTab === 'career') {
      renderCareerView(container);
    } else if (state.activeTab === 'solver') {
      renderProblemSolverView(container);
    } else if (state.activeTab === 'shortcuts') {
      renderShortcutsView(container);
    } else if (state.activeTab === 'formulas') {
      renderFormulasView(container);
    } else if (state.activeTab === 'videos') {
      renderVideosView(container);
    } else if (state.activeTab === 'practice') {
      renderPracticeSandboxView(container);
    } else if (state.activeTab === 'dashboard') {
      renderDashboardView(container);
    }
  }

  // ==========================================
  // 1. TEACHER-LED CURRICULUM & MICRO-LEARNING
  // ==========================================
  function renderCurriculumView(container) {
    const currentLevel = CURRICULUM.find(l => l.id === state.currentLevelId) || CURRICULUM[0];
    let currentMod = null;
    for (const lvl of CURRICULUM) {
      const found = lvl.modules.find(m => m.id === state.currentModuleId);
      if (found) {
        currentMod = found;
        state.currentLevelId = lvl.id;
        break;
      }
    }
    if (!currentMod) {
      currentMod = currentLevel.modules[0];
      state.currentModuleId = currentMod.id;
    }

    state.lessonGrid = JSON.parse(JSON.stringify(currentMod.practice.initialGrid));

    const totalModules = CURRICULUM.reduce((acc, lvl) => acc + lvl.modules.length, 0);
    const completedCount = state.completedModules.size;
    const progressPercent = Math.round((completedCount / totalModules) * 100);

    container.innerHTML = `
      <div class="w-full pb-[3px]">
        
        <!-- Editorial Hero Showcase (Inspired by Reference Photo) -->
        ${renderEditorialHeroHTML()}

        <!-- Top Level Selection Ribbon -->
        <div id="curriculum-level-ribbon" class="mb-6 bg-white rounded-xl shadow-xs border border-[#DBD5C9] p-4">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3">
            <div>
              <h2 class="text-xl font-bold text-warmgray-900 flex items-center gap-2">
                <span>Excel 0 to Master Pathway (30 Lessons)</span>
                <span class="text-xs bg-sage-100 text-sage-900 font-semibold px-2.5 py-0.5 rounded-full border border-sage-200">${completedCount}/${totalModules} Finished</span>
              </h2>
              <p class="text-xs sm:text-sm text-warmgray-500">Teacher-led micro-lessons inspired by Accounts Experts with interactive practice</p>
            </div>
            <div class="w-full sm:w-64">
              <div class="flex justify-between text-xs text-warmgray-600 mb-1 font-medium">
                <span>Mastery Progress</span>
                <span class="font-bold text-sage-700">${progressPercent}%</span>
              </div>
              <div class="w-full bg-[#EAE5DC] rounded-full h-2.5 overflow-hidden">
                <div class="bg-sage-600 h-2.5 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
              </div>
            </div>
          </div>

          <!-- 4 Level Cards -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2 border-t border-[#EAE5DC]">
            ${CURRICULUM.map(lvl => {
              const isSelected = lvl.id === state.currentLevelId;
              const lvlCompleted = lvl.modules.filter(m => state.completedModules.has(m.id)).length;
              return `
                <button 
                  onclick="window.appSwitchLevel('${lvl.id}')"
                  class="text-left p-3 rounded-lg border transition-all ${
                    isSelected 
                      ? 'border-sage-600 bg-sage-50/80 shadow-xs ring-1 ring-sage-500' 
                      : 'border-[#EAE5DC] bg-white hover:border-[#DBD5C9] hover:bg-[#FAF8F5]'
                  }"
                >
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-xs font-bold ${isSelected ? 'text-sage-800' : 'text-warmgray-500'}">LEVEL ${lvl.levelNumber}</span>
                    <span class="text-xs font-semibold px-1.5 py-0.5 rounded ${lvlCompleted === lvl.modules.length ? 'bg-sage-200 text-sage-900' : 'bg-[#EAE5DC] text-warmgray-700'}">
                      ${lvlCompleted}/${lvl.modules.length}
                    </span>
                  </div>
                  <div class="text-sm font-semibold text-warmgray-900 truncate">${lvl.title.split(':')[1] || lvl.title}</div>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Main 2-Column Learning Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Left Column: Modules List -->
          <div class="lg:col-span-4 bg-white rounded-xl shadow-xs border border-[#DBD5C9] p-4 max-h-[800px] overflow-y-auto">
            <h3 class="font-bold mb-3 text-xs uppercase tracking-wider text-warmgray-500 flex items-center justify-between">
              <span>Level ${currentLevel.levelNumber} Lessons (${currentLevel.modules.length})</span>
              <span class="text-xs text-sage-800 bg-sage-100 border border-sage-200 px-2 py-0.5 rounded font-mono">${currentLevel.badge}</span>
            </h3>
            <div class="space-y-1.5 pb-[3px]">
              ${currentLevel.modules.map(mod => {
                const isSelected = mod.id === currentMod.id;
                const isDone = state.completedModules.has(mod.id);
                return `
                  <button 
                    onclick="window.appSelectModule('${mod.id}')"
                    class="w-full text-left p-2.5 rounded-lg border flex items-center justify-between transition-all ${
                      isSelected 
                        ? 'border-sage-600 bg-sage-50/80 shadow-xs font-medium text-warmgray-900' 
                        : 'border-[#EAE5DC] hover:bg-[#FAF8F5] text-warmgray-700'
                    }"
                  >
                    <div class="flex items-center gap-2 overflow-hidden">
                      <div class="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 ${
                        isDone 
                          ? 'bg-emerald-600 text-white' 
                          : isSelected 
                            ? 'border-2 border-emerald-600 text-emerald-700' 
                            : 'border-2 border-gray-300 text-gray-400'
                      }">
                        ${isDone ? '✓' : '•'}
                      </div>
                      <div class="truncate text-xs sm:text-sm">
                        <div class="truncate font-semibold text-gray-900">${mod.title}</div>
                        <div class="text-[11px] text-gray-500 flex items-center gap-2">
                          <span>⏱️ ${mod.duration}</span>
                          <span>🏆 +${mod.xp} XP</span>
                        </div>
                      </div>
                    </div>
                    ${isDone ? '<span class="text-[10px] text-emerald-700 font-bold bg-emerald-100/60 px-1.5 py-0.5 rounded shrink-0">Done</span>' : ''}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Right Content: Teacher Lesson & Practice Simulator -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- Lesson Explanation Card -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-100">
                <div>
                  <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md">
                    Level ${currentLevel.levelNumber} • Module
                  </span>
                  <h1 class="text-2xl font-extrabold text-gray-900 mt-2">${currentMod.title}</h1>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-sm bg-amber-50 border border-amber-200 text-amber-800 font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    ⭐ +${currentMod.xp} XP Reward
                  </span>
                  ${state.completedModules.has(currentMod.id) 
                    ? '<span class="text-sm bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">✓ Completed</span>' 
                    : ''
                  }
                </div>
              </div>

              <!-- Teacher's Personal Explanation Banner ("Teacher Ki Zubani 👨‍🏫") -->
              ${currentMod.teacherIntro ? `
                <div class="my-4 p-4 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-100/60 border-l-4 border-emerald-600 rounded-r-xl shadow-sm">
                  <div class="flex items-start gap-3">
                    <div class="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center text-lg font-bold shrink-0 shadow">
                      👨‍🏫
                    </div>
                    <div>
                      <div class="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                        <span>Teacher Ki Zubani (Simple Explanation)</span>
                        <span class="bg-emerald-200 text-emerald-900 text-[10px] px-1.5 py-0.5 rounded font-semibold">Accounts Expert Style</span>
                      </div>
                      <p class="text-sm text-emerald-950 font-medium leading-relaxed mt-1">
                        "${currentMod.teacherIntro}"
                      </p>
                    </div>
                  </div>
                </div>
              ` : ''}

              <!-- Hinglish Quick Summary Callout -->
              ${state.hinglishMode && currentMod.hinglishSummary ? `
                <div class="my-3 p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
                  <span class="text-base shrink-0">💡</span>
                  <div>
                    <span class="font-bold">Key Takeaway: </span>
                    <span>${currentMod.hinglishSummary}</span>
                  </div>
                </div>
              ` : ''}

              <!-- Overview Text -->
              <p class="text-gray-700 text-sm sm:text-base leading-relaxed my-4">${currentMod.overview}</p>

              <!-- Sections Content -->
              <div class="space-y-4 text-gray-800 text-sm leading-relaxed">
                ${currentMod.sections.map(sec => `
                  <div class="bg-gray-50/80 p-4 rounded-lg border border-gray-200/80">
                    <h4 class="font-bold text-gray-900 text-sm sm:text-base mb-2 text-emerald-900 flex items-center gap-2">
                      <span class="w-1.5 h-4 bg-emerald-600 rounded-full inline-block"></span>
                      ${sec.heading}
                    </h4>
                    <div class="prose prose-sm max-w-none text-gray-700 markdown-rendered">
                      ${formatMarkdown(sec.content)}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Interactive Practice Challenge Card -->
            <div class="bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-md border-2 border-emerald-500/40 p-6 relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                PRACTICE QUESTION
              </div>

              <div class="mb-4">
                <h3 class="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <span>🎯 Hands-On Challenge</span>
                </h3>
                <p class="text-sm text-gray-700 mt-1 font-medium">${currentMod.practice.instruction}</p>
              </div>

              <!-- Interactive Mini Spreadsheet Simulator -->
              <div class="mb-5">
                <div class="text-xs text-gray-500 mb-1.5 flex justify-between items-center">
                  <span>Interactive Live Sheet:</span>
                  <span class="text-[11px] text-emerald-700 font-medium">Click any cell to inspect</span>
                </div>
                ${renderMiniSpreadsheetHTML(currentMod.practice.initialGrid)}
              </div>

              <!-- Question & Answer Input Box -->
              <div class="bg-white p-4 rounded-lg border border-gray-300 shadow-inner">
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  ${currentMod.practice.question}
                </label>
                <div class="flex flex-col sm:flex-row gap-2">
                  <div class="relative flex-1">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 font-mono text-sm">fx</span>
                    <input 
                      id="practice-user-answer"
                      type="text" 
                      placeholder="e.g. =SUM(B2:B5) or your answer" 
                      class="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      onkeydown="if(event.key==='Enter') window.appCheckAnswer()"
                    />
                  </div>
                  <button 
                    onclick="window.appCheckAnswer()"
                    class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-lg text-sm shadow transition-all flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>Submit Answer</span>
                    <span>➔</span>
                  </button>
                </div>

                <!-- Answer Result / Feedback Area -->
                <div id="practice-feedback-area" class="mt-3 hidden"></div>

                <!-- Hint Accordion -->
                <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <button 
                    onclick="window.appToggleHint()"
                    class="text-amber-800 hover:text-amber-900 font-medium flex items-center gap-1 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-md border border-amber-200 transition-colors"
                  >
                    <span>💡 Need a hint?</span>
                  </button>
                  <span class="text-gray-400">Press [Enter] to submit</span>
                </div>
                <div id="practice-hint-content" class="hidden mt-2 p-3 bg-amber-50/70 border border-amber-200/60 rounded-md text-xs text-amber-900">
                  <strong>Hint:</strong> ${currentMod.practice.hint}
                </div>
              </div>

              <!-- Next Lesson Button (Appears when completed) -->
              <div id="next-lesson-container" class="mt-4 text-right ${state.completedModules.has(currentMod.id) ? '' : 'hidden'}">
                <button 
                  onclick="window.appNextLesson()"
                  class="bg-gray-900 hover:bg-black text-white font-bold px-6 py-2.5 rounded-lg text-sm shadow transition-all inline-flex items-center gap-2"
                >
                  <span>Next Lesson</span>
                  <span>➔</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    `;
  }

  // Mini spreadsheet renderer
  function renderMiniSpreadsheetHTML(grid) {
    if (!grid) return '';
    const headers = grid.headers || ['A', 'B', 'C', 'D'];
    const rows = grid.rows || [];

    return `
      <div class="excel-grid-container">
        <table class="excel-table">
          <thead>
            <tr>
              <th class="row-header">#</th>
              ${headers.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${rows.map(r => `
              <tr>
                <td class="row-header font-mono font-medium">${r.rowNum}</td>
                ${r.cells.map((cellVal, cIdx) => `
                  <td 
                    tabindex="0"
                    onclick="window.appSelectLessonCell(this, '${cellVal}')"
                    class="hover:bg-emerald-50 cursor-pointer select-all font-mono text-xs ${cellVal.startsWith('=') ? 'text-emerald-700 font-semibold' : ''}"
                    title="Value: ${escapeHtml(cellVal)}"
                  >
                    ${escapeHtml(cellVal)}
                  </td>
                `).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Markdown Formatter
  function formatMarkdown(text) {
    if (!text) return '';
    let html = text.trim();

    // Table parser
    if (html.includes('|')) {
      const lines = html.split('\n');
      let inTable = false;
      let tableHtml = '<div class="overflow-x-auto my-3"><table class="min-w-full text-xs border border-gray-200 bg-white rounded shadow-sm">';
      const processedLines = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('|') && line.endsWith('|')) {
          if (!inTable) {
            inTable = true;
            tableHtml = '<div class="overflow-x-auto my-3"><table class="min-w-full text-xs border border-gray-200 bg-white rounded shadow-sm">';
          }
          if (line.includes('---')) continue;
          const cells = line.split('|').slice(1, -1).map(c => c.trim());
          if (i === 0 || (i > 0 && lines[i-1].includes('---'))) {
            tableHtml += '<tr class="bg-gray-100 font-bold border-b">' + cells.map(c => `<th class="p-2 border">${c}</th>`).join('') + '</tr>';
          } else {
            tableHtml += '<tr class="border-b hover:bg-gray-50">' + cells.map(c => `<td class="p-2 border">${c}</td>`).join('') + '</tr>';
          }
        } else {
          if (inTable) {
            inTable = false;
            tableHtml += '</table></div>';
            processedLines.push(tableHtml);
          }
          processedLines.push(line);
        }
      }
      if (inTable) {
        tableHtml += '</table></div>';
        processedLines.push(tableHtml);
      }
      html = processedLines.join('\n');
    }

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/`(.*?)`/g, '<code class="bg-gray-200 text-emerald-800 px-1.5 py-0.5 rounded text-xs font-mono font-semibold">$1</code>');
    html = html.replace(/^- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>');
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-4 list-decimal">$1</li>');
    html = html.replace(/\n\n/g, '<p class="my-2"></p>');

    return html;
  }

  // Answer checking logic
  window.appCheckAnswer = function () {
    const inputEl = document.getElementById('practice-user-answer');
    const feedbackEl = document.getElementById('practice-feedback-area');
    const nextBtnContainer = document.getElementById('next-lesson-container');
    if (!inputEl || !feedbackEl) return;

    const userAns = inputEl.value.trim();
    if (!userAns) {
      feedbackEl.className = 'mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800 flex items-center gap-2';
      feedbackEl.innerHTML = '<span>⚠️ Please enter an answer or formula before submitting.</span>';
      feedbackEl.classList.remove('hidden');
      return;
    }

    let currentMod = null;
    for (const lvl of CURRICULUM) {
      const found = lvl.modules.find(m => m.id === state.currentModuleId);
      if (found) { currentMod = found; break; }
    }
    if (!currentMod) return;

    const expected = currentMod.practice.expectedAnswer;
    const isCorrect = Array.isArray(expected) 
      ? expected.some(ans => normalizeFormula(ans) === normalizeFormula(userAns))
      : normalizeFormula(expected) === normalizeFormula(userAns);

    if (isCorrect) {
      feedbackEl.className = 'mt-3 p-4 bg-emerald-50 border border-emerald-300 rounded-lg text-sm text-emerald-900 animate-bounce-in';
      feedbackEl.innerHTML = `
        <div class="flex items-start gap-2.5">
          <span class="text-xl">🎉</span>
          <div>
            <div class="font-bold text-base text-emerald-800">Correct! Shabash!</div>
            <p class="text-emerald-700 text-xs mt-0.5">${currentMod.practice.solutionExplanation}</p>
          </div>
        </div>
      `;
      feedbackEl.classList.remove('hidden');
      if (nextBtnContainer) nextBtnContainer.classList.remove('hidden');

      markModuleCompleted(currentMod.id, currentMod.xp);
    } else {
      feedbackEl.className = 'mt-3 p-3.5 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800';
      feedbackEl.innerHTML = `
        <div class="flex items-start gap-2">
          <span class="text-base shrink-0">❌</span>
          <div>
            <div class="font-bold">Galat javab. Dobara koshish karein!</div>
            <div class="text-xs text-red-700 mt-0.5">Check for spelling, equals sign (=), or range syntax. Click 'Need a hint?' below if you get stuck.</div>
          </div>
        </div>
      `;
      feedbackEl.classList.remove('hidden');
    }
  };

  function normalizeFormula(str) {
    if (!str) return '';
    return str.toString().toUpperCase().replace(/\s+/g, '').trim();
  }

  window.appToggleHint = function () {
    const hintEl = document.getElementById('practice-hint-content');
    if (hintEl) hintEl.classList.toggle('hidden');
  };

  window.appSelectLessonCell = function (cellEl, val) {
    const inputEl = document.getElementById('practice-user-answer');
    if (inputEl && !inputEl.value) inputEl.value = val;
    showToast(`Selected cell content: ${val}`, 'info');
  };

  window.appSwitchLevel = function (lvlId) {
    state.currentLevelId = lvlId;
    const lvl = CURRICULUM.find(l => l.id === lvlId);
    if (lvl && lvl.modules.length > 0) {
      state.currentModuleId = lvl.modules[0].id;
      localStorage.setItem(STORAGE_KEYS.LAST_MODULE, state.currentModuleId);
    }
    renderCurrentTab();
  };

  window.appSelectModule = function (modId) {
    state.currentModuleId = modId;
    localStorage.setItem(STORAGE_KEYS.LAST_MODULE, modId);
    renderCurrentTab();
  };

  window.appNextLesson = function () {
    let allModules = [];
    CURRICULUM.forEach(l => { allModules = allModules.concat(l.modules); });
    const currIdx = allModules.findIndex(m => m.id === state.currentModuleId);
    if (currIdx !== -1 && currIdx < allModules.length - 1) {
      const nextMod = allModules[currIdx + 1];
      state.currentModuleId = nextMod.id;
      localStorage.setItem(STORAGE_KEYS.LAST_MODULE, nextMod.id);
      renderCurrentTab();
      scrollToViewportTop(true);
    } else {
      showToast('🏆 Incredible! You have finished all 30 lessons across all 4 levels!', 'success');
    }
  };


  // ==========================================
  // EDITORIAL HERO SHOWCASE (INSPIRED BY REFERENCE PHOTO)
  // ==========================================

  function renderEditorialHeroHTML() {
    const slides = [
      {
        tag: "Stage 01 • The Genesis",
        scriptTitle: "Zero to One",
        title: "FOUNDATION",
        desc: "Master keyboard speed, row-column architecture, and error-free cell formatting. Eliminate mouse dependency from day one.",
        image: "src/img/analyst_concept.jpg",
        actionText: "EXPLORE 60-DAY CAREER ROADMAP",
        actionFn: "window.appGoToCareerTab('roadmap')"
      },
      {
        tag: "Stage 02 • Business Intelligence",
        scriptTitle: "The Analytical Mind",
        title: "ANALYTICS",
        desc: "Deploy bulletproof XLOOKUPs, multi-criteria SUMIFS, and dynamic decision logic tested by top corporate accounting firms.",
        image: "src/img/ai_mastery_concept.jpg",
        actionText: "SEE INTERVIEW HIRING TESTS",
        actionFn: "window.appGoToCareerTab('tests')"
      },
      {
        tag: "Stage 03 • Enterprise Modeling",
        scriptTitle: "Process Automation",
        title: "AUTOMATION",
        desc: "Connect interactive Pivot Table slicers, executive KPI summary cards, and automated payroll models without manual copy-paste.",
        image: "src/img/automation_concept.jpg",
        actionText: "VIEW PORTFOLIO BLUEPRINTS",
        actionFn: "window.appGoToCareerTab('portfolio')"
      },
      {
        tag: "Stage 04 • Executive Placement",
        scriptTitle: "Corporate Ready",
        title: "CAREER & JOBS",
        desc: "The 60-Day roadmap, 5 hiring sectors, 4 live portfolio projects, and battle-tested cold emails that secure screening interviews.",
        image: "src/img/career_concept.jpg",
        actionText: "OPEN CAREER & JOB LAUNCHPAD",
        actionFn: "window.appGoToCareerTab('roadmap')"
      }
    ];

    const currentSlide = slides[state.heroActiveSlide % slides.length];

    return `
      <div class="relative bg-white border border-[#DBD5C9] rounded-2xl shadow-xs mb-8 overflow-hidden">
        
        <!-- Navigation Controls: Minimal Arrows -->
        <button 
          onclick="window.appPrevHeroSlide()"
          class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-[#DBD5C9] flex items-center justify-center text-warmgray-700 hover:bg-[#22201D] hover:text-white transition-all shadow-xs"
          title="Previous Showcase Slide"
        >
          ‹
        </button>
        <button 
          onclick="window.appNextHeroSlide()"
          class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-[#DBD5C9] flex items-center justify-center text-warmgray-700 hover:bg-[#22201D] hover:text-white transition-all shadow-xs"
          title="Next Showcase Slide"
        >
          ›
        </button>

        <div class="grid grid-cols-1 md:grid-cols-12 items-center min-h-[440px]">
          
          <!-- Left Column: Double-Exposure Concept Art -->
          <div class="md:col-span-6 flex items-center justify-center p-6 md:p-10 relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-white">
            <div class="relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-xl overflow-hidden shadow-xl border border-[#EAE5DC] group">
              <img 
                src="${currentSlide.image}" 
                alt="${currentSlide.title}" 
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 text-white text-[11px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded">
                ${currentSlide.tag}
              </div>
            </div>
          </div>

          <!-- Right Column: Editorial Minimalist Typography & Actions -->
          <div class="md:col-span-6 p-8 md:p-12 text-center md:text-left flex flex-col items-center md:items-start justify-center">
            
            <div class="font-editorial-serif italic text-slate-500 text-lg sm:text-xl tracking-wider mb-1">
              ${currentSlide.scriptTitle}
            </div>

            <h1 class="editorial-headline text-3xl sm:text-4xl lg:text-5xl font-black text-warmgray-900 tracking-[0.25em] mb-2">
              ${currentSlide.title}
            </h1>

            <!-- Delicate Line Divider with Center Diamond -->
            <div class="editorial-divider md:mx-0 my-3">
              <span class="editorial-diamond">✦</span>
            </div>

            <p class="text-xs sm:text-sm text-warmgray-600 leading-relaxed max-w-md mb-6 font-normal">
              ${currentSlide.desc}
            </p>

            <div class="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              <button 
                onclick="${currentSlide.actionFn}"
                class="editorial-btn editorial-btn-primary"
              >
                <span>${currentSlide.actionText}</span>
                <span>➔</span>
              </button>
              <button 
                onclick="document.getElementById('curriculum-level-ribbon').scrollIntoView({ behavior: 'smooth' })"
                class="editorial-btn"
              >
                <span>30 LESSONS ↓</span>
              </button>
            </div>

            <!-- Pagination Dots Indicators -->
            <div class="flex items-center gap-2 mt-8">
              ${slides.map((_, sIdx) => `
                <button 
                  onclick="window.appSetHeroSlide(${sIdx})"
                  class="h-1.5 transition-all rounded-full ${sIdx === (state.heroActiveSlide % slides.length) ? 'w-6 bg-sage-600' : 'w-2 bg-[#DBD5C9] hover:bg-warmgray-400'}"
                  title="Slide ${sIdx + 1}"
                ></button>
              `).join('')}
            </div>

          </div>

        </div>

      </div>
    `;
  }

  window.appNextHeroSlide = function () {
    state.heroActiveSlide++;
    renderCurrentTab();
  };

  window.appPrevHeroSlide = function () {
    state.heroActiveSlide = (state.heroActiveSlide - 1 + 4) % 4;
    renderCurrentTab();
  };

  window.appSetHeroSlide = function (idx) {
    state.heroActiveSlide = idx;
    renderCurrentTab();
  };

  window.appGoToCareerTab = function (subTab) {
    state.activeTab = 'career';
    if (subTab) state.careerActiveSubTab = subTab;
    updateNavActiveState();
    renderCurrentTab();
    scrollToViewportTop(true);
  };

  // ==========================================
  // CAREER & JOB LAUNCHPAD MODULE
  // ==========================================

  function renderCareerView(container) {
    const subTabs = [
      { id: 'roadmap', label: '🗺️ 60-Day Roadmap' },
      { id: 'tests', label: '🎯 What Companies ALWAYS Ask' },
      { id: 'portfolio', label: '📁 Portfolio Blueprints & Presentation' },
      { id: 'companies', label: '🏢 Company Research Panel' },
      { id: 'emails', label: '✉️ Cold Email & LinkedIn Kit' }
    ];

    container.innerHTML = `
      <div class="w-full pb-[3px]">
        
        <!-- Editorial Header for Career Hub -->
        <div class="bg-white border border-[#DBD5C9] rounded-2xl p-6 sm:p-10 mb-8 text-center relative overflow-hidden shadow-xs">
          <div class="max-w-3xl mx-auto">
            <div class="font-mono text-[11px] tracking-[0.25em] uppercase text-warmgray-500 font-bold mb-2">
              [ X ] CAREER ACCELERATOR & PLACEMENT ENGINE
            </div>
            <div class="font-editorial-serif italic text-warmgray-500 text-lg sm:text-xl tracking-wider mb-2">
              The 60-Day Blueprint from Zero to High-Income Industry Employment
            </div>
            <h1 class="editorial-headline text-2xl sm:text-4xl lg:text-5xl font-black text-warmgray-900 tracking-[0.25em] mb-2">
              ZERO TO HIRED
            </h1>
            
            <div class="editorial-divider my-4">
              <span class="editorial-diamond">✦</span>
            </div>

            <p class="text-xs sm:text-sm text-warmgray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Companies don't hire people who just know how to type numbers. They hire problem-solvers who can clean corrupted data, engineer lookups without errors, build executive dashboards, and present insights with director-level professionalism.
            </p>

            <!-- Sub-Navigation Pills -->
            <div class="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#FAF8F5] rounded-xl max-w-4xl mx-auto border border-[#EAE5DC]">
              ${subTabs.map(st => {
                const isActive = state.careerActiveSubTab === st.id;
                return `
                  <button 
                    onclick="window.appSetCareerSubTab('${st.id}')"
                    class="text-xs font-bold px-3 sm:px-4 py-2 rounded-lg transition-all ${
                      isActive 
                        ? 'bg-sage-600 text-white shadow-xs' 
                        : 'text-warmgray-600 hover:text-warmgray-900 hover:bg-white'
                    }"
                  >
                    ${st.label}
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Dynamic Sub-Tab Content -->
        <div id="career-subtab-container">
          ${renderCareerSubTabContent()}
        </div>

      </div>
    `;
  }

  function renderCareerSubTabContent() {
    switch (state.careerActiveSubTab) {
      case 'roadmap':
        return renderRoadmapSubTab();
      case 'tests':
        return renderHiringTestsSubTab();
      case 'portfolio':
        return renderPortfolioSubTab();
      case 'companies':
        return renderCompanyResearchSubTab();
      case 'emails':
        return renderColdEmailsSubTab();
      default:
        return renderRoadmapSubTab();
    }
  }

  // --- Sub-Tab 1: 60-Day Roadmap ---
  function renderRoadmapSubTab() {
    const roadmap = typeof CAREER_ROADMAP !== 'undefined' ? CAREER_ROADMAP : [];
    
    // Calculate Checklist Progress
    let totalTasks = 0;
    roadmap.forEach(phase => {
      phase.weeklyBreakdown.forEach(wb => {
        totalTasks += wb.tasks.length;
      });
    });
    const checkedCount = state.careerChecklist.size;
    const readinessScore = totalTasks > 0 ? Math.round((checkedCount / totalTasks) * 100) : 0;

    return `
      <div>
        <!-- Readiness Progress Banner -->
        <div class="bg-white rounded-xl border border-slate-200 p-5 mb-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Your 60-Day Career Readiness Checklist</div>
            <div class="text-lg font-black text-slate-900">
              ${checkedCount} of ${totalTasks} Milestones Checked (${readinessScore}% Job-Ready)
            </div>
          </div>
          <div class="w-full md:w-72">
            <div class="w-full bg-slate-100 rounded-full h-3 overflow-hidden border border-slate-200">
              <div class="bg-slate-900 h-3 rounded-full transition-all duration-500" style="width: ${readinessScore}%"></div>
            </div>
          </div>
        </div>

        <!-- 4 Phase Cards Timeline -->
        <div class="space-y-8">
          ${roadmap.map(phase => `
            <div class="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-slate-300 transition-all">
              
              <!-- Phase Header Ribbon -->
              <div class="p-6 bg-slate-50/80 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-[10px] font-mono font-bold tracking-widest uppercase bg-slate-900 text-white px-2 py-0.5 rounded">
                      ${phase.badge}
                    </span>
                    <span class="text-xs font-bold text-slate-500">• ⏱️ ${phase.duration}</span>
                  </div>
                  <h3 class="text-xl font-extrabold text-slate-900">${escapeHtml(phase.title)}</h3>
                  <p class="font-editorial-serif italic text-slate-600 text-sm mt-0.5">${escapeHtml(phase.tagline)}</p>
                </div>
                <div class="text-xs text-slate-500 max-w-xs text-left sm:text-right">
                  <strong>Outcome Goal:</strong> ${escapeHtml(phase.goal)}
                </div>
              </div>

              <!-- Phase Weekly Tasks -->
              <div class="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                ${phase.weeklyBreakdown.map((wb, wIdx) => `
                  <div class="bg-slate-50/50 rounded-xl p-4 border border-slate-200/70">
                    <h4 class="font-bold text-slate-900 text-sm mb-3 flex items-center justify-between">
                      <span>${escapeHtml(wb.week)}: ${escapeHtml(wb.focus)}</span>
                    </h4>

                    <!-- Tasks Checklist -->
                    <ul class="space-y-2 mb-4">
                      ${wb.tasks.map((task, tIdx) => {
                        const taskKey = `p${phase.phase}-w${wIdx}-t${tIdx}`;
                        const isDone = state.careerChecklist.has(taskKey);
                        return `
                          <li class="flex items-start gap-2 text-xs">
                            <input 
                              type="checkbox" 
                              id="${taskKey}" 
                              ${isDone ? 'checked' : ''} 
                              onchange="window.appToggleRoadmapCheck('${taskKey}')"
                              class="mt-0.5 rounded text-slate-900 focus:ring-0 cursor-pointer"
                            />
                            <label for="${taskKey}" class="cursor-pointer ${isDone ? 'line-through text-slate-400' : 'text-slate-700'}">
                              ${escapeHtml(task)}
                            </label>
                          </li>
                        `;
                      }).join('')}
                    </ul>

                    <!-- Milestone Criteria -->
                    <div class="p-2.5 bg-emerald-50 border border-emerald-200/80 rounded-lg text-xs text-emerald-950">
                      <strong>🎯 Milestone Test: </strong>${escapeHtml(wb.milestone)}
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Pro Tip Box -->
              <div class="px-6 pb-6">
                <div class="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-950 flex items-start gap-2.5">
                  <span class="text-base shrink-0">💡</span>
                  <div>
                    <strong class="text-amber-900 block mb-0.5">Recruiter Insider Advice:</strong>
                    <p class="leading-relaxed">${escapeHtml(phase.proTip)}</p>
                  </div>
                </div>
              </div>

            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --- Sub-Tab 2: What Companies ALWAYS Ask ---
  function renderHiringTestsSubTab() {
    const tests = typeof WHAT_COMPANIES_ALWAYS_WANT !== 'undefined' ? WHAT_COMPANIES_ALWAYS_WANT : [];
    const categories = ['All', 'Lookups', 'Aggregations', 'Reporting', 'Data Hygiene', 'Presentation', 'Core Mechanics', 'Logical Logic', 'Data Integrity'];

    const filtered = state.careerTestsFilter === 'All' 
      ? tests 
      : tests.filter(t => t.category === state.careerTestsFilter);

    return `
      <div>
        <!-- Filter Chips -->
        <div class="flex flex-wrap items-center gap-2 mb-6">
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Filter by Skill:</span>
          ${categories.map(cat => `
            <button 
              onclick="window.appSetCareerTestsFilter('${cat}')"
              class="text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                state.careerTestsFilter === cat 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs' 
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }"
            >
              ${cat}
            </button>
          `).join('')}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${filtered.map((t, idx) => `
            <div class="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div class="flex items-start justify-between gap-2 mb-2">
                  <span class="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200 px-2 py-0.5 rounded">
                    ${t.frequency}
                  </span>
                  <span class="text-[10px] font-mono text-slate-400 font-bold uppercase">${t.category}</span>
                </div>

                <h3 class="text-base sm:text-lg font-black text-slate-900 mb-2">
                  ${escapeHtml(t.title)}
                </h3>

                <!-- Business Scenario -->
                <div class="mb-3 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                  <div class="font-bold text-slate-800 mb-1">📋 The Scenario You Are Given:</div>
                  <p class="text-slate-600 leading-relaxed">${escapeHtml(t.scenario)}</p>
                </div>

                <!-- What Recruiters Test -->
                <div class="mb-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200/80 text-xs">
                  <div class="font-bold text-emerald-900 mb-1">🔍 What The Hiring Manager Is Actually Checking:</div>
                  <p class="text-emerald-950 leading-relaxed">${escapeHtml(t.whatRecruitersTest)}</p>
                </div>

                <!-- Winning Formula Box -->
                <div class="bg-slate-900 rounded-xl p-3.5 text-white mb-3">
                  <div class="flex items-center justify-between text-[10px] text-slate-400 font-mono uppercase mb-1.5">
                    <span>The Exact Winning Formula</span>
                    <button 
                      onclick="window.appCopyCareerFormula('${escapeHtml(t.winningFormula)}', 'win-btn-${idx}')"
                      id="win-btn-${idx}"
                      class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2 py-0.5 rounded text-[10px] transition-colors"
                    >
                      📋 Copy Formula
                    </button>
                  </div>
                  <div class="font-mono text-xs text-emerald-400 font-bold select-all break-all leading-relaxed">
                    ${escapeHtml(t.winningFormula)}
                  </div>
                  ${t.fallbackFormula ? `
                    <div class="mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                      <span class="text-slate-500">Alternative:</span> ${escapeHtml(t.fallbackFormula)}
                    </div>
                  ` : ''}
                </div>
              </div>

              <!-- Disqualifying Mistakes -->
              <div class="p-3 bg-rose-50 border border-rose-200/80 rounded-xl text-xs text-rose-950 mt-2">
                <strong class="text-rose-900 block mb-0.5">⚠️ Fatal Mistakes That Reject Candidates:</strong>
                <p class="leading-relaxed">${escapeHtml(t.mistakesToAvoid)}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --- Sub-Tab 3: Portfolio Blueprints & Presentation ---
  function renderPortfolioSubTab() {
    const projects = typeof PORTFOLIO_BLUEPRINTS !== 'undefined' ? PORTFOLIO_BLUEPRINTS : [];

    return `
      <div>
        <!-- C-Level Presentation Rules Banner -->
        <div class="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
          <div class="max-w-3xl">
            <span class="text-[10px] font-mono tracking-widest uppercase bg-emerald-500 text-slate-950 font-bold px-2.5 py-0.5 rounded mb-2 inline-block">
              EXECUTIVE STANDARDS
            </span>
            <h3 class="text-xl sm:text-2xl font-black mb-3">The 5 Golden C-Level Presentation Rules</h3>
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              When a Director or VP opens your spreadsheet, they shouldn't feel like they're looking at a raw database. Follow these 5 design standards:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400 block mb-1">1. Hide Default Gridlines:</strong>
                Always uncheck Gridlines on presentation tabs (View > Gridlines). Clean white breathing room looks instantly executive.
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400 block mb-1">2. 3-Color Palette:</strong>
                Never use rainbow colors. Stick to 1 dominant dark neutral (Navy/Slate), 1 card border gray, and 1 clean accent (Emerald).
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400 block mb-1">3. Executive Summary First:</strong>
                Tab 1 must always be an 'Executive Summary' with 4 large KPI cards. Put raw calculation tabs at the back.
              </div>
              <div class="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <strong class="text-emerald-400 block mb-1">4. Lock Formula Cells:</strong>
                Protect worksheets so users can only type in data-entry cells, preventing accidental formula deletion.
              </div>
            </div>
          </div>
        </div>

        <!-- 4 Projects Grid -->
        <div class="space-y-8">
          ${projects.map(proj => `
            <div class="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-6">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded">${proj.category}</span>
                    <span class="text-xs text-slate-500 font-semibold">• ${proj.difficulty}</span>
                  </div>
                  <h3 class="text-xl sm:text-2xl font-black text-slate-900">${escapeHtml(proj.title)}</h3>
                  <div class="text-xs text-slate-500 mt-0.5"><strong>Target Job Roles: </strong>${escapeHtml(proj.forRoles)}</div>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">${escapeHtml(proj.summary)}</p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                <!-- Columns Needed -->
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs">
                  <strong class="text-slate-900 block mb-2 font-bold">📊 Key Columns to Build in Sheet:</strong>
                  <div class="flex flex-wrap gap-1.5">
                    ${proj.keyColumnsNeeded.map(col => `<span class="bg-white px-2 py-1 rounded border border-slate-200 text-slate-700 font-mono text-[11px]">${escapeHtml(col)}</span>`).join('')}
                  </div>
                </div>

                <!-- Essential Formulas -->
                <div class="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs">
                  <strong class="text-slate-900 block mb-2 font-bold">🧮 Core Formulas to Include:</strong>
                  <ul class="space-y-1.5 font-mono text-[11px] text-slate-800">
                    ${proj.essentialFormulas.map(f => `<li class="bg-white p-1.5 rounded border border-slate-200 select-all">${escapeHtml(f)}</li>`).join('')}
                  </ul>
                </div>

              </div>

              <!-- Presentation Rules & 3-Min Pitch -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div class="p-4 bg-amber-50/60 border border-amber-200/80 rounded-xl text-xs text-amber-950">
                  <strong class="text-amber-900 block mb-2">🎨 Presentation Standards for this Model:</strong>
                  <ul class="list-disc pl-4 space-y-1 text-slate-700">
                    ${proj.presentationRules.map(r => `<li>${escapeHtml(r)}</li>`).join('')}
                  </ul>
                </div>

                <div class="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-xl text-xs text-emerald-950">
                  <strong class="text-emerald-900 block mb-2">🎙️ Your 3-Minute Interview Pitch Script:</strong>
                  <p class="italic leading-relaxed font-editorial-serif text-sm">${escapeHtml(proj.interviewPitch)}</p>
                </div>

              </div>

            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --- Sub-Tab 4: Company Research Panel ---
  function renderCompanyResearchSubTab() {
    const sectors = typeof COMPANY_RESEARCH_PANEL !== 'undefined' ? COMPANY_RESEARCH_PANEL : [];

    return `
      <div>
        <div class="mb-8">
          <h3 class="text-xl font-extrabold text-slate-900 mb-1">Target Hiring Sectors & Salary Benchmarks in India & MNCs</h3>
          <p class="text-xs sm:text-sm text-slate-500">
            These 5 sectors hire thousands of spreadsheet and MIS professionals every month. Use the pre-built boolean search queries to find active hiring managers.
          </p>
        </div>

        <div class="space-y-6">
          ${sectors.map((sec, sIdx) => `
            <div class="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-slate-300 transition-all">
              
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-4">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <span class="text-[10px] font-mono font-bold tracking-widest uppercase bg-slate-900 text-white px-2 py-0.5 rounded">
                      ${sec.badge}
                    </span>
                  </div>
                  <h4 class="text-lg font-black text-slate-900">${escapeHtml(sec.sector)}</h4>
                </div>
                <div class="text-right">
                  <div class="text-[10px] uppercase font-bold text-slate-400">Average Salary Range</div>
                  <div class="text-base font-black text-emerald-700">${escapeHtml(sec.avgSalary)}</div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-xs">
                
                <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <strong class="text-slate-900 block mb-1.5">🎯 Target Job Titles:</strong>
                  <div class="flex flex-wrap gap-1">
                    ${sec.targetRoles.map(r => `<span class="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700 text-[11px]">${escapeHtml(r)}</span>`).join('')}
                  </div>
                </div>

                <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <strong class="text-slate-900 block mb-1.5">🏢 Top Hiring Companies:</strong>
                  <div class="flex flex-wrap gap-1">
                    ${sec.topCompanies.map(c => `<span class="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700 font-semibold text-[11px]">${escapeHtml(c)}</span>`).join('')}
                  </div>
                </div>

                <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <strong class="text-slate-900 block mb-1.5">🔍 What They Evaluate:</strong>
                  <p class="text-slate-600 text-[11px] leading-relaxed">${escapeHtml(sec.whatTheyLookFor)}</p>
                </div>

              </div>

              <!-- Search Query Strings with 1-Click Copy -->
              <div class="bg-slate-900 rounded-xl p-3.5 text-white text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="overflow-hidden">
                  <span class="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block mb-0.5">LinkedIn Boolean Search String:</span>
                  <code class="text-slate-200 font-mono text-[11px] select-all truncate block">${escapeHtml(sec.searchQueryLinkedIn)}</code>
                </div>
                <button 
                  onclick="window.appCopySearchString('${escapeHtml(sec.searchQueryLinkedIn)}', 'str-btn-${sIdx}')"
                  id="str-btn-${sIdx}"
                  class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors shrink-0"
                >
                  📋 Copy Search
                </button>
              </div>

            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // --- Sub-Tab 5: Cold Outreach & LinkedIn Kit ---
  function renderColdEmailsSubTab() {
    const templates = typeof COLD_EMAIL_TEMPLATES !== 'undefined' ? COLD_EMAIL_TEMPLATES : [];
    const fields = state.coldEmailCustomFields;

    return `
      <div>
        <!-- Personalization Bar -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-xs">
          <h3 class="text-base font-extrabold text-slate-900 mb-1">Personalize Your Outreach Templates</h3>
          <p class="text-xs text-slate-500 mb-4">Type your details below and all cold email templates will automatically customize with your name and portfolio link.</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Your Name</label>
              <input 
                type="text" 
                value="${escapeHtml(fields.candidateName)}" 
                oninput="window.appUpdateColdEmailField('candidateName', this.value)"
                class="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 outline-none focus:border-slate-900"
              />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Target Company</label>
              <input 
                type="text" 
                value="${escapeHtml(fields.companyName)}" 
                oninput="window.appUpdateColdEmailField('companyName', this.value)"
                class="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 outline-none focus:border-slate-900"
              />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Hiring Manager Name</label>
              <input 
                type="text" 
                value="${escapeHtml(fields.managerName)}" 
                oninput="window.appUpdateColdEmailField('managerName', this.value)"
                class="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 outline-none focus:border-slate-900"
              />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Your Portfolio / Drive Link</label>
              <input 
                type="text" 
                value="${escapeHtml(fields.portfolioLink)}" 
                oninput="window.appUpdateColdEmailField('portfolioLink', this.value)"
                class="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-900 outline-none focus:border-slate-900"
              />
            </div>
          </div>
        </div>

        <!-- Email Templates List -->
        <div class="space-y-8">
          ${templates.map((tpl, tIdx) => {
            let processedSubject = tpl.subject
              .replace(/\[Your Name\]/g, fields.candidateName)
              .replace(/\[Company Name\]/g, fields.companyName);

            let processedBody = tpl.body
              .replace(/\[Your Name\]/g, fields.candidateName)
              .replace(/\[Company Name\]/g, fields.companyName)
              .replace(/\[Hiring Manager Name \/ HR Team\]/g, fields.managerName)
              .replace(/\[Hiring Manager Name\]/g, fields.managerName)
              .replace(/\[Manager Name\]/g, fields.managerName)
              .replace(/\[Business Owner \/ Manager Name\]/g, fields.managerName)
              .replace(/\[Your Portfolio Link \/ Google Drive View Link\]/g, fields.portfolioLink)
              .replace(/\[Your Portfolio Link\]/g, fields.portfolioLink)
              .replace(/\[Link to Sample Workbook or Portfolio\]/g, fields.portfolioLink)
              .replace(/\[Your Phone Number\]/g, fields.phone)
              .replace(/\[Your Phone \/ WhatsApp\]/g, fields.phone);

            return `
              <div class="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-4">
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full mb-1 inline-block">
                      ${tpl.tag}
                    </span>
                    <h4 class="text-lg font-black text-slate-900">${escapeHtml(tpl.name)}</h4>
                  </div>
                  <button 
                    onclick="window.appCopyEmailTemplate('${escapeHtml(processedSubject)}\\n\\n${escapeHtml(processedBody).replace(/\n/g, '\\n')}', 'email-btn-${tIdx}')"
                    id="email-btn-${tIdx}"
                    class="editorial-btn editorial-btn-primary shrink-0"
                  >
                    <span>📋 COPY OUTREACH EMAIL</span>
                  </button>
                </div>

                <!-- Subject Line -->
                <div class="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                  <span class="text-slate-400 font-bold uppercase text-[10px] block mb-0.5">Subject Line:</span>
                  <div class="font-bold text-slate-800 select-all">${escapeHtml(processedSubject)}</div>
                </div>

                <!-- Email Body Box -->
                <div class="bg-slate-50/50 p-5 rounded-xl border border-slate-200 text-xs text-slate-700 whitespace-pre-line leading-relaxed font-sans select-all">
                  ${escapeHtml(processedBody)}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // --- Career Global Handlers ---
  window.appSetCareerSubTab = function (subTab) {
    state.careerActiveSubTab = subTab;
    renderCurrentTab();
  };

  window.appToggleRoadmapCheck = function (taskKey) {
    if (state.careerChecklist.has(taskKey)) {
      state.careerChecklist.delete(taskKey);
    } else {
      state.careerChecklist.add(taskKey);
    }
    localStorage.setItem('excel_career_checklist', JSON.stringify(Array.from(state.careerChecklist)));
    renderCurrentTab();
  };

  window.appSetCareerTestsFilter = function (cat) {
    state.careerTestsFilter = cat;
    renderCurrentTab();
  };

  window.appUpdateColdEmailField = function (field, val) {
    state.coldEmailCustomFields[field] = val;
    localStorage.setItem(`excel_${field}`, val);
    const container = document.getElementById('career-subtab-container');
    if (container) container.innerHTML = renderCareerSubTabContent();
  };

  window.appCopyEmailTemplate = function (fullEmailText, btnId) {
    if (navigator.clipboard && fullEmailText) {
      navigator.clipboard.writeText(fullEmailText).then(() => {
        const btn = document.getElementById(btnId);
        if (btn) {
          const old = btn.innerHTML;
          btn.innerHTML = '<span>✓ COPIED TO CLIPBOARD!</span>';
          btn.classList.add('bg-emerald-600', 'border-emerald-600');
          setTimeout(() => {
            btn.innerHTML = old;
            btn.classList.remove('bg-emerald-600', 'border-emerald-600');
          }, 2000);
        }
        showToast('Cold email copied! Paste directly into Gmail or LinkedIn.', 'success');
      });
    }
  };

  window.appCopySearchString = function (text, btnId) {
    if (navigator.clipboard && text) {
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById(btnId);
        if (btn) {
          btn.textContent = '✓ Copied!';
          btn.classList.add('bg-green-600');
          setTimeout(() => {
            btn.textContent = '📋 Copy Search';
            btn.classList.remove('bg-green-600');
          }, 2000);
        }
        showToast('Search query copied! Paste into LinkedIn search bar.', 'success');
      });
    }
  };

  window.appCopyCareerFormula = function (formulaText, btnId) {
    if (navigator.clipboard && formulaText) {
      navigator.clipboard.writeText(formulaText).then(() => {
        const btn = document.getElementById(btnId);
        if (btn) {
          btn.textContent = '✓ Copied!';
          btn.classList.add('bg-green-600');
          setTimeout(() => {
            btn.textContent = '📋 Copy Formula';
            btn.classList.remove('bg-green-600');
          }, 2000);
        }
        showToast('Formula copied to clipboard!', 'success');
      });
    }
  };

  // ==========================================
  // 2. KEYBOARD SHORTCUTS ENCYCLOPEDIA (NEW!)
  // ==========================================
  function renderShortcutsView(container) {
    const classes = [
      'All',
      'Home Tab',
      'Data Tab',
      'Insert Tab',
      'Formulas Tab',
      'View Tab',
      'Navigation & Selection',
      'Data Entry & Editing',
      'General & File'
    ];

    const q = state.shortcutsSearchQuery.toLowerCase().trim();
    const filtered = EXCEL_SHORTCUTS.filter(sc => {
      const matchesClass = state.shortcutsSelectedClass === 'All' || sc.ribbonClass === state.shortcutsSelectedClass;
      if (!matchesClass) return false;
      if (!q) return true;
      return (
        sc.title.toLowerCase().includes(q) ||
        sc.description.toLowerCase().includes(q) ||
        sc.teacherExplanation.toLowerCase().includes(q) ||
        sc.keys.some(k => k.toLowerCase().includes(q))
      );
    });

    container.innerHTML = `
      <div class="w-full pb-[3px]">
        
        <!-- Hero Search Section -->
        <div class="bg-gradient-to-r from-emerald-800 via-green-800 to-emerald-950 rounded-2xl p-6 sm:p-10 text-white shadow-xl mb-8">
          <div class="max-w-3xl">
            <span class="inline-flex items-center gap-1.5 bg-emerald-700/80 border border-emerald-400/40 text-emerald-100 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              ⌨️ Complete Keyboard Shortcuts Master Directory
            </span>
            <h1 class="text-2xl sm:text-4xl font-black mb-3">Excel Shortcuts Encyclopedia</h1>
            <p class="text-emerald-100 text-sm sm:text-base leading-relaxed mb-6">
              Learn shortcuts like a pro accountant! Categorized by their <strong>Ribbon Tabs & Classes</strong> (Home, Data, Insert, Formulas, View) with teacher explanations on how much time they save in real office work.
            </p>

            <!-- Search Bar -->
            <div class="relative bg-white rounded-xl shadow-lg p-1.5 flex items-center">
              <span class="pl-3 pr-2 text-gray-400 text-lg">🔍</span>
              <input 
                id="shortcut-search-input"
                type="text" 
                placeholder="Search shortcuts... (e.g. filter, border, date, freeze, table, sum)" 
                value="${escapeHtml(state.shortcutsSearchQuery)}"
                class="w-full text-gray-900 text-sm sm:text-base py-2 px-1 outline-none font-medium"
                oninput="window.appUpdateShortcutSearch(this.value)"
              />
              ${state.shortcutsSearchQuery ? `
                <button 
                  onclick="window.appUpdateShortcutSearch('')"
                  class="text-gray-400 hover:text-gray-600 px-2 py-1 text-sm font-bold"
                >✕</button>
              ` : ''}
            </div>
          </div>
        </div>

        <!-- Class Filter Chips -->
        <div class="flex flex-wrap items-center gap-2 mb-6">
          <span class="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Ribbon Tabs / Class:</span>
          ${classes.map(cls => {
            const isSel = state.shortcutsSelectedClass === cls;
            return `
              <button 
                onclick="window.appSetShortcutClass('${cls}')"
                class="text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                  isSel 
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm' 
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }"
              >
                ${cls}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Count & Status -->
        <div class="flex justify-between items-center text-xs text-gray-500 mb-4 font-medium">
          <span>Showing <strong>${filtered.length}</strong> keyboard shortcuts</span>
          ${state.shortcutsSearchQuery ? `<span>Filtered by "${escapeHtml(state.shortcutsSearchQuery)}"</span>` : ''}
        </div>

        <!-- Shortcuts Grid -->
        ${filtered.length === 0 ? `
          <div class="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div class="text-4xl mb-3">⌨️</div>
            <h3 class="text-lg font-bold text-gray-800 mb-1">No matching shortcuts found</h3>
            <p class="text-sm text-gray-500 max-w-md mx-auto mb-4">Try searching for words like 'filter', 'sum', 'border', 'date', or select another tab class.</p>
            <button onclick="window.appUpdateShortcutSearch(''); window.appSetShortcutClass('All');" class="bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg">
              Reset Filters
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${filtered.map(sc => renderShortcutCardHTML(sc)).join('')}
          </div>
        `}

      </div>
    `;
  }

  function renderShortcutCardHTML(sc) {
    return `
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-emerald-400 transition-all p-5 flex flex-col justify-between">
        <div>
          <!-- Header with Keycaps & Ribbon Class -->
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <!-- Styled Keycaps -->
            <div class="flex items-center gap-1.5 flex-wrap">
              ${sc.keys.map((k, idx) => `
                <kbd class="px-2.5 py-1 text-xs font-mono font-bold text-gray-800 bg-gray-100 border border-gray-300 rounded shadow-[0_2px_0_rgba(0,0,0,0.15)] ring-1 ring-white">
                  ${k}
                </kbd>
                ${idx < sc.keys.length - 1 ? '<span class="text-gray-400 text-xs font-bold">+</span>' : ''}
              `).join('')}
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full">
              ${sc.ribbonClass}
            </span>
          </div>

          <!-- Title & Quick Description -->
          <h3 class="text-base font-bold text-gray-900 mb-1">${sc.title}</h3>
          <p class="text-xs text-gray-600 mb-3">${sc.description}</p>

          <!-- Teacher Explanation Box -->
          <div class="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-lg text-xs text-emerald-950 mb-3">
            <div class="font-bold text-emerald-900 flex items-center gap-1 mb-1">
              <span>👨‍🏫 Teacher Ki Tip:</span>
            </div>
            <p class="leading-relaxed">${sc.teacherExplanation}</p>
          </div>
        </div>

        <!-- Footer Time Saved Badge -->
        <div class="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
          <span class="text-amber-700 flex items-center gap-1 font-semibold">
            <span>⚡</span>
            <span>${sc.timeSaved}</span>
          </span>
          <button 
            onclick="navigator.clipboard.writeText('${sc.keys.join(' + ')}'); showToast('Shortcut keys copied!', 'info');"
            class="text-emerald-700 hover:text-emerald-800 font-bold hover:underline"
          >
            Copy Keys
          </button>
        </div>
      </div>
    `;
  }

  window.appUpdateShortcutSearch = function (query) {
    state.shortcutsSearchQuery = query;
    renderCurrentTab();
    const input = document.getElementById('shortcut-search-input');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  };

  window.appSetShortcutClass = function (cls) {
    state.shortcutsSelectedClass = cls;
    renderCurrentTab();
  };


  // ==========================================
  // 3. FORMULAS ENCYCLOPEDIA
  // ==========================================
  function renderFormulasView(container) {
    const categories = ['All', 'Math & Statistical', 'Lookup & Reference', 'Text Functions', 'Date & Time', 'Logical', 'Financial', 'Dynamic Arrays', 'Information & Error', 'Array & Advanced'];

    const q = state.formulasSearchQuery.toLowerCase().trim();
    const filtered = EXCEL_FORMULAS.filter(f => {
      const matchesCat = state.formulasSelectedCategory === 'All' || f.category === state.formulasSelectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        f.name.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        (f.usedFor && f.usedFor.toLowerCase().includes(q)) ||
        (f.tags && f.tags.some(t => t.toLowerCase().includes(q))) ||
        (f.teacherExplanation && f.teacherExplanation.toLowerCase().includes(q))
      );
    });

    const difficultyColors = {
      'Beginner': 'bg-green-100 text-green-800 border-green-200',
      'Intermediate': 'bg-blue-100 text-blue-800 border-blue-200',
      'Advanced': 'bg-purple-100 text-purple-800 border-purple-200'
    };

    container.innerHTML = `
      <div class="w-full pb-[3px]">
        
        <!-- Hero Header -->
        <div class="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-2xl p-6 sm:p-10 text-white shadow-xl mb-8 relative overflow-hidden">
          <div class="absolute inset-0 opacity-5" style="background-image:repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%);background-size:20px 20px;"></div>
          <div class="max-w-3xl relative z-10">
            <span class="inline-flex items-center gap-1.5 bg-blue-600/60 border border-blue-400/30 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              📐 Complete Excel Formulas Encyclopedia
            </span>
            <h1 class="text-2xl sm:text-4xl font-black mb-3">All Excel Formulas — Syntax, Examples & Teacher Explanations</h1>
            <p class="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
              Har formula ki syntax, real office examples, aur teacher-style simple explanation. 
              SUM se le kar XLOOKUP, FILTER, PMT tak — sab kuch ek jagah!
            </p>

            <!-- Search Bar -->
            <div class="relative bg-white rounded-xl shadow-lg p-1.5 flex items-center">
              <span class="pl-3 pr-2 text-gray-400 text-lg">🔍</span>
              <input 
                id="formula-search-input"
                type="text" 
                placeholder="Search formulas... (e.g. sum, date, vlookup, emi, if, text, round)" 
                value="${escapeHtml(state.formulasSearchQuery)}"
                class="w-full text-gray-900 text-sm sm:text-base py-2 px-1 outline-none font-medium"
                oninput="window.appUpdateFormulaSearch(this.value)"
              />
              ${state.formulasSearchQuery ? `
                <button 
                  onclick="window.appUpdateFormulaSearch('')"
                  class="text-gray-400 hover:text-gray-600 px-2 py-1 text-sm font-bold"
                >✕</button>
              ` : ''}
            </div>

            <!-- Quick Search Pills -->
            <div class="flex flex-wrap gap-2 mt-4 text-xs">
              <span class="text-blue-200 font-medium">Popular:</span>
              ${['SUM', 'VLOOKUP', 'IF', 'COUNTIF', 'PMT', 'TODAY', 'IFERROR', 'TEXT', 'FILTER'].map(tag => `
                <button 
                  onclick="window.appUpdateFormulaSearch('${tag}')"
                  class="bg-blue-800/60 hover:bg-blue-700/80 border border-blue-500/40 text-blue-100 px-2.5 py-1 rounded-full transition-colors"
                >
                  ${tag}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 mb-6">
          <span class="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Category:</span>
          ${categories.map(cat => {
            const isSel = state.formulasSelectedCategory === cat;
            return `
              <button 
                onclick="window.appSetFormulaCategory('${cat}')"
                class="text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                  isSel 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm' 
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }"
              >
                ${cat}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Count -->
        <div class="flex justify-between items-center text-xs text-gray-500 mb-4 font-medium">
          <span>Showing <strong>${filtered.length}</strong> formulas</span>
          ${state.formulasSearchQuery ? `<span>Filtered by "${escapeHtml(state.formulasSearchQuery)}"</span>` : ''}
        </div>

        <!-- Formulas Grid -->
        ${filtered.length === 0 ? `
          <div class="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div class="text-4xl mb-3">📐</div>
            <h3 class="text-lg font-bold text-gray-800 mb-1">No matching formulas found</h3>
            <p class="text-sm text-gray-500 max-w-md mx-auto mb-4">Try searching for 'sum', 'if', 'vlookup', 'date', 'text', 'round', 'emi' etc.</p>
            <button onclick="window.appUpdateFormulaSearch(''); window.appSetFormulaCategory('All');" class="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-lg">
              Reset Filters
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${filtered.map(f => renderFormulaCardHTML(f, difficultyColors)).join('')}
          </div>
        `}

      </div>
    `;
  }

  function renderFormulaCardHTML(f, difficultyColors) {
    const diffClass = difficultyColors[f.difficulty] || 'bg-gray-100 text-gray-700 border-gray-200';
    
    return `
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all overflow-hidden" id="formula-${f.id}">
        
        <!-- Card Header -->
        <div class="p-5 border-b border-gray-100">
          <div class="flex items-start justify-between gap-3 mb-2">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xl font-black text-blue-700 font-mono">=</span>
              <h3 class="text-lg font-black text-gray-900">${escapeHtml(f.name)}</h3>
              <span class="text-[10px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${diffClass}">
                ${f.difficulty}
              </span>
            </div>
            <span class="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-full shrink-0">
              ${escapeHtml(f.category)}
            </span>
          </div>
          <p class="text-sm text-gray-600">${escapeHtml(f.description)}</p>
        </div>

        <div class="p-5">

          <!-- Syntax Box -->
          <div class="mb-4">
            <div class="text-[11px] text-gray-400 uppercase tracking-wider font-bold mb-1.5">📝 Syntax</div>
            <div class="bg-gray-900 rounded-lg px-4 py-3 font-mono text-emerald-400 text-xs sm:text-sm break-all select-all">
              ${escapeHtml(f.syntax)}
            </div>
            ${f.shortSyntax && f.shortSyntax !== f.syntax ? `
              <div class="mt-1.5 text-xs text-gray-500 font-mono pl-1">
                <span class="text-gray-400">Quick form:</span> <span class="text-blue-700 font-semibold">${escapeHtml(f.shortSyntax)}</span>
              </div>
            ` : ''}
          </div>

          <!-- Used For -->
          <div class="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div class="text-[11px] text-amber-700 uppercase tracking-wider font-bold mb-1">💼 Used For</div>
            <p class="text-xs text-amber-900">${escapeHtml(f.usedFor)}</p>
          </div>

          <!-- Real Example -->
          <div class="mb-4">
            <div class="text-[11px] text-gray-400 uppercase tracking-wider font-bold mb-1.5">📊 Real Example</div>
            <div class="font-mono text-xs text-blue-800 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 select-all break-all">
              ${escapeHtml(f.realExample)}
            </div>
          </div>

          <!-- Sample Table -->
          ${f.exampleTable ? `
            <div class="mb-4 overflow-x-auto">
              <div class="text-[11px] text-gray-400 uppercase tracking-wider font-bold mb-1.5">📋 Example Table</div>
              <table class="min-w-full text-[11px] border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr class="bg-gray-100">
                    ${f.exampleTable.headers.map(h => `<th class="px-2 py-1.5 text-left border border-gray-200 font-bold text-gray-700">${escapeHtml(h)}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${f.exampleTable.rows.map((row, ri) => `
                    <tr class="${ri === f.exampleTable.rows.length - 1 ? 'bg-blue-50 font-semibold' : 'bg-white'}">
                      ${row.map(cell => `<td class="px-2 py-1.5 border border-gray-200 font-mono">${escapeHtml(cell)}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : ''}

          <!-- Teacher Explanation -->
          <div class="mb-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div class="text-[11px] text-emerald-700 uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
              <span>👨‍🏫</span><span>Teacher Ki Baat (Simple Explanation)</span>
            </div>
            <p class="text-xs text-emerald-950 leading-relaxed">${escapeHtml(f.teacherExplanation)}</p>
          </div>

          <!-- Hinglish Tip -->
          ${f.hinglishTip ? `
            <div class="mb-3 p-2.5 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
              <span class="text-sm shrink-0">💡</span>
              <div class="text-xs text-amber-900">
                <strong>Hinglish Tip: </strong>${escapeHtml(f.hinglishTip)}
              </div>
            </div>
          ` : ''}

          <!-- Common Errors -->
          ${f.commonErrors ? `
            <div class="p-2.5 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <span class="text-sm shrink-0">⚠️</span>
              <div class="text-xs text-red-900">
                <strong>Common Mistakes: </strong>${escapeHtml(f.commonErrors)}
              </div>
            </div>
          ` : ''}

        </div>

        <!-- Footer — Copy Button -->
        <div class="px-5 pb-4">
          <button 
            onclick="navigator.clipboard.writeText('${f.shortSyntax || f.syntax}').then(()=>{this.textContent='✓ Copied!';this.classList.add('bg-emerald-600');setTimeout(()=>{this.textContent='📋 Copy Formula Syntax';this.classList.remove('bg-emerald-600');},2000);})"
            class="w-full bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
          >
            📋 Copy Formula Syntax
          </button>
        </div>

      </div>
    `;
  }

  window.appUpdateFormulaSearch = function (query) {
    state.formulasSearchQuery = query;
    renderCurrentTab();
    const input = document.getElementById('formula-search-input');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  };

  window.appSetFormulaCategory = function (cat) {
    state.formulasSelectedCategory = cat;
    renderCurrentTab();
  };

  // ==========================================
  // 4. SMART PROBLEM SOLVER / FORMULA FINDER
  // ==========================================
  function renderProblemSolverView(container) {
    const categories = ['All', 'Dates & Time', 'Math & Aggregations', 'Lookup & Reference', 'Data Cleaning', 'Text Manipulation', 'Error Fixing'];
    
    const q = state.solverSearchQuery.toLowerCase().trim();
    const filtered = PROBLEM_SOLUTIONS.filter(sol => {
      const matchesCat = state.solverSelectedCategory === 'All' || sol.category === state.solverSelectedCategory;
      if (!matchesCat) return false;
      if (!q) return true;
      return (
        sol.title.toLowerCase().includes(q) ||
        sol.description.toLowerCase().includes(q) ||
        sol.defaultFormula.toLowerCase().includes(q) ||
        (sol.hinglishSummary && sol.hinglishSummary.toLowerCase().includes(q)) ||
        sol.keywords.some(k => k.toLowerCase().includes(q))
      );
    });

    const popularTags = [
      'Calculate Age',
      'Sum with Multiple Conditions',
      'Lookup Left',
      'Find Duplicates',
      'Extract First Name',
      'Hide Errors (#N/A)'
    ];

    container.innerHTML = `
      <div class="w-full pb-[3px]">
        
        <!-- Header & Search Box Hero (Soft Blue & Warm Gray Editorial) -->
        <div class="bg-gradient-to-br from-[#243545] via-[#2F475E] to-[#1B1A18] rounded-2xl p-6 sm:p-10 text-white shadow-xl mb-8 relative overflow-hidden border border-[#3C6488]/40">
          <div class="max-w-3xl relative z-10">
            <span class="inline-flex items-center gap-1.5 bg-softblue-700/60 border border-softblue-400/40 text-softblue-100 text-xs font-semibold px-3 py-1 rounded-full mb-3 font-mono">
              🔍 Instant Excel Problem Solver & Formula Generator
            </span>
            <h1 class="text-2xl sm:text-4xl font-black mb-3 text-warmgray-50">Search Your Excel Problem, Get Instant Solution</h1>
            <p class="text-softblue-100 text-xs sm:text-sm sm:text-base leading-relaxed mb-6">
              Type your problem in plain English or Hinglish (e.g. <em>"how to sum by month"</em>, <em>"age from date of birth"</em>, <em>"vlookup left"</em>) and get exact formulas with 1-click copy & custom parameter generator!
            </p>

            <!-- Search Bar -->
            <div class="relative bg-white rounded-xl shadow-lg p-1.5 flex items-center border border-[#DBD5C9]">
              <span class="pl-3 pr-2 text-warmgray-400 text-lg">🔍</span>
              <input 
                id="problem-search-input"
                type="text" 
                placeholder="Search your problem... (e.g. age, sumifs, duplicate, extract name, error)" 
                value="${escapeHtml(state.solverSearchQuery)}"
                class="w-full text-warmgray-900 text-sm sm:text-base py-2 px-1 outline-none font-medium"
                oninput="window.appUpdateSolverSearch(this.value)"
              />
              ${state.solverSearchQuery ? `
                <button 
                  onclick="window.appUpdateSolverSearch('')"
                  class="text-warmgray-400 hover:text-warmgray-600 px-2 py-1 text-sm font-bold"
                >✕</button>
              ` : ''}
            </div>

            <!-- Quick Suggested Query Pills -->
            <div class="flex flex-wrap items-center gap-2 mt-4 text-xs">
              <span class="text-softblue-200 font-medium">Popular Searches:</span>
              ${popularTags.map(tag => `
                <button 
                  onclick="window.appUpdateSolverSearch('${tag}')"
                  class="bg-softblue-900/80 hover:bg-softblue-800 border border-softblue-400/40 text-softblue-100 px-2.5 py-1 rounded-full transition-colors"
                >
                  ${tag}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- AI File Inspector & Sheet Fixer Section -->
        ${renderSpreadsheetInspectorHTML()}

        <!-- Section Divider -->
        <div class="relative my-10">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-slate-200"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-slate-50 px-4 text-xs font-bold uppercase tracking-wider text-slate-500 rounded-full border border-slate-200/60 shadow-sm">
              📚 Or Search 50+ Pre-Solved Formula Scenarios
            </span>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 mb-6">
          <span class="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Categories:</span>
          ${categories.map(cat => {
            const isSel = state.solverSelectedCategory === cat;
            return `
              <button 
                onclick="window.appSetSolverCategory('${cat}')"
                class="text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                  isSel 
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm' 
                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }"
              >
                ${cat}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Search Results Count -->
        <div class="flex justify-between items-center text-xs text-gray-500 mb-4 font-medium">
          <span>Showing <strong>${filtered.length}</strong> formula solutions</span>
          ${state.solverSearchQuery ? `<span>Filtered by "${escapeHtml(state.solverSearchQuery)}"</span>` : ''}
        </div>

        <!-- Solutions List -->
        ${filtered.length === 0 ? `
          <div class="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div class="text-4xl mb-3">🔎</div>
            <h3 class="text-lg font-bold text-gray-800 mb-1">No matching solutions found</h3>
            <p class="text-sm text-gray-500 max-w-md mx-auto mb-4">
              Try searching with different keywords like 'sum', 'lookup', 'text', 'date', or browse all categories.
            </p>
            <button 
              onclick="window.appUpdateSolverSearch(''); window.appSetSolverCategory('All');"
              class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg"
            >
              Reset Search & Filters
            </button>
          </div>
        ` : `
          <div class="space-y-6">
            ${filtered.map(sol => renderSolutionCardHTML(sol)).join('')}
          </div>
        `}

      </div>
    `;
  }

  function renderSolutionCardHTML(sol) {
    const isBookmarked = state.bookmarks.has(sol.id);

    return `
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 hover:border-emerald-300 transition-all p-6" id="card-${sol.id}">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                ${sol.category}
              </span>
              <button 
                onclick="window.appToggleBookmark('${sol.id}')"
                class="text-xs px-2 py-0.5 rounded border transition-colors flex items-center gap-1 ${
                  isBookmarked 
                    ? 'bg-amber-50 border-amber-300 text-amber-800 font-semibold' 
                    : 'bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-700'
                }"
              >
                <span>${isBookmarked ? '★ Saved' : '☆ Save'}</span>
              </button>
            </div>
            <h3 class="text-xl font-bold text-gray-900">${sol.title}</h3>
          </div>
        </div>

        <p class="text-sm text-gray-600 mb-3">${sol.description}</p>

        <!-- Hinglish Callout -->
        ${state.hinglishMode && sol.hinglishSummary ? `
          <div class="mb-4 p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
            <span class="text-sm shrink-0">💡</span>
            <div>
              <strong>Aasan Samjhouta: </strong>${sol.hinglishSummary}
            </div>
          </div>
        ` : ''}

        <!-- Interactive Formula Box with Customizer -->
        <div class="bg-gray-900 rounded-lg p-4 text-white mb-4">
          <div class="flex justify-between items-center mb-2">
            <span class="text-xs text-gray-400 font-mono">READY-TO-USE FORMULA</span>
            <button 
              onclick="window.appCopyFormula('${sol.id}')"
              class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3 py-1.5 rounded transition-all flex items-center gap-1 shadow"
              id="copy-btn-${sol.id}"
            >
              <span>📋 Copy Formula</span>
            </button>
          </div>
          <div class="font-mono text-emerald-400 font-semibold text-sm sm:text-base break-all select-all py-1" id="formula-display-${sol.id}">
            ${escapeHtml(sol.defaultFormula)}
          </div>

          <!-- Parameter Customizer Inputs -->
          ${sol.paramFields && sol.paramFields.length > 0 ? `
            <div class="mt-3 pt-3 border-t border-gray-800">
              <div class="text-[11px] text-gray-400 uppercase tracking-wider mb-2 font-semibold">
                ⚙️ Customize Formula with Your Own Cells:
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                ${sol.paramFields.map(p => `
                  <div>
                    <label class="block text-[10px] text-gray-400 mb-1">${p.label}</label>
                    <input 
                      type="text" 
                      value="${p.default}" 
                      data-sol-id="${sol.id}"
                      data-param-key="${p.key}"
                      oninput="window.appUpdateCustomFormula('${sol.id}')"
                      class="custom-param-input w-full bg-gray-800 border border-gray-700 text-white text-xs px-2.5 py-1.5 rounded font-mono outline-none focus:border-emerald-500"
                    />
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- How It Works & Sample Table Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          <!-- Steps -->
          <div class="bg-gray-50 p-3.5 rounded-lg border border-gray-200">
            <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-1 text-emerald-900">
              <span>📖 How it works step-by-step:</span>
            </h4>
            <ol class="space-y-1.5 text-gray-700 list-decimal pl-4">
              ${sol.howItWorks.map(step => {
                const cleaned = step.replace(/^\d+\.\s*/, '');
                return `<li>${formatMarkdown(cleaned)}</li>`;
              }).join('')}
            </ol>
          </div>

          <!-- Sample Table Preview -->
          <div class="bg-gray-50 p-3.5 rounded-lg border border-gray-200">
            <h4 class="font-bold text-gray-900 mb-2 flex items-center gap-1 text-emerald-900">
              <span>📊 Sample Data Table:</span>
            </h4>
            <div class="overflow-x-auto">
              <table class="min-w-full text-[11px] border border-gray-200 bg-white rounded">
                <thead>
                  <tr class="bg-gray-100 border-b">
                    ${sol.sampleData.headers.map(h => `<th class="p-1.5 text-left border">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${sol.sampleData.rows.map(r => `
                    <tr class="border-b">
                      ${r.map(c => `<td class="p-1.5 border font-mono">${escapeHtml(c)}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ${sol.commonErrors ? `
              <div class="mt-2 text-[11px] text-amber-900 bg-amber-50 p-2 rounded border border-amber-200">
                <strong>⚠️ Note:</strong> ${sol.commonErrors}
              </div>
            ` : ''}
          </div>

        </div>

      </div>
    `;
  }

  window.appUpdateSolverSearch = function (query) {
    state.solverSearchQuery = query;
    renderCurrentTab();
    const input = document.getElementById('problem-search-input');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  };

  window.appSetSolverCategory = function (category) {
    state.solverSelectedCategory = category;
    renderCurrentTab();
  };

  window.appToggleBookmark = function (solId) {
    if (state.bookmarks.has(solId)) {
      state.bookmarks.delete(solId);
      showToast('Solution removed from bookmarks', 'info');
    } else {
      state.bookmarks.add(solId);
      showToast('Solution saved to your bookmarks! ⭐', 'success');
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(Array.from(state.bookmarks)));
    renderCurrentTab();
  };

  window.appUpdateCustomFormula = function (solId) {
    const sol = PROBLEM_SOLUTIONS.find(s => s.id === solId);
    if (!sol || !sol.template) return;

    const inputs = document.querySelectorAll(`input[data-sol-id="${solId}"]`);
    let formula = sol.template;

    inputs.forEach(inp => {
      const key = inp.getAttribute('data-param-key');
      const val = inp.value.trim() || 'A1';
      formula = formula.split(`{${key}}`).join(val);
    });

    const displayEl = document.getElementById(`formula-display-${solId}`);
    if (displayEl) displayEl.textContent = formula;
  };

  window.appCopyFormula = function (solId) {
    const displayEl = document.getElementById(`formula-display-${solId}`);
    const formulaText = displayEl ? displayEl.textContent.trim() : '';

    if (navigator.clipboard && formulaText) {
      navigator.clipboard.writeText(formulaText).then(() => {
        const btn = document.getElementById(`copy-btn-${solId}`);
        if (btn) {
          btn.innerHTML = '<span>✓ Copied!</span>';
          btn.classList.add('bg-green-600');
          setTimeout(() => {
            btn.innerHTML = '<span>📋 Copy Formula</span>';
            btn.classList.remove('bg-green-600');
          }, 2000);
        }
        showToast('Formula copied to clipboard!', 'success');
      });
    }
  };


  // ==========================================
  // AI SPREADSHEET INSPECTOR & CHATBOT ENGINE
  // ==========================================

  function parseCSVText(text) {
    if (!text) return { headers: [], rows: [] };
    const lines = text.trim().split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length === 0) return { headers: [], rows: [] };

    const parseLine = (line) => {
      const result = [];
      let current = '';
      let inQuotes = false;
      const delimiter = line.includes('\t') ? '\t' : ',';
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"' || char === "'") {
          inQuotes = !inQuotes;
        } else if (char === delimiter && !inQuotes) {
          result.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      result.push(current.trim());
      return result;
    };

    const headers = parseLine(lines[0]);
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const parsedRow = parseLine(lines[i]);
      while (parsedRow.length < headers.length) parsedRow.push('');
      rows.push(parsedRow.slice(0, headers.length));
    }
    return { headers, rows };
  }

  function runSpreadsheetAudit(headers, rows) {
    const issues = [];
    const blankCells = [];
    const textNumbers = [];
    const trailingSpaces = [];
    const negativeValues = [];
    const duplicateRowIndices = [];

    // 1. Check for Duplicate Rows
    const seenRows = new Map();
    rows.forEach((row, idx) => {
      const rowStr = row.join('|||').toLowerCase();
      if (seenRows.has(rowStr)) {
        duplicateRowIndices.push(idx);
        if (!duplicateRowIndices.includes(seenRows.get(rowStr))) {
          duplicateRowIndices.push(seenRows.get(rowStr));
        }
      } else {
        seenRows.set(rowStr, idx);
      }
    });

    if (duplicateRowIndices.length > 0) {
      issues.push({
        type: 'duplicates',
        severity: 'high',
        title: `Found ${duplicateRowIndices.length} Duplicate Rows`,
        description: `Same data rows appear multiple times (Rows: ${duplicateRowIndices.slice(0, 6).map(r => r + 2).join(', ')}${duplicateRowIndices.length > 6 ? '...' : ''}). This causes double-counting in SUM, Pivot Tables and Sales reports.`,
        solutionFormula: "Use Excel Deduplicate Tool or UNIQUE() in Excel 365",
        shortcut: "Alt + A + M (Data > Remove Duplicates)",
        steps: "Table select karein aur keyboard se Alt + A + M dabayein. Excel duplicate rows ko delete karke unique count batayega.",
        rows: duplicateRowIndices
      });
    }

    // Column by column inspection
    headers.forEach((colName, colIdx) => {
      const colLower = colName.toLowerCase();
      const isNumericCol = colLower.includes('salary') || colLower.includes('price') || colLower.includes('amount') || colLower.includes('qty') || colLower.includes('quantity') || colLower.includes('total') || colLower.includes('pf') || colLower.includes('rate');
      
      let colBlanks = 0;
      let colTextNums = 0;
      let colSpaces = 0;
      let colNegatives = 0;

      rows.forEach((row, rowIdx) => {
        const val = row[colIdx] !== undefined ? row[colIdx].toString() : '';

        // Check blanks
        if (!val || val.trim() === '') {
          colBlanks++;
          blankCells.push({ r: rowIdx, c: colIdx });
        } else {
          // Check trailing/leading spaces
          if (val.trim() !== val) {
            colSpaces++;
            trailingSpaces.push({ r: rowIdx, c: colIdx, original: val });
          }

          // Check text-numbers (e.g. " 42000 ", "₹35000", "$100")
          if (isNumericCol) {
            const cleanVal = val.replace(/[\$₹,\s]/g, '');
            if (isNaN(Number(val)) && !isNaN(Number(cleanVal))) {
              colTextNums++;
              textNumbers.push({ r: rowIdx, c: colIdx, val });
            } else if (!isNaN(Number(val))) {
              const num = Number(val);
              if (num < 0 && (colLower.includes('qty') || colLower.includes('quantity') || colLower.includes('price') || colLower.includes('salary') || colLower.includes('basic'))) {
                colNegatives++;
                negativeValues.push({ r: rowIdx, c: colIdx, val: num });
              }
            }
          }
        }
      });

      if (colBlanks > 0) {
        issues.push({
          type: 'blanks',
          severity: 'medium',
          title: `${colBlanks} Blank Cell(s) in "${colName}"`,
          description: `Missing values detected in Column "${colName}". Blank cells break mathematical calculations and cause gaps in charts & Pivot Tables.`,
          solutionFormula: `=IF(ISBLANK(${String.fromCharCode(65 + colIdx)}2), 0, ${String.fromCharCode(65 + colIdx)}2)`,
          shortcut: "Ctrl + G > Alt + S > K (Go to Blanks) then type 0 and press Ctrl + Enter",
          steps: `Column ${colName} select karein -> Ctrl + G dabayein -> Special -> Blanks choose karein -> formula bar me 0 ya "N/A" type karke Ctrl + Enter dabayein!`,
          colIdx,
          colName
        });
      }

      if (colSpaces > 0) {
        issues.push({
          type: 'spaces',
          severity: 'high',
          title: `Ghost Spaces in "${colName}" (${colSpaces} cells)`,
          description: `Hidden leading or trailing spaces (e.g. " ${rows[0] ? rows[0][colIdx] : ''} ") detected! This is the #1 reason why VLOOKUP returns #N/A even when values look identical to human eyes.`,
          solutionFormula: `=TRIM(${String.fromCharCode(65 + colIdx)}2)`,
          shortcut: "Ctrl + E (Flash Fill) or Alt + A + E (Text to Columns)",
          steps: `Adjacent column me =TRIM(${String.fromCharCode(65 + colIdx)}2) formula lagayein aur double click karke niche drag karein. Fir copy karke Values-only (Alt + E + S + V) paste kar dein.`,
          colIdx,
          colName
        });
      }

      if (colTextNums > 0) {
        issues.push({
          type: 'text_numbers',
          severity: 'high',
          title: `Numbers Stored as Text in "${colName}" (${colTextNums} cells)`,
          description: `Numeric values have currency symbols or rogue spaces. Excel treats these as text, meaning =SUM() will ignore them and return 0 or wrong totals!`,
          solutionFormula: `=VALUE(SUBSTITUTE(SUBSTITUTE(${String.fromCharCode(65 + colIdx)}2, "₹", ""), " ", ""))`,
          shortcut: "Paste Special Multiply (Copy empty cell with 1, select column -> Alt + E + S + M)",
          steps: `Kisi khali cell me 1 likhein -> Copy karein -> In numbers ko select karein -> Alt + E + S + M (Multiply) dabayein. Numbers instantly calculation-ready ban jayenge!`,
          colIdx,
          colName
        });
      }

      if (colNegatives > 0) {
        issues.push({
          type: 'negative_outliers',
          severity: 'medium',
          title: `Negative Outliers in "${colName}" (${colNegatives} cells)`,
          description: `Column "${colName}" contains negative numbers (e.g. negative salary or negative quantity) which is typically an entry error or unintended reversal.`,
          solutionFormula: `=IF(${String.fromCharCode(65 + colIdx)}2 < 0, ABS(${String.fromCharCode(65 + colIdx)}2), ${String.fromCharCode(65 + colIdx)}2)`,
          shortcut: "Conditional Formatting (Alt + H + L + H + L: Highlight Cells Less Than 0)",
          steps: `Conditional Formatting se negative cells ko red color karein taaki data audit karte waqt wo boss ke samne highlight ho sakein.`,
          colIdx,
          colName
        });
      }
    });

    // Calculate Health Score (100 base)
    const penalty = (duplicateRowIndices.length * 4) + (blankCells.length * 3) + (textNumbers.length * 4) + (trailingSpaces.length * 3) + (negativeValues.length * 4);
    const healthScore = Math.max(20, Math.min(100, 100 - penalty));

    return {
      healthScore,
      issues,
      blankCells,
      textNumbers,
      trailingSpaces,
      negativeValues,
      duplicateRowIndices,
      totalRows: rows.length,
      totalCols: headers.length
    };
  }

  function renderSpreadsheetInspectorHTML() {
    const data = state.uploadedFileData;
    const audit = state.fileAuditReport;

    return `
      <div class="bg-white rounded-2xl shadow-sm border border-slate-200/90 p-5 sm:p-7 mb-8 overflow-hidden relative">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                🤖 AI Sheet Doctor
              </span>
              <span class="text-xs text-slate-500 font-semibold">• 100% Client-Side Private Analysis</span>
            </div>
            <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Upload Your Sheet — AI Finds All Errors & Gives Exact Fixes
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 mt-1">
              Apni CSV ya Excel sheet upload kijiye. Hamara AI turant blank cells, duplicate rows, broken formatting aur VLOOKUP errors dhoond kar step-by-step formula solution batayega!
            </p>
          </div>

          <!-- Quick Sample Testing Buttons -->
          <div class="flex items-center gap-2 flex-wrap shrink-0">
            <span class="text-xs font-bold text-slate-400">Quick Test:</span>
            <button 
              onclick="window.appLoadSampleSpreadsheet('payroll')"
              class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-lg border border-slate-200 transition-colors flex items-center gap-1.5 shadow-sm"
              title="Loads sample employee salary sheet with blanks and duplicate rows"
            >
              <span>💼</span>
              <span>Sample Payroll Sheet</span>
            </button>
            <button 
              onclick="window.appLoadSampleSpreadsheet('sales')"
              class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-lg border border-slate-200 transition-colors flex items-center gap-1.5 shadow-sm"
              title="Loads sample sales register with broken spaces and negative quantity"
            >
              <span>🛒</span>
              <span>Sample Sales Sheet</span>
            </button>
          </div>
        </div>

        ${!data ? `
          <!-- Upload Dropzone Area -->
          <div 
            class="border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/30 hover:bg-emerald-50/60 rounded-2xl p-8 sm:p-12 text-center transition-all cursor-pointer group"
            onclick="document.getElementById('spreadsheet-file-input').click()"
            ondragover="event.preventDefault(); this.classList.add('bg-emerald-100/50')"
            ondragleave="this.classList.remove('bg-emerald-100/50')"
            ondrop="window.appHandleFileDrop(event)"
          >
            <input 
              type="file" 
              id="spreadsheet-file-input" 
              accept=".csv,.tsv,.txt" 
              class="hidden" 
              onchange="window.appHandleFileUpload(event)"
            />
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white shadow-md border border-emerald-200 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              📥
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800 mb-1">
              Click to Upload or Drag & Drop Your Spreadsheet Here
            </h3>
            <p class="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-4">
              Supports CSV, TSV, or exported Excel text sheets. Your data never leaves your computer.
            </p>
            <div class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all">
              <span>Browse Spreadsheet File</span>
              <span>➔</span>
            </div>
          </div>
        ` : `
          <!-- Active Inspection Dashboard -->
          <div>
            <!-- File Info & Health Ribbon -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80 mb-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center text-lg shadow-sm">
                  📊
                </div>
                <div>
                  <div class="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <span>${escapeHtml(data.fileName)}</span>
                    <span class="text-xs font-semibold text-slate-500">(${data.rows.length} rows, ${data.headers.length} columns)</span>
                  </div>
                  <div class="text-xs text-slate-500 mt-0.5">
                    Analyzed instantly with client-side AI inspector
                  </div>
                </div>
              </div>

              <!-- Health Score Pill -->
              <div class="flex items-center gap-3">
                <div class="text-right">
                  <div class="text-[10px] uppercase font-bold text-slate-400">Data Health Score</div>
                  <div class="text-lg font-black ${audit.healthScore >= 80 ? 'text-emerald-600' : audit.healthScore >= 60 ? 'text-amber-600' : 'text-rose-600'}">
                    ${audit.healthScore} / 100
                  </div>
                </div>
                <button 
                  onclick="window.appClearUploadedFile()"
                  class="text-xs text-slate-500 hover:text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-bold shadow-sm transition-colors"
                >
                  ✕ Close / Upload New
                </button>
              </div>
            </div>

            <!-- 2-Column Layout: Issues Report (Left) + AI Chatbot (Right) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
              
              <!-- Left Column: Detected Issues & Exact Formulas (7 cols) -->
              <div class="lg:col-span-7 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span>🚨 Diagnostic Report (${audit.issues.length} Issues Found)</span>
                  </h3>
                  <span class="text-xs text-slate-500 font-medium">Click copy on any formula below</span>
                </div>

                ${audit.issues.length === 0 ? `
                  <div class="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                    <span class="text-3xl block mb-2">🎉</span>
                    <h4 class="font-bold text-emerald-900 text-sm">Clean Spreadsheet! No Critical Errors Found</h4>
                    <p class="text-xs text-emerald-700 mt-1">Aapka data structure clean hai — koi blank cells, ghost spaces ya duplicate rows nahi mile.</p>
                  </div>
                ` : audit.issues.map((iss, iIdx) => `
                  <div class="bg-white rounded-xl border border-slate-200 hover:border-slate-300 p-4 shadow-sm transition-all">
                    <div class="flex items-start justify-between gap-2 mb-2">
                      <div class="flex items-center gap-2">
                        <span class="text-xs font-bold px-2 py-0.5 rounded-full ${
                          iss.severity === 'high' ? 'bg-rose-100 text-rose-800 border border-rose-200' : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }">
                          ${iss.severity === 'high' ? 'CRITICAL' : 'WARNING'}
                        </span>
                        <h4 class="font-bold text-slate-900 text-sm">${escapeHtml(iss.title)}</h4>
                      </div>
                    </div>

                    <p class="text-xs text-slate-600 mb-3">${escapeHtml(iss.description)}</p>

                    <!-- Exact Formula Box -->
                    <div class="bg-slate-900 rounded-lg p-3 text-white mb-2.5">
                      <div class="flex items-center justify-between text-[10px] text-slate-400 mb-1 font-mono uppercase">
                        <span>Recommended Excel Formula</span>
                        <button 
                          onclick="window.appCopyInspectorFormula('${escapeHtml(iss.solutionFormula)}', 'fix-btn-${iIdx}')"
                          id="fix-btn-${iIdx}"
                          class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2 py-0.5 rounded text-[10px] transition-colors"
                        >
                          📋 Copy Formula
                        </button>
                      </div>
                      <div class="font-mono text-xs sm:text-sm text-emerald-400 font-bold select-all break-all">
                        ${escapeHtml(iss.solutionFormula)}
                      </div>
                    </div>

                    <!-- Shortcut & Steps -->
                    <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 text-xs">
                      <div class="flex items-center gap-1.5 font-bold text-slate-800 mb-0.5">
                        <span>⚡ Keyboard Shortcut:</span>
                        <code class="bg-white px-2 py-0.5 rounded border border-slate-200 text-emerald-800 font-mono text-[11px]">${escapeHtml(iss.shortcut)}</code>
                      </div>
                      <p class="text-slate-600 text-[11px] mt-1"><strong>Teacher Step: </strong>${escapeHtml(iss.steps)}</p>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Right Column: Interactive AI Assistant Chatbot (5 cols) -->
              <div class="lg:col-span-5 flex flex-col h-[520px] bg-slate-50 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                
                <!-- Chatbot Header -->
                <div class="bg-slate-900 text-white p-3.5 flex items-center justify-between shrink-0">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-sm shadow">
                      🤖
                    </div>
                    <div>
                      <h4 class="font-bold text-xs sm:text-sm leading-tight">Excel AI Sheet Assistant</h4>
                      <span class="text-[10px] text-emerald-400 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Ready to answer questions about your data
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Chat Messages Scroll Area -->
                <div id="inspector-chat-container" class="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs">
                  ${state.chatMessages.map(msg => `
                    <div class="flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
                      <div class="max-w-[85%] p-3 ${msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}">
                        <div class="leading-relaxed whitespace-pre-line">${formatMarkdown(msg.text)}</div>
                        <div class="text-[9px] mt-1.5 opacity-60 text-right">${msg.time}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <!-- Suggested Quick Prompts -->
                <div class="p-2 border-t border-slate-200 bg-white/70 overflow-x-auto flex gap-1.5 shrink-0 no-scrollbar">
                  <button onclick="window.appSendChatMessage('How do I fix all blank cells?')" class="text-[10px] bg-white border border-slate-200 hover:border-emerald-500 text-slate-700 px-2 py-1 rounded-md shrink-0 font-medium transition-colors">
                    ❓ Fix Blanks
                  </button>
                  <button onclick="window.appSendChatMessage('Which rows have duplicates?')" class="text-[10px] bg-white border border-slate-200 hover:border-emerald-500 text-slate-700 px-2 py-1 rounded-md shrink-0 font-medium transition-colors">
                    🔍 Find Duplicates
                  </button>
                  <button onclick="window.appSendChatMessage('Calculate total and average for numeric columns')" class="text-[10px] bg-white border border-slate-200 hover:border-emerald-500 text-slate-700 px-2 py-1 rounded-md shrink-0 font-medium transition-colors">
                    🧮 Calculate Totals
                  </button>
                  <button onclick="window.appSendChatMessage('Give me formula to clean text spaces')" class="text-[10px] bg-white border border-slate-200 hover:border-emerald-500 text-slate-700 px-2 py-1 rounded-md shrink-0 font-medium transition-colors">
                    🧹 Clean Spaces
                  </button>
                </div>

                <!-- Chat Input Box -->
                <div class="p-2.5 bg-white border-t border-slate-200 flex items-center gap-1.5 shrink-0">
                  <input 
                    id="inspector-chat-input"
                    type="text" 
                    placeholder="Ask AI e.g. 'How to fix salary column?', 'Calculate sum'..."
                    class="flex-1 bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                    onkeydown="if(event.key==='Enter') window.appSendChatMessage()"
                  />
                  <button 
                    onclick="window.appSendChatMessage()"
                    class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 shadow-sm shrink-0"
                  >
                    <span>Send</span>
                    <span>➔</span>
                  </button>
                </div>

              </div>

            </div>

            <!-- Live Table Preview with Highlighted Errors -->
            <div class="mt-6 border-t border-slate-100 pt-5">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div class="flex items-center gap-2">
                  <h4 class="font-bold text-slate-900 text-sm">📊 Live Spreadsheet Preview with Problem Highlighting</h4>
                  <span class="text-xs text-slate-500">Showing first ${Math.min(data.rows.length, 12)} rows</span>
                </div>

                <!-- Legend & Filter Toggle -->
                <div class="flex items-center gap-2 text-[11px] flex-wrap">
                  <span class="flex items-center gap-1">
                    <span class="w-2.5 h-2.5 rounded-sm bg-rose-200 border border-rose-400"></span>
                    <span>Text-Number</span>
                  </span>
                  <span class="flex items-center gap-1">
                    <span class="w-2.5 h-2.5 rounded-sm bg-amber-200 border border-amber-400"></span>
                    <span>Blank</span>
                  </span>
                  <span class="flex items-center gap-1">
                    <span class="w-2.5 h-2.5 rounded-sm bg-purple-200 border border-purple-400"></span>
                    <span>Duplicate</span>
                  </span>
                  <button 
                    onclick="window.appToggleErrorRowsOnly()"
                    class="ml-2 text-xs font-bold px-2 py-0.5 rounded border transition-colors ${
                      state.chatFilterErrorsOnly ? 'bg-rose-100 text-rose-800 border-rose-300' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }"
                  >
                    ${state.chatFilterErrorsOnly ? 'Showing Errors Only' : 'Show All Rows'}
                  </button>
                </div>
              </div>

              <!-- Spreadsheet Table Container -->
              <div class="excel-grid-container max-h-72 overflow-auto">
                <table class="excel-table">
                  <thead>
                    <tr>
                      <th class="row-header">#</th>
                      ${data.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${data.rows.slice(0, 20).map((row, rIdx) => {
                      const isDup = audit.duplicateRowIndices.includes(rIdx);
                      const hasBlank = row.some(c => !c || c.toString().trim() === '');
                      const hasTextNum = row.some((c, cIdx) => {
                        const colLower = data.headers[cIdx].toLowerCase();
                        const isNum = colLower.includes('salary') || colLower.includes('price') || colLower.includes('amount') || colLower.includes('qty');
                        return isNum && isNaN(Number(c)) && !isNaN(Number(c.replace(/[\$₹,\s]/g, '')));
                      });

                      if (state.chatFilterErrorsOnly && !isDup && !hasBlank && !hasTextNum) {
                        return '';
                      }

                      return `
                        <tr class="${isDup ? 'cell-duplicate-highlight' : ''}">
                          <td class="row-header font-bold">${rIdx + 2}</td>
                          ${row.map((cell, cIdx) => {
                            const val = cell !== undefined ? cell.toString() : '';
                            const isBlank = !val || val.trim() === '';
                            const colLower = data.headers[cIdx].toLowerCase();
                            const isNumCol = colLower.includes('salary') || colLower.includes('price') || colLower.includes('amount') || colLower.includes('qty');
                            const isTextNum = isNumCol && isNaN(Number(val)) && !isNaN(Number(val.replace(/[\$₹,\s]/g, '')));

                            let cellClass = '';
                            if (isTextNum) cellClass = 'cell-error-highlight';
                            else if (isBlank) cellClass = 'cell-warning-highlight';
                            else if (isDup) cellClass = 'cell-duplicate-highlight';

                            return `
                              <td class="${cellClass}" title="${isTextNum ? 'Number stored as text' : isBlank ? 'Empty blank cell' : isDup ? 'Duplicate record' : ''}">
                                ${isBlank ? '<span class="text-amber-500 italic text-[10px]">(blank)</span>' : escapeHtml(val)}
                              </td>
                            `;
                          }).join('')}
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        `}

      </div>
    `;
  }

  // --- File Upload & Chat Handlers ---
  window.appHandleFileUpload = function (e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (evt) {
      try {
        const text = evt.target.result;
        const parsed = parseCSVText(text);
        if (parsed.headers.length === 0) {
          showToast('Could not read table headers from this file.', 'error');
          return;
        }

        state.uploadedFileData = {
          fileName: file.name,
          headers: parsed.headers,
          rows: parsed.rows,
          rawCsv: text
        };
        state.fileAuditReport = runSpreadsheetAudit(parsed.headers, parsed.rows);
        state.chatFilterErrorsOnly = false;
        
        state.chatMessages = [
          {
            sender: 'bot',
            text: `👋 Namaste! Maine aapki spreadsheet **"${file.name}"** scan kar li hai.\n\n📊 **Total Rows:** ${parsed.rows.length} | **Columns:** ${parsed.headers.length}\n🎯 **Data Health Score:** ${state.fileAuditReport.healthScore}/100\n\nMaine **${state.fileAuditReport.issues.length} main problems** detect kiye hain. Diagnostic report me solution formulas dekhein ya mujhse koi bhi sawal puchein!`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ];

        renderCurrentTab();
        showToast(`Spreadsheet "${file.name}" analyzed successfully!`, 'success');
      } catch (err) {
        showToast('Error parsing file: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
  };

  window.appHandleFileDrop = function (e) {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const fakeEvent = { target: { files: e.dataTransfer.files } };
      window.appHandleFileUpload(fakeEvent);
    }
  };

  window.appLoadSampleSpreadsheet = function (sampleKey) {
    let fileName = '';
    let rawCsv = '';

    if (sampleKey === 'payroll') {
      fileName = 'Monthly_Payroll_March2024.csv';
      rawCsv = `Emp ID,Employee Name,Department,Basic Salary,PF (12%),Net Payable,Status
EMP101,Rahul Sharma ,Sales,35000,4200,30800,Active
EMP102,Priya Verma,Accounts, 42000 ,5040,36960,Active
EMP103,Amit Patel ,IT,,0,0,On Leave
EMP104,Sneha Rao,HR,28000,3360,24640,Active
EMP102,Priya Verma,Accounts,42000,5040,36960,Active
EMP105,Vikram Singh ,Marketing,-15000,0,-15000,Pending
EMP106,Anjali Gupta,Sales,32000,3840,28160,Active
EMP107,Rohan Joshi,Accounts,,0,0,Active`;
    } else {
      fileName = 'Q1_Branch_Sales_Register.csv';
      rawCsv = `Invoice No,Customer Name,City,Product,Quantity,Unit Price,Total Amount
INV-201,Rajesh Kumar ,Mumbai,Laptop,2,45000,90000
INV-202,Pooja Mehta,Delhi,Mouse, 15 ,500,7500
INV-203,Karan Shah,Pune,Keyboard,,1200,0
INV-204,Deepak Verma ,Mumbai,Monitor,-1,8500,-8500
INV-201,Rajesh Kumar ,Mumbai,Laptop,2,45000,90000
INV-205,Neha Sharma,Delhi,Printer,3,14000,42000
INV-206, ,Bangalore,Desk,1,6500,6500`;
    }

    const parsed = parseCSVText(rawCsv);
    state.uploadedFileData = {
      fileName,
      headers: parsed.headers,
      rows: parsed.rows,
      rawCsv
    };
    state.fileAuditReport = runSpreadsheetAudit(parsed.headers, parsed.rows);
    state.chatFilterErrorsOnly = false;

    state.chatMessages = [
      {
        sender: 'bot',
        text: `👋 Namaste! Maine sample spreadsheet **"${fileName}"** load kar li hai.\n\n📊 **Rows:** ${parsed.rows.length} | **Columns:** ${parsed.headers.length}\n🎯 **Data Health Score:** ${state.fileAuditReport.healthScore}/100\n\nMaine **${state.fileAuditReport.issues.length} main problems** dhoonde hain (Blanks, Duplicate Rows, Ghost Spaces, Text Numbers). Inhe kaise solve karna hai, niche card me dekhein ya mujhse chat me puchein!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];

    renderCurrentTab();
    showToast(`Loaded ${fileName} for testing!`, 'success');
  };

  window.appClearUploadedFile = function () {
    state.uploadedFileData = null;
    state.fileAuditReport = null;
    state.chatMessages = [];
    state.chatFilterErrorsOnly = false;
    renderCurrentTab();
    showToast('Spreadsheet cleared.', 'info');
  };

  window.appToggleErrorRowsOnly = function () {
    state.chatFilterErrorsOnly = !state.chatFilterErrorsOnly;
    renderCurrentTab();
  };

  window.appCopyInspectorFormula = function (formulaText, btnId) {
    if (navigator.clipboard && formulaText) {
      navigator.clipboard.writeText(formulaText).then(() => {
        const btn = document.getElementById(btnId);
        if (btn) {
          const old = btn.textContent;
          btn.textContent = '✓ Copied!';
          btn.classList.add('bg-green-600');
          setTimeout(() => {
            btn.textContent = old;
            btn.classList.remove('bg-green-600');
          }, 2000);
        }
        showToast('Formula copied to clipboard!', 'success');
      });
    }
  };

  window.appSendChatMessage = function (presetText) {
    const input = document.getElementById('inspector-chat-input');
    const text = presetText || (input ? input.value.trim() : '');
    if (!text) return;
    if (input && !presetText) input.value = '';

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    state.chatMessages.push({ sender: 'user', text, time });

    // Generate Bot Response
    const botReply = generateBotResponse(text, state.fileAuditReport, state.uploadedFileData);
    setTimeout(() => {
      state.chatMessages.push({
        sender: 'bot',
        text: botReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      renderCurrentTab();

      // Scroll chat to bottom
      const chatBox = document.getElementById('inspector-chat-container');
      if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
    }, 300);

    renderCurrentTab();
  };

  function generateBotResponse(query, audit, fileData) {
    if (!fileData || !audit) {
      return "Kripya pehle apni file upload karein ya upar se 'Sample Payroll Sheet' load karein.";
    }

    const q = query.toLowerCase();

    // 1. Blank Cells
    if (q.includes('blank') || q.includes('empty') || q.includes('khali') || q.includes('missing')) {
      if (audit.blankCells.length === 0) {
        return "✅ Aapki sheet me koi bhi blank cell nahi mila! Sabhi cells properly filled hain.";
      }
      const blankCols = [...new Set(audit.blankCells.map(b => fileData.headers[b.c]))];
      return `⚠️ **Blank Cells Analysis:**\nAapki sheet me total **${audit.blankCells.length} blank cells** hain. Ye mainly columns: **${blankCols.join(', ')}** me hain.\n\n💡 **Ise solve karne ke 2 tareeqe hain:**\n1. **Formula Se:** \`=IF(ISBLANK(A2), 0, A2)\`\n2. **Super Fast Keyboard Shortcut:**\n   - Poora column select karein.\n   - **Ctrl + G** dabayein -> **Special** -> **Blanks** select karein.\n   - \`0\` ya \`"-"\` type karke **Ctrl + Enter** dabayein. Sabhi khali cells 1 second me fill ho jayenge!`;
    }

    // 2. Duplicates
    if (q.includes('duplicate') || q.includes('repeat') || q.includes('nakal')) {
      if (audit.duplicateRowIndices.length === 0) {
        return "✅ Aapki sheet me koi duplicate rows nahi hain! Har record unique hai.";
      }
      return `🚨 **Duplicate Rows Found:**\nTotal **${audit.duplicateRowIndices.length} duplicate rows** mili hain (Rows: ${audit.duplicateRowIndices.map(r => r + 2).join(', ')}).\n\n💡 **Inhe hatane ka shortcut:**\n- Poori table me kisi bhi cell par cursor rakhein.\n- Keyboard se **Alt + A + M** (Data > Remove Duplicates) dabayein.\n- Column check karke **OK** press karein. Duplicates turant delete ho jayenge!`;
    }

    // 3. Text Numbers / Calculation
    if (q.includes('text number') || q.includes('sum') || q.includes('total') || q.includes('average') || q.includes('calculate')) {
      const numericSummaries = [];
      fileData.headers.forEach((colName, cIdx) => {
        const colLower = colName.toLowerCase();
        if (colLower.includes('salary') || colLower.includes('price') || colLower.includes('amount') || colLower.includes('qty') || colLower.includes('payable')) {
          const numbers = fileData.rows
            .map(r => parseFloat((r[cIdx] || '').toString().replace(/[\$₹,\s]/g, '')))
            .filter(n => !isNaN(n));
          if (numbers.length > 0) {
            const sum = Math.round(numbers.reduce((a, b) => a + b, 0));
            const avg = Math.round(sum / numbers.length);
            numericSummaries.push(`• **${colName}**: Total = ₹${sum.toLocaleString()} | Average = ₹${avg.toLocaleString()}`);
          }
        }
      });

      let reply = `📊 **Calculated Statistics for Your Sheet:**\n` + (numericSummaries.length > 0 ? numericSummaries.join('\n') : "Koi numeric column calculate nahi ho saka.");
      if (audit.textNumbers.length > 0) {
        reply += `\n\n⚠️ **Note:** Aapki sheet me **${audit.textNumbers.length} numbers text me convert** hain (space ya symbol ki wajah se). Isliye Excel me normal \`=SUM()\` galat result de sakta hai.\n\n💡 **Fix:** Formula lagayein: \`=VALUE(A2)\` ya Paste Special Multiply by 1 (**Alt + E + S + M**).`;
      }
      return reply;
    }

    // 4. Spaces / VLOOKUP
    if (q.includes('space') || q.includes('vlookup') || q.includes('clean') || q.includes('trim')) {
      if (audit.trailingSpaces.length === 0) {
        return "✅ Text me koi extra trailing ya leading spaces nahi hain. VLOOKUP bilkul sahi chalega!";
      }
      return `⚠️ **Ghost Spaces Detected (${audit.trailingSpaces.length} cells):**\nAapke text ke aage ya piche extra spaces lage hain (jaise: \`"Rahul Sharma "\`).\n\nIs wajah se jab aap \`=VLOOKUP()\` lagate hain toh wo **#N/A error** deta hai kyunki computer ke liye space bhi ek alag character hota hai.\n\n💡 **Fix:**\n- Formula: \`=TRIM(A2)\`\n- Or Flash Fill: Naye column me pehla naam theek type karein aur **Ctrl + E** dabayein!`;
    }

    // 5. Default General Guidance
    return `👨‍🏫 **Teacher AI Advice for "${fileData.fileName}":**\nAapki sheet me **${audit.issues.length} main problems** hain aur Health Score **${audit.healthScore}/100** hai.\n\n1. Pehle **Alt + A + M** se duplicate rows hatayein.\n2. Fir **=TRIM()** se names saaf karein taaki VLOOKUP break na ho.\n3. Blank cells ko **Ctrl + G > Blanks** se \`0\` se bhar dein.\n\nKoi specific column ka formula chahiye toh column ka naam likh kar puchein!`;
  }

  // ==========================================
  // AI VIDEO MASTERCLASSES GALLERY
  // ==========================================

  function renderVideosView(container) {
    const videos = typeof EXCEL_VIDEOS !== 'undefined' ? EXCEL_VIDEOS : [];
    const categories = ['All', 'AI Concept Visualizer', 'Office Accounting', 'Shortcuts Mastery', 'Formulas & Functions', 'Data Cleaning & Fixing'];

    const q = state.videosSearchQuery.toLowerCase().trim();
    const filtered = videos.filter(v => {
      const matchCat = state.videosSelectedCategory === 'All' || v.category === state.videosSelectedCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.teacherNote.toLowerCase().includes(q) ||
        v.creator.toLowerCase().includes(q) ||
        (v.formulasCovered && v.formulasCovered.some(f => f.toLowerCase().includes(q))) ||
        (v.shortcutsCovered && v.shortcutsCovered.some(s => s.toLowerCase().includes(q)))
      );
    });

    container.innerHTML = `
      <div class="w-full pb-[3px]">
        
        <!-- Hero Header -->
        <div class="bg-gradient-to-br from-indigo-800 via-indigo-900 to-purple-950 rounded-2xl p-6 sm:p-10 text-white shadow-xl mb-8 relative overflow-hidden">
          <div class="max-w-3xl relative z-10">
            <span class="inline-flex items-center gap-1.5 bg-indigo-500/40 border border-indigo-400/30 text-indigo-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              🎬 AI Visual Concept Explainers & Accounts Experts Classes
            </span>
            <h1 class="text-2xl sm:text-4xl font-black mb-3 tracking-tight">
              Excel Video Masterclasses — Formulas, Shortcuts & Office Accounting
            </h1>
            <p class="text-indigo-200 text-sm sm:text-base leading-relaxed mb-6">
              Concept animations aur official office accounting lessons. VLOOKUP cell locking se lekar salary sheets aur top shortcuts tak — sab kuch live video aur practical notes ke sath!
            </p>

            <!-- Video Search Bar -->
            <div class="relative bg-white rounded-xl shadow-lg p-1.5 flex items-center">
              <span class="pl-3 pr-2 text-slate-400 text-lg">🔍</span>
              <input 
                id="video-search-input"
                type="text" 
                placeholder="Search videos by formula, shortcut or topic (e.g. vlookup, salary, shortcuts, cell lock)..." 
                value="${escapeHtml(state.videosSearchQuery)}"
                class="w-full text-slate-900 text-sm sm:text-base py-2 px-1 outline-none font-medium"
                oninput="window.appUpdateVideoSearch(this.value)"
              />
              ${state.videosSearchQuery ? `
                <button 
                  onclick="window.appUpdateVideoSearch('')"
                  class="text-slate-400 hover:text-slate-600 px-2 py-1 text-sm font-bold"
                >✕</button>
              ` : ''}
            </div>

            <!-- Suggested Tag Pills -->
            <div class="flex flex-wrap gap-2 mt-4 text-xs">
              <span class="text-indigo-200 font-medium">Quick Topics:</span>
              ${['VLOOKUP', 'Salary Sheet', 'Cell Lock $', '25 Shortcuts', 'GST Invoice', 'XLOOKUP'].map(tag => `
                <button 
                  onclick="window.appUpdateVideoSearch('${tag}')"
                  class="bg-indigo-700/60 hover:bg-indigo-600/80 border border-indigo-500/40 text-indigo-100 px-2.5 py-1 rounded-full transition-colors"
                >
                  ${tag}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 mb-6">
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Categories:</span>
          ${categories.map(cat => {
            const isSel = state.videosSelectedCategory === cat;
            return `
              <button 
                onclick="window.appSetVideoCategory('${cat}')"
                class="text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  isSel 
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }"
              >
                ${cat}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Count -->
        <div class="flex justify-between items-center text-xs text-slate-500 mb-4 font-semibold">
          <span>Showing <strong>${filtered.length}</strong> masterclass videos</span>
          ${state.videosSearchQuery ? `<span>Filtered by "${escapeHtml(state.videosSearchQuery)}"</span>` : ''}
        </div>

        <!-- Video Cards Grid -->
        ${filtered.length === 0 ? `
          <div class="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <div class="text-4xl mb-3">🎬</div>
            <h3 class="text-lg font-bold text-slate-800 mb-1">No matching video masterclasses found</h3>
            <p class="text-sm text-slate-500 max-w-md mx-auto mb-4">Try searching for 'vlookup', 'salary', 'shortcuts', or 'gst'.</p>
            <button onclick="window.appUpdateVideoSearch(''); window.appSetVideoCategory('All');" class="bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-lg">
              Reset Filters
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filtered.map(vid => `
              <div class="premium-card overflow-hidden flex flex-col justify-between group">
                <div>
                  <!-- Video Thumbnail with Play Button Overlay -->
                  <div class="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden" onclick="window.appOpenVideoModal('${vid.id}')">
                    <img 
                      src="${vid.thumbnail}" 
                      alt="${escapeHtml(vid.title)}" 
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    
                    <!-- Play Button Icon -->
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        ▶
                      </div>
                    </div>

                    <!-- Duration & Category Badge -->
                    <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span class="text-[10px] font-extrabold uppercase bg-slate-900/90 text-white px-2 py-0.5 rounded shadow">
                        ${vid.badge}
                      </span>
                    </div>
                    <div class="absolute bottom-2.5 right-2.5 text-[11px] font-bold bg-black/80 text-white px-2 py-0.5 rounded">
                      ⏱️ ${vid.duration}
                    </div>
                  </div>

                  <!-- Content Area -->
                  <div class="p-5">
                    <div class="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                      <span class="font-bold text-indigo-700">${escapeHtml(vid.creator)}</span>
                      <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-semibold">${vid.level}</span>
                    </div>
                    <h3 class="font-extrabold text-slate-900 text-base mb-2 group-hover:text-indigo-600 transition-colors">
                      ${escapeHtml(vid.title)}
                    </h3>
                    <p class="text-xs text-slate-600 line-clamp-2 mb-3">
                      ${escapeHtml(vid.description)}
                    </p>

                    <!-- Teacher Tip Box -->
                    <div class="p-3 bg-emerald-50 border border-emerald-200/80 rounded-xl text-xs text-emerald-950 mb-3">
                      <div class="font-bold text-emerald-900 flex items-center gap-1 mb-1">
                        <span>👨‍🏫 Teacher Note:</span>
                      </div>
                      <p class="text-[11px] leading-relaxed">${escapeHtml(vid.teacherNote)}</p>
                    </div>

                    <!-- Formulas & Shortcuts Covered Chips -->
                    <div class="space-y-1.5 text-[11px]">
                      ${vid.formulasCovered ? `
                        <div class="flex items-center gap-1.5 flex-wrap">
                          <span class="text-slate-400 font-semibold">Formulas:</span>
                          ${vid.formulasCovered.map(f => `<code class="bg-indigo-50 text-indigo-800 px-1.5 py-0.5 rounded font-mono text-[10px] font-bold">${escapeHtml(f)}</code>`).join('')}
                        </div>
                      ` : ''}
                      ${vid.shortcutsCovered ? `
                        <div class="flex items-center gap-1.5 flex-wrap">
                          <span class="text-slate-400 font-semibold">Shortcuts:</span>
                          ${vid.shortcutsCovered.map(s => `<kbd class="bg-slate-100 border border-slate-300 text-slate-700 px-1.5 py-0.5 rounded text-[10px] font-bold shadow-xs">${escapeHtml(s)}</kbd>`).join('')}
                        </div>
                      ` : ''}
                    </div>
                  </div>
                </div>

                <!-- Footer Watch Button -->
                <div class="p-5 pt-0">
                  <button 
                    onclick="window.appOpenVideoModal('${vid.id}')"
                    class="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>▶ Watch Masterclass</span>
                    <span>(${vid.duration})</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}

      </div>
    `;
  }

  window.appUpdateVideoSearch = function (q) {
    state.videosSearchQuery = q;
    renderCurrentTab();
    const input = document.getElementById('video-search-input');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  };

  window.appSetVideoCategory = function (cat) {
    state.videosSelectedCategory = cat;
    renderCurrentTab();
  };

  window.appOpenVideoModal = function (vidId) {
    const videos = typeof EXCEL_VIDEOS !== 'undefined' ? EXCEL_VIDEOS : [];
    const vid = videos.find(v => v.id === vidId);
    if (!vid) return;

    const modal = document.getElementById('video-modal-container');
    const playerBox = document.getElementById('video-modal-player-box');
    const titleEl = document.getElementById('video-modal-title');
    const infoBox = document.getElementById('video-modal-info-box');

    if (titleEl) titleEl.textContent = `${vid.title} (${vid.creator})`;
    if (playerBox) {
      playerBox.innerHTML = `
        <iframe 
          class="w-full h-full" 
          src="https://www.youtube-nocookie.com/embed/${vid.youtubeId}?autoplay=1&rel=0" 
          title="${escapeHtml(vid.title)}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      `;
    }

    if (infoBox) {
      infoBox.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <span class="text-xs bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">${vid.category}</span>
              <span class="text-xs text-slate-500 font-semibold">• ⏱️ ${vid.duration}</span>
              <span class="text-xs text-emerald-700 font-semibold">• ${vid.level}</span>
            </div>
            <a 
              href="https://www.youtube.com/watch?v=${vid.youtubeId}" 
              target="_blank" 
              class="text-xs text-red-600 hover:text-red-700 font-bold flex items-center gap-1"
            >
              Open on YouTube ➔
            </a>
          </div>

          <p class="text-slate-700 text-xs sm:text-sm leading-relaxed">${escapeHtml(vid.description)}</p>

          <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
            <strong class="text-emerald-900 block mb-1">👨‍🏫 Teacher's Practice Guide:</strong>
            <p class="text-emerald-950">${escapeHtml(vid.teacherNote)}</p>
          </div>

          ${vid.keyTakeaways ? `
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <strong class="text-slate-800 text-xs block mb-1.5">🎯 Key Takeaways & Office Rules:</strong>
              <ul class="list-disc pl-4 space-y-1 text-slate-600 text-xs">
                ${vid.keyTakeaways.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
    }

    if (modal) {
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      try {
        history.pushState({ videoModalOpen: true }, '');
      } catch (e) {}
    }
  };

  window.appCloseVideoModal = function () {
    const modal = document.getElementById('video-modal-container');
    const playerBox = document.getElementById('video-modal-player-box');
    if (playerBox) playerBox.innerHTML = '';
    if (modal) modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  window.appHandleVideoModalBackdropClick = function (e) {
    if (e.target && e.target.id === 'video-modal-container') {
      window.appCloseVideoModal();
    }
  };

  // Keyboard Escape listener to reverse / return from video modal
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      const modal = document.getElementById('video-modal-container');
      if (modal && !modal.classList.contains('hidden')) {
        window.appCloseVideoModal();
      }
    }
  });

  // Browser Back button listener to reverse / return from video modal
  window.addEventListener('popstate', function () {
    const modal = document.getElementById('video-modal-container');
    if (modal && !modal.classList.contains('hidden')) {
      window.appCloseVideoModal();
    }
  });

  // ==========================================
  // 4. INTERACTIVE PRACTICE SANDBOX GRID
  // ==========================================
  function renderPracticeSandboxView(container) {
    container.innerHTML = `
      <div class="w-full pb-[3px]">
        
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Interactive Excel Playground</h2>
              <p class="text-sm text-gray-500">Test formulas live! Edit cells, enter calculations, and see results instantly.</p>
            </div>
            <div class="flex items-center gap-2">
              <button 
                onclick="window.appLoadSandboxPreset('sales')"
                class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-3 py-1.5 rounded-md transition-colors"
              >
                📊 Sales Preset
              </button>
              <button 
                onclick="window.appLoadSandboxPreset('salary')"
                class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-3 py-1.5 rounded-md transition-colors"
              >
                💼 Salary Sheet
              </button>
              <button 
                onclick="window.appResetSandbox()"
                class="text-xs text-red-600 hover:bg-red-50 font-semibold px-3 py-1.5 rounded-md border border-red-200 transition-colors"
              >
                Reset Grid
              </button>
            </div>
          </div>

          <!-- Formula Bar -->
          <div class="formula-bar-container mb-4">
            <div class="bg-gray-100 border border-gray-300 font-mono text-xs px-2.5 py-1 rounded text-gray-700 font-bold w-14 text-center" id="sandbox-cell-address">
              ${getCellAddress(state.activeSandboxCell.r, state.activeSandboxCell.c)}
            </div>
            <span class="fx-symbol">fx</span>
            <input 
              id="sandbox-formula-input"
              type="text" 
              class="w-full text-sm font-mono outline-none bg-transparent"
              placeholder="Enter formula e.g. =SUM(C2:C4) or text" 
              onkeydown="if(event.key==='Enter') window.appApplySandboxFormula()"
            />
            <button 
              onclick="window.appApplySandboxFormula()"
              class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded transition-colors"
            >
              Apply
            </button>
          </div>

          <!-- Interactive Grid Table -->
          <div class="excel-grid-container" id="sandbox-table-container">
            ${renderSandboxGridTableHTML()}
          </div>

          <!-- Grid Help Notes -->
          <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-gray-600">
            <div class="p-2.5 bg-gray-50 rounded border border-gray-200">
              <span class="font-bold text-gray-900 block mb-0.5">➕ Math & Sum</span>
              Type <code>=C2*D2</code>, <code>=SUM(C2:C4)</code>, <code>=AVERAGE(C2:C4)</code>
            </div>
            <div class="p-2.5 bg-gray-50 rounded border border-gray-200">
              <span class="font-bold text-gray-900 block mb-0.5">⚖️ Logic & Tests</span>
              Type <code>=IF(C2>50, "High", "Low")</code>
            </div>
            <div class="p-2.5 bg-gray-50 rounded border border-gray-200">
              <span class="font-bold text-gray-900 block mb-0.5">🔤 Text Functions</span>
              Type <code>=A2 & " - " & B2</code>, <code>=CONCAT(A2, B2)</code>
            </div>
          </div>

        </div>

      </div>
    `;

    updateSandboxFormulaInput();
  }

  function getCellAddress(r, c) {
    const colLetter = String.fromCharCode(65 + c);
    const rowNum = r + 1;
    return `${colLetter}${rowNum}`;
  }

  function renderSandboxGridTableHTML() {
    const grid = state.sandboxGrid;
    return `
      <table class="excel-table">
        <thead>
          <tr>
            <th class="row-header">#</th>
            ${grid.headers.map(h => `<th>${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${grid.rows.map((rowArr, rIdx) => `
            <tr>
              <td class="row-header font-mono font-medium">${rIdx + 1}</td>
              ${rowArr.map((rawVal, cIdx) => {
                const isSelected = state.activeSandboxCell.r === rIdx && state.activeSandboxCell.c === cIdx;
                const computedVal = evaluateFormulaInSandbox(rawVal, rIdx, cIdx);
                return `
                  <td 
                    tabindex="0"
                    onclick="window.appSelectSandboxCell(${rIdx}, ${cIdx})"
                    class="${isSelected ? 'active-cell' : 'hover:bg-gray-50'} font-mono text-xs cursor-cell"
                    title="Formula: ${escapeHtml(rawVal)}"
                  >
                    ${escapeHtml(computedVal)}
                  </td>
                `;
              }).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  function evaluateFormulaInSandbox(formulaStr, rIdx, cIdx) {
    if (!formulaStr || !formulaStr.toString().startsWith('=')) return formulaStr;
    const upper = formulaStr.slice(1).trim().toUpperCase();

    try {
      // 1. SUM(X1:X2)
      const sumMatch = upper.match(/^SUM\(([A-E][1-9]):([A-E][1-9])\)$/);
      if (sumMatch) {
        const vals = getRangeValues(sumMatch[1], sumMatch[2]);
        const sum = vals.reduce((a, b) => a + (parseFloat(b) || 0), 0);
        return isNaN(sum) ? '#VALUE!' : sum.toString();
      }

      // 2. AVERAGE(X1:X2)
      const avgMatch = upper.match(/^AVERAGE\(([A-E][1-9]):([A-E][1-9])\)$/);
      if (avgMatch) {
        const vals = getRangeValues(avgMatch[1], avgMatch[2]);
        const nums = vals.map(v => parseFloat(v)).filter(v => !isNaN(v));
        if (nums.length === 0) return '#DIV/0!';
        const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
        return (Math.round(avg * 100) / 100).toString();
      }

      // 3. MIN / MAX
      const minMatch = upper.match(/^MIN\(([A-E][1-9]):([A-E][1-9])\)$/);
      if (minMatch) {
        const nums = getRangeValues(minMatch[1], minMatch[2]).map(v => parseFloat(v)).filter(v => !isNaN(v));
        return nums.length ? Math.min(...nums).toString() : '0';
      }
      const maxMatch = upper.match(/^MAX\(([A-E][1-9]):([A-E][1-9])\)$/);
      if (maxMatch) {
        const nums = getRangeValues(maxMatch[1], maxMatch[2]).map(v => parseFloat(v)).filter(v => !isNaN(v));
        return nums.length ? Math.max(...nums).toString() : '0';
      }

      // 4. Arithmetic: =C2*D2 or =A1+B1
      const arithMatch = upper.match(/^([A-E][1-9])\s*([\+\-\*\/])\s*([A-E][1-9])$/);
      if (arithMatch) {
        const v1 = parseFloat(getCellValueByAddress(arithMatch[1])) || 0;
        const op = arithMatch[2];
        const v2 = parseFloat(getCellValueByAddress(arithMatch[3])) || 0;
        if (op === '+') return (v1 + v2).toString();
        if (op === '-') return (v1 - v2).toString();
        if (op === '*') return (v1 * v2).toString();
        if (op === '/') return v2 === 0 ? '#DIV/0!' : (Math.round((v1 / v2) * 100) / 100).toString();
      }

      // 5. IF: =IF(C2>50, "High", "Low")
      const ifMatch = upper.match(/^IF\(([A-E][1-9])\s*([><=]+)\s*(\d+),\s*"?([^",\)]*)"?,\s*"?([^",\)]*)"?\)$/);
      if (ifMatch) {
        const val = parseFloat(getCellValueByAddress(ifMatch[1])) || 0;
        const op = ifMatch[2];
        const compVal = parseFloat(ifMatch[3]);
        const trueText = ifMatch[4];
        const falseText = ifMatch[5];

        let res = false;
        if (op === '>') res = val > compVal;
        if (op === '>=') res = val >= compVal;
        if (op === '<') res = val < compVal;
        if (op === '<=') res = val <= compVal;
        if (op === '=') res = val === compVal;

        return res ? trueText : falseText;
      }

      return formulaStr;
    } catch (e) {
      return '#ERROR!';
    }
  }

  function getCellValueByAddress(addr) {
    const col = addr.charCodeAt(0) - 65;
    const row = parseInt(addr.slice(1), 10) - 1;
    if (state.sandboxGrid.rows[row] && state.sandboxGrid.rows[row][col] !== undefined) {
      const val = state.sandboxGrid.rows[row][col];
      return evaluateFormulaInSandbox(val, row, col);
    }
    return '';
  }

  function getRangeValues(startAddr, endAddr) {
    const startCol = startAddr.charCodeAt(0) - 65;
    const startRow = parseInt(startAddr.slice(1), 10) - 1;
    const endCol = endAddr.charCodeAt(0) - 65;
    const endRow = parseInt(endAddr.slice(1), 10) - 1;

    const values = [];
    for (let r = Math.min(startRow, endRow); r <= Math.max(startRow, endRow); r++) {
      for (let c = Math.min(startCol, endCol); c <= Math.max(startCol, endCol); c++) {
        values.push(getCellValueByAddress(String.fromCharCode(65 + c) + (r + 1)));
      }
    }
    return values;
  }

  window.appSelectSandboxCell = function (r, c) {
    state.activeSandboxCell = { r, c };
    const container = document.getElementById('sandbox-table-container');
    if (container) container.innerHTML = renderSandboxGridTableHTML();
    const addrEl = document.getElementById('sandbox-cell-address');
    if (addrEl) addrEl.textContent = getCellAddress(r, c);
    updateSandboxFormulaInput();
  };

  function updateSandboxFormulaInput() {
    const input = document.getElementById('sandbox-formula-input');
    if (input) {
      const curVal = state.sandboxGrid.rows[state.activeSandboxCell.r][state.activeSandboxCell.c] || '';
      input.value = curVal;
    }
  }

  window.appApplySandboxFormula = function () {
    const input = document.getElementById('sandbox-formula-input');
    if (!input) return;
    const newVal = input.value;
    state.sandboxGrid.rows[state.activeSandboxCell.r][state.activeSandboxCell.c] = newVal;
    const container = document.getElementById('sandbox-table-container');
    if (container) container.innerHTML = renderSandboxGridTableHTML();
    showToast('Cell updated!', 'info');
  };

  window.appLoadSandboxPreset = function (type) {
    if (type === 'sales') {
      state.sandboxGrid = {
        headers: ['Product', 'Category', 'Price', 'Qty', 'Total'],
        rows: [
          ['Laptop', 'Tech', '1200', '3', '=C2*D2'],
          ['Mouse', 'Tech', '25', '10', '=C3*D3'],
          ['Desk', 'Furniture', '350', '2', '=C4*D4'],
          ['Total Revenue', '', '', '', '=SUM(E2:E4)']
        ]
      };
    } else if (type === 'salary') {
      state.sandboxGrid = {
        headers: ['Employee', 'Basic', 'HRA (40%)', 'PF (12%)', 'Net Salary'],
        rows: [
          ['Rahul Sharma', '30000', '=B2*0.4', '=B2*0.12', '=B2+C2-D2'],
          ['Priya Verma', '45000', '=B3*0.4', '=B3*0.12', '=B3+C3-D3'],
          ['Amit Patel', '25000', '=B4*0.4', '=B4*0.12', '=B4+C4-D4'],
          ['Total Payout', '', '', '', '=SUM(E2:E4)']
        ]
      };
    }
    state.activeSandboxCell = { r: 1, c: 4 };
    renderCurrentTab();
    showToast(`Loaded ${type} preset data!`, 'success');
  };

  window.appResetSandbox = function () {
    state.sandboxGrid = {
      headers: ['A', 'B', 'C', 'D', 'E'],
      rows: [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
      ]
    };
    renderCurrentTab();
  };

  // ==========================================
  // 5. PROGRESS & DASHBOARD
  // ==========================================
  function renderDashboardView(container) {
    const totalModules = CURRICULUM.reduce((acc, lvl) => acc + lvl.modules.length, 0);
    const completedCount = state.completedModules.size;
    const progressPercent = Math.round((completedCount / totalModules) * 100);
    const rankInfo = getRank(state.xp);

    const bookmarkedList = PROBLEM_SOLUTIONS.filter(s => state.bookmarks.has(s.id));

    let nextUnfinishedModule = null;
    for (const lvl of CURRICULUM) {
      for (const mod of lvl.modules) {
        if (!state.completedModules.has(mod.id)) {
          nextUnfinishedModule = mod;
          break;
        }
      }
      if (nextUnfinishedModule) break;
    }

    container.innerHTML = `
      <div class="w-full pb-[3px]">
        
        <!-- Welcome & Resume Banner (Editorial Warm Gray & Sage) -->
        <div class="bg-gradient-to-r from-[#1B1A18] via-[#2A2825] to-[#1E1D1B] rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-8 border border-[#383530]">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span class="text-xs uppercase tracking-wider bg-sage-900/80 border border-sage-500/40 text-sage-300 font-semibold px-3 py-1 rounded-full font-mono">
                Your Learning Profile & Analytics
              </span>
              <h1 class="text-2xl sm:text-3xl font-black mt-3 text-warmgray-50 tracking-tight">Welcome Back, Excel Explorer!</h1>
              <p class="text-warmgray-400 text-xs sm:text-sm mt-1">Aapka har lesson, quiz score aur progress auto-save rehta hai.</p>
            </div>
            ${nextUnfinishedModule ? `
              <button 
                onclick="window.appResumeLearning('${nextUnfinishedModule.id}')"
                class="bg-sage-600 hover:bg-sage-500 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all flex items-center gap-2 shrink-0 hover:shadow-lg"
              >
                <span>▶ Continue Learning</span>
                <span class="text-xs bg-sage-800 text-sage-100 px-2 py-0.5 rounded font-mono">${nextUnfinishedModule.title.split('.')[0]}</span>
              </button>
            ` : `
              <div class="bg-sage-800/80 text-white px-4 py-2.5 rounded-xl text-xs font-bold border border-sage-500/50">
                🏆 All 30 Curriculum Lessons Completed!
              </div>
            `}
          </div>
        </div>

        <!-- 3 Highlight Metric Cards (Exclusively displaying XP, Streak, and Completion) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          
          <!-- XP Card (Sage Green Accent) -->
          <div class="bg-white rounded-xl shadow-xs border border-[#DBD5C9] p-6 flex items-center gap-4">
            <div class="w-13 h-13 rounded-2xl bg-sage-100 text-sage-700 flex items-center justify-center text-2xl font-black shrink-0 border border-sage-200">
              ⭐
            </div>
            <div>
              <div class="text-[11px] text-warmgray-500 font-mono uppercase tracking-wider font-bold">Total Experience</div>
              <div id="dashboard-xp-counter" class="text-2xl font-black text-warmgray-900">${state.xp} XP</div>
              <div id="dashboard-rank-badge" class="text-xs text-sage-700 font-medium mt-0.5">${rankInfo.title} (${rankInfo.badge})</div>
            </div>
          </div>

          <!-- Streak Card (Soft Blue Accent) -->
          <div class="bg-white rounded-xl shadow-xs border border-[#DBD5C9] p-6 flex items-center gap-4">
            <div class="w-13 h-13 rounded-2xl bg-softblue-100 text-softblue-700 flex items-center justify-center text-2xl font-black shrink-0 border border-softblue-200">
              🔥
            </div>
            <div>
              <div class="text-[11px] text-warmgray-500 font-mono uppercase tracking-wider font-bold">Active Daily Streak</div>
              <div id="dashboard-streak-counter" class="text-2xl font-black text-warmgray-900">${state.streak.count} Day${state.streak.count === 1 ? '' : 's'}</div>
              <div class="text-xs text-softblue-700 font-medium mt-0.5">Visit daily to retain streak!</div>
            </div>
          </div>

          <!-- Completion Card (Warm Gray Accent) -->
          <div class="bg-white rounded-xl shadow-xs border border-[#DBD5C9] p-6 flex items-center gap-4">
            <div class="w-13 h-13 rounded-2xl bg-warmgray-100 text-warmgray-700 flex items-center justify-center text-2xl font-black shrink-0 border border-warmgray-200">
              🎯
            </div>
            <div>
              <div class="text-[11px] text-warmgray-500 font-mono uppercase tracking-wider font-bold">Curriculum Lessons</div>
              <div class="text-2xl font-black text-warmgray-900">${completedCount} / ${totalModules}</div>
              <div class="text-xs text-sage-700 font-semibold mt-0.5">${progressPercent}% Completed</div>
            </div>
          </div>

        </div>

        <!-- Level Breakdown Progression -->
        <div class="bg-white rounded-xl shadow-xs border border-[#DBD5C9] p-6 mb-8">
          <h3 class="text-base sm:text-lg font-bold text-warmgray-900 mb-4 flex items-center gap-2">
            <span>📚 Level-by-Level Syllabus Progression</span>
          </h3>
          <div class="space-y-4">
            ${CURRICULUM.map(lvl => {
              const done = lvl.modules.filter(m => state.completedModules.has(m.id)).length;
              const total = lvl.modules.length;
              const pct = Math.round((done / total) * 100);
              return `
                <div class="p-4 bg-[#FAF8F5] rounded-lg border border-[#EAE5DC]">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-bold bg-sage-100 text-sage-900 px-2 py-0.5 rounded border border-sage-200 font-mono">Level ${lvl.levelNumber}</span>
                      <span class="font-bold text-warmgray-900 text-sm">${lvl.title.split(':')[1] || lvl.title}</span>
                    </div>
                    <span class="text-xs font-semibold text-warmgray-600">${done} of ${total} Lessons (${pct}%)</span>
                  </div>
                  <div class="w-full bg-[#EAE5DC] rounded-full h-2 overflow-hidden">
                    <div class="bg-sage-600 h-2 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Saved Bookmarks from Problem Solver -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h3 class="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <span>⭐ Bookmarked Problem Formulas (${bookmarkedList.length})</span>
          </h3>
          <p class="text-xs text-gray-500 mb-4">Quick access to solutions you saved from the Problem Solver</p>

          ${bookmarkedList.length === 0 ? `
            <div class="text-center py-6 text-gray-400 text-xs bg-gray-50 rounded-lg border border-dashed border-gray-300">
              No formulas bookmarked yet. Click '☆ Save' on any solution card in the Problem Solver to pin it here!
            </div>
          ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${bookmarkedList.map(item => `
                <div class="p-3 bg-gray-50 rounded-lg border border-gray-200 flex flex-col justify-between">
                  <div>
                    <div class="flex justify-between items-start mb-1">
                      <span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">${item.category}</span>
                      <button onclick="window.appToggleBookmark('${item.id}')" class="text-xs text-red-500 hover:text-red-700">Remove</button>
                    </div>
                    <div class="font-bold text-gray-900 text-sm mb-1">${item.title}</div>
                    <div class="font-mono text-xs text-emerald-800 bg-white p-1.5 rounded border border-gray-200 mb-2 truncate">${escapeHtml(item.defaultFormula)}</div>
                  </div>
                  <button 
                    onclick="window.appJumpToProblem('${item.title}')"
                    class="text-xs font-semibold text-emerald-700 hover:text-emerald-800 text-left"
                  >
                    View Breakdown ➔
                  </button>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Data Management / Export & Reset -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 text-gray-500">
            💾 Data & Backup Settings
          </h3>
          <p class="text-xs text-gray-600 mb-4">
            Aapki progress hamesha is browser me rehti hai. Doosre computer me transfer karne ke liye JSON export download kar sakte hain.
          </p>
          <div class="flex flex-wrap items-center gap-3">
            <button 
              onclick="window.appExportProgress()"
              class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>📥 Export Progress (JSON)</span>
            </button>
            <label class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5">
              <span>📤 Import Progress</span>
              <input type="file" accept=".json" class="hidden" onchange="window.appImportProgress(event)" />
            </label>
            <button 
              onclick="window.appConfirmResetProgress()"
              class="text-xs text-red-600 hover:bg-red-50 font-bold px-4 py-2 rounded-lg border border-red-200 transition-colors ml-auto"
            >
              Reset All Progress
            </button>
          </div>
        </div>

      </div>
    `;
  }

  window.appResumeLearning = function (modId) {
    state.activeTab = 'learn';
    state.currentModuleId = modId;
    localStorage.setItem(STORAGE_KEYS.LAST_MODULE, modId);
    updateNavActiveState();
    renderCurrentTab();
  };

  window.appJumpToProblem = function (title) {
    state.activeTab = 'solver';
    state.solverSearchQuery = title;
    updateNavActiveState();
    renderCurrentTab();
  };

  window.appExportProgress = function () {
    const data = {
      completedModules: Array.from(state.completedModules),
      xp: state.xp,
      streak: state.streak,
      bookmarks: Array.from(state.bookmarks),
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `excel-mastery-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Progress backup downloaded successfully!', 'success');
  };

  window.appImportProgress = function (e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (evt) {
      try {
        const imported = JSON.parse(evt.target.result);
        if (Array.isArray(imported.completedModules)) {
          state.completedModules = new Set(imported.completedModules);
          localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(imported.completedModules));
        }
        if (typeof imported.xp === 'number') {
          state.xp = imported.xp;
          localStorage.setItem(STORAGE_KEYS.XP, state.xp.toString());
        }
        if (imported.streak) {
          state.streak = imported.streak;
          localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(state.streak));
        }
        if (Array.isArray(imported.bookmarks)) {
          state.bookmarks = new Set(imported.bookmarks);
          localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(imported.bookmarks));
        }
        renderUserStats();
        renderCurrentTab();
        showToast('Progress restored successfully!', 'success');
      } catch (err) {
        showToast('Invalid backup file format.', 'error');
      }
    };
    reader.readAsText(file);
  };

  window.appConfirmResetProgress = function () {
    if (confirm('Are you sure you want to reset all your progress, completed lessons, and XP? This action cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEYS.COMPLETED);
      localStorage.removeItem(STORAGE_KEYS.XP);
      localStorage.removeItem(STORAGE_KEYS.STREAK);
      localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
      localStorage.removeItem(STORAGE_KEYS.LAST_MODULE);
      state.completedModules.clear();
      state.xp = 0;
      state.streak = { count: 1, lastDate: new Date().toISOString().slice(0, 10) };
      state.bookmarks.clear();
      renderUserStats();
      renderCurrentTab();
      showToast('All progress has been reset.', 'info');
    }
  };

  // ==========================================
  // FEEDBACK & ANIMATIONS
  // ==========================================
  function showToast(message, type = 'info') {
    let toastContainer = document.getElementById('toast-notifications-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-notifications-container';
      toastContainer.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    const colorClasses = type === 'success' 
      ? 'bg-emerald-800 text-white border-emerald-600' 
      : type === 'error' 
        ? 'bg-red-800 text-white border-red-600' 
        : 'bg-gray-800 text-white border-gray-700';

    toast.className = `${colorClasses} border px-4 py-3 rounded-lg shadow-xl text-xs font-semibold flex items-center gap-2 transform translate-y-2 opacity-0 transition-all duration-300 pointer-events-auto`;
    toast.textContent = message;

    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  function triggerCelebration() {
    try {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (e) {}
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

})();
