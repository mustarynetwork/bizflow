/* ═══════════════════════════════════════════════════
   BizFlow — Shared Layout CSS + Nav builder
   Include this file on every inner page (after shared.js)
═══════════════════════════════════════════════════ */

/* ── RESET + BASE ── */
const LAYOUT_CSS = `
  :root{
    --ink:#0f172a;--ink2:#475569;--ink3:#94a3b8;
    --surface:#ffffff;--bg:#f1f5f9;--bg2:#f8fafc;
    --accent:#4f46e5;--accent2:#7c3aed;--accent-bg:#eef2ff;
    --success:#059669;--danger:#dc2626;--warn:#d97706;
    --border:#e2e8f0;--border2:#cbd5e1;
    --shadow:0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(79,70,229,.06);
    --r:12px;--nav-w:240px;
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--ink);min-height:100vh;font-size:14px}

  /* ── LAYOUT ── */
  .bf-layout{display:flex;min-height:100vh}

  /* ── SIDEBAR ── */
  .bf-nav{
    width:var(--nav-w);flex-shrink:0;
    background:var(--ink);
    display:flex;flex-direction:column;
    position:fixed;top:0;left:0;bottom:0;
    z-index:50;transition:transform .25s;
  }
  .bf-nav-logo{
    padding:20px 20px 16px;
    border-bottom:1px solid rgba(255,255,255,.08);
    display:flex;align-items:center;gap:10px;
  }
  .bf-nav-logo-icon{
    width:36px;height:36px;border-radius:9px;
    background:linear-gradient(135deg,var(--accent),var(--accent2));
    display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0;
  }
  .bf-nav-logo-text{font-family:'Syne',sans-serif;font-size:17px;font-weight:800;color:#fff;letter-spacing:-.3px}
  .bf-nav-logo-text span{color:#a5b4fc}

  .bf-nav-section{padding:16px 12px 4px;font-size:10px;font-weight:700;letter-spacing:1.2px;color:rgba(255,255,255,.3);text-transform:uppercase}
  .bf-nav-item{
    display:flex;align-items:center;gap:10px;
    padding:9px 12px;border-radius:9px;margin:1px 8px;
    color:rgba(255,255,255,.65);font-size:13px;font-weight:500;
    text-decoration:none;cursor:pointer;transition:all .15s;
  }
  .bf-nav-item:hover{background:rgba(255,255,255,.08);color:#fff}
  .bf-nav-item.active{background:var(--accent);color:#fff;font-weight:600}
  .bf-nav-item .nav-icon{width:18px;text-align:center;font-size:15px;flex-shrink:0}
  .bf-nav-bottom{margin-top:auto;padding:12px 8px;border-top:1px solid rgba(255,255,255,.08)}
  .bf-role-badge{
    background:rgba(165,180,252,.15);border-radius:6px;
    padding:4px 10px;font-size:11px;color:#a5b4fc;font-weight:600;
    display:inline-block;margin-bottom:8px;margin-left:4px;
  }

  /* ── MAIN CONTENT ── */
  .bf-main{margin-left:var(--nav-w);flex:1;display:flex;flex-direction:column;min-height:100vh}

  /* ── TOPBAR ── */
  .bf-topbar{
    background:var(--surface);border-bottom:1px solid var(--border);
    padding:0 28px;height:56px;
    display:flex;align-items:center;justify-content:space-between;
    position:sticky;top:0;z-index:40;
  }
  .bf-page-title{font-size:16px;font-weight:700;color:var(--ink)}
  .bf-topbar-right{display:flex;align-items:center;gap:10px}

  /* ── PAGE BODY ── */
  .bf-body{padding:24px 28px 60px;flex:1}

  /* ── CARDS ── */
  .card{background:var(--surface);border-radius:var(--r);box-shadow:var(--shadow);padding:24px;margin-bottom:20px}
  .card-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid var(--border)}
  .card-title{font-size:14px;font-weight:700;color:var(--ink)}
  .card-sub{font-size:12px;color:var(--ink3);margin-top:2px}

  /* ── STAT CARDS ── */
  .stats-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;margin-bottom:24px}
  .stat-card{background:var(--surface);border-radius:var(--r);box-shadow:var(--shadow);padding:20px}
  .stat-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;color:var(--ink3);margin-bottom:6px}
  .stat-value{font-size:24px;font-weight:700;color:var(--ink);line-height:1}
  .stat-sub{font-size:12px;color:var(--ink3);margin-top:4px}
  .stat-icon{font-size:28px;margin-bottom:8px}

  /* ── FORMS ── */
  .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .form-grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}
  @media(max-width:640px){.form-grid,.form-grid-3{grid-template-columns:1fr}}
  .field{margin-bottom:0}
  .field label{display:block;font-size:11px;font-weight:600;color:var(--ink2);margin-bottom:5px;text-transform:uppercase;letter-spacing:.5px}
  .field input,.field select,.field textarea{
    width:100%;border:1.5px solid var(--border);border-radius:8px;
    padding:9px 12px;font-family:inherit;font-size:13px;color:var(--ink);
    background:var(--surface);outline:none;transition:border-color .2s,box-shadow .2s;
  }
  .field input:focus,.field select:focus,.field textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(79,70,229,.08);background:#fff}
  .field textarea{resize:vertical;min-height:72px}
  .field-full{grid-column:1/-1}

  /* ── BUTTONS ── */
  .btn{display:inline-flex;align-items:center;gap:6px;padding:9px 18px;border-radius:8px;font-family:inherit;font-size:13px;font-weight:600;cursor:pointer;border:none;transition:all .15s}
  .btn:active{transform:scale(.97)}
  .btn:disabled{opacity:.6;cursor:not-allowed}
  .btn-primary{background:var(--accent);color:#fff}
  .btn-primary:hover{background:#4338ca;box-shadow:0 4px 12px rgba(79,70,229,.3)}
  .btn-outline{background:transparent;border:1.5px solid var(--border);color:var(--ink)}
  .btn-outline:hover{border-color:var(--accent);color:var(--accent)}
  .btn-danger{background:var(--danger);color:#fff}
  .btn-danger:hover{background:#b91c1c}
  .btn-success{background:var(--success);color:#fff}
  .btn-success:hover{background:#047857}
  .btn-sm{padding:6px 12px;font-size:12px}
  .btn-icon{padding:7px 9px;font-size:14px}

  /* ── TABLE ── */
  .table-wrap{overflow-x:auto;border-radius:var(--r)}
  table{width:100%;border-collapse:collapse}
  thead tr{background:var(--bg)}
  th{padding:10px 14px;text-align:left;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--ink2);white-space:nowrap}
  td{padding:11px 14px;border-bottom:1px solid var(--border);font-size:13px;color:var(--ink);vertical-align:middle}
  tr:last-child td{border-bottom:none}
  tr:hover td{background:var(--bg2)}
  .td-actions{display:flex;gap:6px;white-space:nowrap}

  /* ── BADGES ── */
  .badge{display:inline-flex;align-items:center;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600}
  .badge-supplier{background:#dbeafe;color:#1d4ed8}
  .badge-customer{background:#dcfce7;color:#15803d}
  .badge-both{background:#fef9c3;color:#854d0e}
  .badge-active{background:#dcfce7;color:#15803d}
  .badge-inactive{background:#fee2e2;color:#dc2626}

  /* ── SEARCH BAR ── */
  .search-bar{position:relative;flex:1;max-width:320px}
  .search-bar input{padding-left:36px;background:var(--bg)}
  .search-bar::before{content:'🔍';position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:13px;pointer-events:none}

  /* ── EMPTY STATE ── */
  .empty{text-align:center;padding:48px 20px;color:var(--ink3)}
  .empty-icon{font-size:40px;margin-bottom:12px}
  .empty p{font-size:14px}

  /* ── MODAL ── */
  .modal-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:200;align-items:center;justify-content:center;padding:16px}
  .modal-overlay.open{display:flex}
  .modal{background:var(--surface);border-radius:20px;padding:32px;max-width:560px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.2);max-height:90vh;overflow-y:auto}
  .modal-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:20px}
  .modal-title{font-size:17px;font-weight:700}
  .modal-close{background:none;border:none;font-size:20px;cursor:pointer;color:var(--ink3);padding:0 4px;line-height:1}
  .modal-close:hover{color:var(--ink)}
  .modal-footer{display:flex;gap:10px;justify-content:flex-end;margin-top:24px;padding-top:16px;border-top:1px solid var(--border)}

  /* ── CONFIRM DIALOG ── */
  #bf-confirm{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:300;align-items:center;justify-content:center;padding:16px}
  #bf-confirm.open{display:flex}
  #bf-confirm .box{background:#fff;border-radius:16px;padding:28px;max-width:380px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.2);text-align:center}
  #bf-confirm .box h3{font-size:16px;font-weight:700;margin-bottom:8px}
  #bf-confirm .box p{font-size:13px;color:var(--ink2);margin-bottom:20px}
  #bf-confirm .box .actions{display:flex;gap:10px;justify-content:center}

  /* ── MOBILE ── */
  .bf-menu-btn{display:none;background:none;border:none;font-size:22px;cursor:pointer;padding:4px 8px}
  @media(max-width:768px){
    .bf-nav{transform:translateX(-100%)}
    .bf-nav.open{transform:translateX(0)}
    .bf-main{margin-left:0}
    .bf-menu-btn{display:block}
    .bf-body{padding:16px 16px 60px}
    .bf-topbar{padding:0 16px}
    .stats-grid{grid-template-columns:1fr 1fr}
  }
  @media(max-width:400px){.stats-grid{grid-template-columns:1fr}}
  @media print{.bf-nav,.bf-topbar{display:none!important}.bf-main{margin-left:0}.bf-body{padding:0}}
`;

