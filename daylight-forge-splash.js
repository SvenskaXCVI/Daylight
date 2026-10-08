/* Daylight Forge Splash — exact Daylight View implementation.
   Keep this file beside daylight-forge-primary.png and
   daylight-forge-wordmark-clean.png. */
(() => {
  'use strict';
  const script = document.currentScript;
  const base = script?.src || location.href;
  const asset = name => new URL(name, base).href;
  const id = 'daylight-forge-splash';

  if (!document.querySelector('#daylight-forge-splash-style')) {
    const style = document.createElement('style');
    style.id = 'daylight-forge-splash-style';
    style.textContent = `
      #${id}{position:fixed;z-index:2147483647;inset:0;display:grid;place-items:center;overflow:hidden;background:#05080d;transition:opacity .48s cubic-bezier(.22,.8,.22,1),visibility .48s ease}
      #${id}::before{position:absolute;inset:0;content:"";background:radial-gradient(circle at 50% 46%,rgba(132,116,255,.12),transparent 33%)}
      #${id}[data-leaving="true"]{opacity:0;visibility:hidden;pointer-events:none}
      #${id} .df-lockup{position:relative;display:flex;width:min(280px,54vw);align-items:center;flex-direction:column;animation:df-enter .8s cubic-bezier(.16,1,.3,1) both}
      #${id} .df-primary{width:min(104px,22vw);height:auto;mix-blend-mode:screen;filter:drop-shadow(0 20px 42px rgba(127,110,255,.22))}
      #${id} .df-wordmark{display:block;width:min(250px,50vw);height:auto;margin-top:22px;mix-blend-mode:screen}
      @keyframes df-enter{from{opacity:0;transform:scale(.94) translateY(8px);filter:blur(8px)}to{opacity:1;transform:none;filter:none}}
      @media(max-height:430px){#${id} .df-lockup{width:min(230px,46vw);flex-direction:row;gap:22px}#${id} .df-primary{width:min(80px,14vw)}#${id} .df-wordmark{width:min(170px,31vw);margin:0}}
      @media(prefers-reduced-motion:reduce){#${id},#${id} .df-lockup{animation:none;transition-duration:.01ms}}
    `;
    document.head.append(style);
  }

  let active = null;
  function show({ minimumMs = 3000, waitFor = null } = {}) {
    active?.remove();
    const splash = document.createElement('div');
    splash.id = id;
    splash.setAttribute('role', 'status');
    splash.setAttribute('aria-label', 'Daylight Forge is loading');
    splash.innerHTML = `<div class="df-lockup"><img class="df-primary" src="${asset('daylight-forge-primary.png')}" alt=""><img class="df-wordmark" src="${asset('daylight-forge-wordmark-clean.png')}" alt="Daylight Forge"></div>`;
    document.body.append(splash);
    active = splash;

    const ready = typeof waitFor === 'function' ? Promise.resolve().then(waitFor) : Promise.resolve(waitFor);
    Promise.all([
      new Promise(resolve => setTimeout(resolve, Math.max(0, Number(minimumMs) || 0))),
      ready.catch(() => {})
    ]).then(() => {
      if (active !== splash) return;
      splash.dataset.leaving = 'true';
      setTimeout(() => { if (active === splash) active = null; splash.remove(); }, 520);
    });
    return splash;
  }

  function hide() {
    if (!active) return;
    const splash = active;
    active = null;
    splash.dataset.leaving = 'true';
    setTimeout(() => splash.remove(), 520);
  }

  window.DaylightForgeSplash = Object.freeze({ show, hide });
  if (script?.dataset.auto !== 'false') {
    const start = () => show({ minimumMs: Number(script?.dataset.minimum || 3000) });
    if (document.body) start(); else document.addEventListener('DOMContentLoaded', start, { once: true });
  }
})();
