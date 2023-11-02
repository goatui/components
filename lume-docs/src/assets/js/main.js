(function () {
  'use strict';

  window.myConsole = {
    log: function (message, title) {
      window.dispatchEvent(
        new CustomEvent('goat:notification', {
          detail: {
            title: title ? title : undefined,
            subtitle: `<pre>${message}</pre>`,
            state: 'success',
          },
        }),
      );
    },
    warn: function (message, title) {
      window.dispatchEvent(
        new CustomEvent('goat:notification', {
          detail: {
            title: title ? title : undefined,
            subtitle: `<pre>${message}</pre>`,
            state: 'warning',
          },
        }),
      );
    },
  };

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'G-YVVYZC1HFF');

  document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.querySelector('.theme-switcher');

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      themeSwitcher.icon = theme === 'dark' ? 'asleep--filled' : 'sun';
      localStorage.setItem('theme', theme);
    }

    const theme = localStorage.getItem('theme') || 'light';
    setTheme(theme);

    themeSwitcher.addEventListener('click', function() {
      const theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
      setTheme(theme);
    });

    const dirSwitcher = document.querySelector('#dir-switcher');

    function setDir(dir) {
      document.documentElement.setAttribute('dir', dir);
      themeSwitcher.innetText = dir;
      localStorage.setItem('dir', dir);
    }

    const dir = localStorage.getItem('dir') || 'ltr';
    setDir(dir);

    dirSwitcher.addEventListener('click', function() {
      const dir = localStorage.getItem('dir') === 'ltr' ? 'rtl' : 'ltr';
      setDir(dir);
    });
  });
})();