/* ── INJECT CSS ── */
(function(){
  const st = document.createElement('style');
  st.textContent = LAYOUT_CSS;
  document.head.insertBefore(st, document.head.firstChild);
  // Load fonts
  if (!document.querySelector('link[href*="Syne"]')) {
    const lk = document.createElement('link');
    lk.rel = 'stylesheet';
    lk.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@700;800&display=swap';
    document.head.appendChild(lk);
  }
})();

/* ── NAV BUILDER ── */
function buildNav(activePage) {
  if (!Auth.require(activePage)) return;

  const nav = [
    { section: 'মূল মেনু' },
    { id:'dashboard', icon:'🏠', label:'ড্যাশবোর্ড',   href:'dashboard.html' },
    { section: 'ব্যবসা' },
    { id:'parties',   icon:'👥', label:'পার্টি লিস্ট',  href:'parties.html' },
    { id:'products',  icon:'📦', label:'পণ্য তালিকা',   href:'products.html' },
    { id:'orders',    icon:'📋', label:'ক্রয় / বিক্রয়', href:'orders.html' },
    { section: 'রিপোর্ট' },
    { id:'stock',     icon:'🏭', label:'স্টক শিট',       href:'stock.html' },
    { id:'ledger',    icon:'📒', label:'পার্টি লেজার',   href:'ledger.html' },
  ];

  if (Auth.isSuper()) {
    nav.push({ section: 'অ্যাডমিন' });
    nav.push({ id:'settings', icon:'⚙️', label:'সেটিংস', href:'settings.html' });
  }

  const navEl = document.getElementById('bf-nav');
  if (!navEl) return;

  let html = `
    <div class="bf-nav-logo">
      <div class="bf-nav-logo-icon">📦</div>
      <div class="bf-nav-logo-text">Biz<span>Flow</span></div>
    </div>`;

  nav.forEach(item => {
    if (item.section) {
      html += `<div class="bf-nav-section">${item.section}</div>`;
    } else {
      html += `<a href="${item.href}" class="bf-nav-item ${item.id===activePage?'active':''}">
        <span class="nav-icon">${item.icon}</span>${item.label}</a>`;
    }
  });

  html += `
    <div class="bf-nav-bottom">
      <div class="bf-role-badge">${Auth.isSuper() ? '👑 Super User' : '🔑 Admin'}</div>
      <a class="bf-nav-item" onclick="Auth.logout()">
        <span class="nav-icon">🚪</span>লগআউট
      </a>
    </div>`;

  navEl.innerHTML = html;

  // Mobile toggle
  const menuBtn = document.getElementById('bf-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => navEl.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!navEl.contains(e.target) && e.target !== menuBtn) navEl.classList.remove('open');
    });
  }
}

/* ── CONFIRM DIALOG ── */
function confirm(msg, onYes, title='নিশ্চিত করুন') {
  let d = document.getElementById('bf-confirm');
  if (!d) {
    d = document.createElement('div');
    d.id = 'bf-confirm';
    d.innerHTML = `<div class="box"><h3 id="bf-confirm-title"></h3><p id="bf-confirm-msg"></p>
      <div class="actions">
        <button class="btn btn-outline" id="bf-confirm-no">বাতিল</button>
        <button class="btn btn-danger"  id="bf-confirm-yes">হ্যাঁ, নিশ্চিত</button>
      </div></div>`;
    document.body.appendChild(d);
  }
  document.getElementById('bf-confirm-title').textContent = title;
  document.getElementById('bf-confirm-msg').textContent   = msg;
  d.classList.add('open');
  document.getElementById('bf-confirm-no').onclick  = () => d.classList.remove('open');
  document.getElementById('bf-confirm-yes').onclick = () => { d.classList.remove('open'); onYes(); };
}
