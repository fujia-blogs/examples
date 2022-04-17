const btnEle = document.getElementById('btn');

function toggleTheme() {
  const lightTheme = document.querySelector<any>('#light-theme');
  const darkTheme = document.querySelector<any>('#dark-theme');

  if (darkTheme?.disabled) {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
  } else {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
  }
}

btnEle?.addEventListener('click', toggleTheme, false);

export {};
