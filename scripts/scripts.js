document.querySelectorAll('.expand-panel').forEach(panel => {
  const btn   = panel.querySelector('.expand-panel__btn');
  const modal = panel.querySelector('.expand-panel__modal');

  // 1) Measure the button and write CSS vars onto *this* modal
  function updateClipPath() {
    const r = btn.getBoundingClientRect();
    modal.style.setProperty('--btn-top',    `${r.top}px`);
    modal.style.setProperty('--btn-left',   `${r.left}px`);
    modal.style.setProperty('--btn-width',  `${r.width}px`);
    modal.style.setProperty('--btn-height', `${r.height}px`);
  }

  // 2) hint to browser that clip-path will change
  function hintBrowser() {
    modal.style.willChange = 'clip-path';
  }

  // 3) Open / Close
  function open() {
    btn.style.opacity = '0';
    updateClipPath();
    hintBrowser();
    modal.classList.add('open');
  }

  function close() {
    updateClipPath();
    hintBrowser();
    modal.classList.remove('open');
    btn.style.opacity = '';
  }

  // 4) Wire up events
  btn.addEventListener('click', open);

  // clicking outside the .modal__content closes it
  modal.addEventListener('click', e => {
    if (!e.target.closest('.modal__content')) {
      close();
    }
  });

  // pressing Escape closes it
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      close();
    }
  });

  // after the transition, drop the will-change hint
  modal.addEventListener('transitionend', () => {
    modal.style.willChange = 'auto';
  });

  // recalc on load & resize
  window.addEventListener('load',   updateClipPath);
  window.addEventListener('resize', updateClipPath);
});

/* javascript for the audio button, I am not making an array */

	// Array to store references to currently playing audios and their buttons
const playingAudios = new Map();

function togglePlayPause(button) {
    const src = button.getAttribute('data-sound-src');

    if (playingAudios.has(src)) {
        // Sound is already playing, so stop it
        const audio = playingAudios.get(src);
        audio.pause();
        audio.currentTime = 0; // Rewind to the start
        playingAudios.delete(src);
        button.classList.remove('playing');
        button.textContent = button.textContent.replace('Stop', 'Play');
    } else {
        // Sound is not playing, so start it
        const audio = new Audio(src);
        audio.loop = true; // Make ambient sounds loop
        audio.play();

        // Store reference and update UI
        playingAudios.set(src, audio);
        button.classList.add('playing');
        button.textContent = button.textContent.replace('Play', 'Stop');

        // Remove from map when the sound ends naturally (e.g., if loop is removed later)
        audio.addEventListener('ended', () => {
            playingAudios.delete(src);
            button.classList.remove('playing');
            button.textContent = button.textContent.replace('Stop', 'Play');
        });
    }
}