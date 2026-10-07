// ============================================
// FITATHOME — App Logic
// ============================================

// ---- DEFAULT DATA STRUCTURE ----
function defaultData() {
  return {
    profile: { name: '', age: '', level: 'beginner', goal: 'Get Fitter', duration: '30', equipment: 'none' },
    stats: { totalWorkouts: 0, totalMinutes: 0, totalCalories: 0, streak: 0, longestStreak: 0, bestCalories: 0, bestDuration: 0, bestWeek: 0 },
    history: [],
    weekActivity: [false, false, false, false, false, false, false],
    weekMinutes: [0, 0, 0, 0, 0, 0, 0],
    weekCalories: [0, 0, 0, 0, 0, 0, 0],
    planProgress: {},
    achievements: [
      { id: 'first', icon: '🏅', name: 'First Workout', description: 'Complete your first workout', unlocked: false },
      { id: 'streak3', icon: '🔥', name: '3-Day Streak', description: 'Work out 3 days in a row', unlocked: false },
      { id: 'streak7', icon: '⚡', name: '7-Day Streak', description: 'Work out 7 days in a row', unlocked: false },
      { id: 'workouts10', icon: '💪', name: '10 Workouts', description: 'Complete 10 total workouts', unlocked: false },
      { id: 'workouts30', icon: '🏆', name: '30 Workouts', description: 'Complete 30 total workouts', unlocked: false },
      { id: 'earlybird', icon: '🌅', name: 'Early Bird', description: 'Work out before 8am', unlocked: false },
      { id: 'warrior', icon: '⚔️', name: 'Workout Warrior', description: 'Complete 5 workouts in one week', unlocked: false },
      { id: 'champion', icon: '🥇', name: '30-Day Champion', description: 'Complete a 30-day plan', unlocked: false },
      { id: 'calburn', icon: '🔥', name: 'Calorie Crusher', description: 'Burn 500+ calories in one session', unlocked: false },
      { id: 'marathon', icon: '🏃', name: 'Endurance', description: 'Complete a 60-minute workout', unlocked: false }
    ]
  };
}

// ---- STORAGE ----
function getAppData() {
  try {
    const stored = localStorage.getItem('fitathome_data');
    if (!stored) return defaultData();
    const d = JSON.parse(stored);
    // Merge with defaults for any missing keys
    const def = defaultData();
    if (!d.achievements || d.achievements.length < def.achievements.length) d.achievements = def.achievements;
    if (!d.planProgress) d.planProgress = {};
    if (!d.weekMinutes) d.weekMinutes = [0,0,0,0,0,0,0];
    if (!d.weekCalories) d.weekCalories = [0,0,0,0,0,0,0];
    return d;
  } catch(e) { return defaultData(); }
}

function saveAppData(data) {
  localStorage.setItem('fitathome_data', JSON.stringify(data));
}

// ---- ACHIEVEMENTS ----
function checkAchievements(data) {
  const s = data.stats;
  const a = data.achievements;
  const unlock = (id) => {
    const ach = a.find(x => x.id === id);
    if (ach && !ach.unlocked) {
      ach.unlocked = true;
      setTimeout(() => showToast('🏆 Achievement unlocked: ' + ach.name), 1000);
    }
  };
  if (s.totalWorkouts >= 1) unlock('first');
  if (s.streak >= 3) unlock('streak3');
  if (s.streak >= 7) unlock('streak7');
  if (s.totalWorkouts >= 10) unlock('workouts10');
  if (s.totalWorkouts >= 30) unlock('workouts30');
  if (new Date().getHours() < 8) unlock('earlybird');
  const weekDone = (data.weekActivity || []).filter(Boolean).length;
  if (weekDone >= 5) unlock('warrior');
  if (s.bestCalories >= 500) unlock('calburn');
  if (s.bestDuration >= 60) unlock('marathon');
}

// ---- DARK / LIGHT MODE ----
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('fitathome_theme', next);
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.textContent = next === 'dark' ? '🌙' : '☀️';
  });
}

function loadTheme() {
  const saved = localStorage.getItem('fitathome_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.textContent = saved === 'dark' ? '🌙' : '☀️';
  });
}

// ---- TOAST ----
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

// ---- ACTIVE NAV LINK ----
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .bottom-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page) a.classList.add('active');
    else a.classList.remove('active');
  });
}

// ---- PLAYER: handle generated workout ----
const origFind = Array.prototype.find;
if (typeof WORKOUTS !== 'undefined') {
  const generatedRaw = localStorage.getItem('generatedWorkout');
  if (generatedRaw && localStorage.getItem('currentWorkout') === 'generated') {
    try {
      const gen = JSON.parse(generatedRaw);
      gen.id = 'generated';
      WORKOUTS.push(gen);
    } catch(e) {}
  }
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  setActiveNav();
});

// Also run immediately for scripts that load before DOMContentLoaded
loadTheme();
