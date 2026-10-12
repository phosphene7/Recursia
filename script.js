(() => {
  const config = window.RECURSIA_CONFIG || {};
  const safeUrl = (value) => {
    if (typeof value !== 'string' || !value.trim()) return null;
    try { const parsed = new URL(value, window.location.href); return ['http:', 'https:', 'file:'].includes(parsed.protocol) ? value : null; }
    catch { return null; }
  };
  const authorContainer = document.querySelector('#authors');
  if (Array.isArray(config.authors) && config.authors.length) {
    config.authors.forEach((author, index) => {
      if (index) authorContainer.append(document.createTextNode(' · '));
      const url = safeUrl(author.url);
      const el = document.createElement(url ? 'a' : 'span');
      el.textContent = author.name;
      if (url) { el.href = url; el.target = '_blank'; el.rel = 'noopener noreferrer'; }
      authorContainer.append(el);
    });
    authorContainer.hidden = false;
  }
  const codeUrl = safeUrl(config.codeUrl);
  if (codeUrl) { const link = document.querySelector('#code-link'); link.href = codeUrl; link.hidden = false; }
  const populatedTasks = [];
  Object.entries(config.videos || {}).forEach(([id, item]) => {
    const src = safeUrl(item.src);
    const card = document.querySelector(`[data-task="${id}"]`);
    if (!card || !src) return;
    const slot = card.querySelector('.media-slot');
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.src = src;
    video.setAttribute('aria-label', `${card.querySelector('h3').textContent} demonstration video`);
    if (safeUrl(item.poster)) video.poster = item.poster;
    if (safeUrl(item.captions)) {
      const track = document.createElement('track');
      track.kind = 'captions'; track.src = item.captions; track.srclang = 'en'; track.label = 'English'; video.append(track);
    }
    const errorNotice = document.createElement('div');
    errorNotice.className = 'media-error'; errorNotice.hidden = true;
    errorNotice.textContent = 'This video could not be loaded. Please check back later.';
    video.addEventListener('error', () => { errorNotice.hidden = false; });
    slot.replaceChildren(video, errorNotice);
    populatedTasks.push(id);
  });
  if (populatedTasks.length === 3) document.querySelector('.demos-note').hidden = true;
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navigation');
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); } });
  const dialog = document.querySelector('#figure-dialog');
  document.querySelector('.figure-button').addEventListener('click', () => dialog.showModal());
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
})();
