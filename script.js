'use strict';

(function () {
  var sequence = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ];

  var index = 0;
  var overlay = document.getElementById('konami-overlay');
  var closeButton = document.getElementById('konami-close');

  function keyName(event) {
    if (event.key.length === 1) {
      return event.key.toLowerCase();
    }

    return event.key;
  }

  function openOverlay() {
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }

  function closeOverlay() {
    overlay.hidden = true;
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    index = 0;
  }

  document.addEventListener('keydown', function (event) {
    if (!overlay.hidden && event.key === 'Escape') {
      closeOverlay();
      return;
    }

    var currentKey = keyName(event);

    if (currentKey === sequence[index]) {
      index += 1;
      if (index === sequence.length) {
        openOverlay();
        index = 0;
      }
      return;
    }

    index = currentKey === sequence[0] ? 1 : 0;
  });

  closeButton.addEventListener('click', closeOverlay);
})();
