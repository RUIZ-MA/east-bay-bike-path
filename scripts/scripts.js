/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

/* AUDIO SCRIPT, I am not making an array, I'M ADDING ONE TO A SECTION, WHEN APPLICABLE*/
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


/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const audBtn = document.querySelector('#audubonBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = audBtn.getBoundingClientRect();
  console.log(rect);
  // Calculate top/left relative to the viewport (fixed position context)
  const top = `${rect.top}px`;
  const left = `${rect.left}px`;
  const width = `${rect.width}px`;
  const height = `${rect.height}px`;

  // Apply these values to CSS variables on the body or modal element
  body.style.setProperty('--btn-top', top);
  body.style.setProperty('--btn-left', left);
  body.style.setProperty('--btn-width', width);
  body.style.setProperty('--btn-height', height);
}

// Set initial position on load
window.addEventListener('load', updateModalClipPath);
// Update position if the window resizes or layout shifts
window.addEventListener('resize', updateModalClipPath);
// -------------------------------


// Animate modal opening
audBtn.addEventListener('click', () => {
    console.log('button clicked');
  audBtn.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    button.style.opacity = '1';
    modal.classList.remove('open');
    hintBrowser();
  }
});

// Set will-change when the element is hovered or opened/closed
function hintBrowser() {
  modal.style.willChange = 'clip-path';
}

// Remove will-change after transition
modal.addEventListener("transitionend", removeHint, false);

function removeHint() {
  modal.style.willChange = 'auto';
}

// Optional accessibility: Enable keyboard closing
window.addEventListener('keydown', (e) => {
  if (modal.classList.contains('open') && e.key === 'Escape') {
    // Make sure we update the clip path variables
    updateModalClipPath();

    modal.classList.remove('open');
    button.style.opacity = '1';
    hintBrowser();
  }
});

