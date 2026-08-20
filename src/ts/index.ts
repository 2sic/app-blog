var winAny = window as any;
winAny.appBlog ??= {};
winAny.appBlog.init ??= initAppBlog;

function initAppBlog() {
  if (!navigator.share) return; // Button bleibt versteckt (CSS-Default)

  const shareWrapper = document.querySelector<HTMLDivElement>('.app-blog5-share');
  if (!shareWrapper) return;

  const shareButtons = document.querySelectorAll<HTMLAnchorElement>('.app-blog5-share-btn');
  shareButtons.forEach((btn) => {
    shareWrapper.classList.remove('d-none'); // oder btn.style.display = ''
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const url = target.dataset.url;
      const title = target.dataset.title;

      try {
        await navigator.share({ title, url });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error(`Error sharing ${title} (${url}):`, err);
        }
      }
    });
  });
}