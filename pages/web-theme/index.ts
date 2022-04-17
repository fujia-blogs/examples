const btnEle = document.getElementById('btn');
const rootEle = document.querySelector(':root');

btnEle?.addEventListener(
  'click',
  () => {
    const colorScheme = getComputedStyle(rootEle!).colorScheme;

    if (colorScheme === 'light dark') {
      rootEle?.setAttribute('style', 'color-scheme: dark;');
    } else {
      rootEle?.setAttribute('style', 'color-scheme: light dark;');
    }
  },
  false
);
