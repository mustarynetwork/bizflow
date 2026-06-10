/* ═══════════════════════════════════════════════════
   BizFlow — Shared Utilities
   Used by all pages. Include before page-specific code.
═══════════════════════════════════════════════════ */

/* ── CONFIG ── */
const BF = {
  version: '1.0.0',
  appName: 'BizFlow',
  sheetUrl: localStorage.getItem('bf_sheet_url') || '',
  appUrl:   'https://mustarynetwork.github.io/invoiceflow/',

  // Role passwords — super user can change these
  roles: {
    super: localStorage.getItem('bf_pw_super') || 'super123',
    admin: localStorage.getItem('bf_pw_admin') || 'admin123',
  },

  // Current session
  session: JSON.parse(sessionStorage.getItem('bf_session') || 'null'),
};

/* ── AUTH ── */
const Auth = {
  login(password) {
    if (password === BF.roles.super) {
      const s = { role: 'super', loginTime: Date.now() };
      sessionStorage.setItem('bf_session', JSON.stringify(s));
      BF.session = s;
      return 'super';
    }
    if (password === BF.roles.admin) {
      const s = { role: 'admin', loginTime: Date.now() };
      sessionStorage.setItem('bf_session', JSON.stringify(s));
      BF.session = s;
      return 'admin';
    }
    return null;
  },
  logout() {
    sessionStorage.removeItem('bf_session');
    BF.session = null;
    window.location.href = 'index.html';
  },
  require(page) {
    if (!BF.session) {
      window.location.href = 'index.html?redirect=' + page;
      return false;
    }
    return true;
  },
  isSuper() { return BF.session && BF.session.role === 'super'; },
};

/* ── API — Google Apps Script ── */
const API = {
  async post(payload) {
    if (!BF.sheetUrl) throw new Error('No Sheet URL configured. Open Settings.');
    await fetch(BF.sheetUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    // no-cors returns opaque response — we optimistically succeed
    return true;
  },

  async get(action, params = {}) {
    if (!BF.sheetUrl) throw new Error('No Sheet URL configured.');
    const url = new URL(BF.sheetUrl);
    url.searchParams.set('action', action);
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    const res  = await fetch(url.toString());
    const data = await res.json();
    return data;
  },
};

/* ── TOAST ── */
function toast(msg, type = '') {
  let t = document.getElementById('bf-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'bf-toast';
    t.style.cssText = `position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);
      background:#1a1a2e;color:#fff;padding:12px 26px;border-radius:30px;font-size:14px;font-weight:500;
      opacity:0;pointer-events:none;transition:all .3s;z-index:9999;white-space:nowrap;font-family:'Inter',sans-serif`;
    document.body.appendChild(t);
  }
  const colors = { success: '#2ec4b6', error: '#e63946', info: '#4361ee' };
  t.style.background = colors[type] || '#1a1a2e';
  t.textContent = msg;
  t.style.opacity = '1';
  t.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3200);
}

/* ── FORMAT ── */
const fmt = {
  currency: n => '৳' + parseFloat(n || 0).toLocaleString('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  date: d => d ? new Date(d).toLocaleDateString('en-BD') : '—',
  dateInput: () => new Date().toISOString().split('T')[0],
};

/* ── SPINNER ── */
function spinBtn(btn, loading, originalHTML) {
  if (loading) {
    btn.dataset.orig = btn.innerHTML;
    btn.innerHTML = '<span style="display:inline-block;width:15px;height:15px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:bf-spin .6s linear infinite"></span> Please wait…';
    btn.disabled = true;
  } else {
    btn.innerHTML = btn.dataset.orig || originalHTML || btn.innerHTML;
    btn.disabled = false;
  }
}

/* ── INJECT GLOBAL SPIN KEYFRAME ── */
(function() {
  const s = document.createElement('style');
  s.textContent = '@keyframes bf-spin{to{transform:rotate(360deg)}}';
  document.head.appendChild(s);
})();
