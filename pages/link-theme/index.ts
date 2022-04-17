const btnEle = document.getElementById('btn');

type Theme = 'dark' | 'light';

let curTheme: Theme = 'light';

function setTheme(name: Theme) {
  const link = document.createElement('link');
  link.id = 'theme';
  link.rel = 'stylesheet';
  link.href = `/assets/themes/${name}.css`;

  const themeElm = document.querySelector('#theme');
  if (themeElm) {
    themeElm.replaceWith(link);
  } else {
    document.head.append(link);
  }
}

btnEle?.addEventListener(
  'click',
  () => {
    if (curTheme === 'light') {
      curTheme = 'dark';
    } else {
      curTheme = 'light';
    }
    setTheme(curTheme);
  },
  false
);

export {};
