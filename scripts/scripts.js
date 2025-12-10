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
////////////////////////////////////////////////////////
/* PROVIDENCE 1 - start- bridge linear park imgs */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const linearBtn = document.querySelector('#linearBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = linearBtn.getBoundingClientRect();
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
linearBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    linearBtn.style.opacity = '1';
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
    linearBtn.style.opacity = '1';
    hintBrowser();
  }
});

/* PROVIDENCE 2 - Pomham Rocks lighthouse */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const lightBtn = document.querySelector('#lightBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = lightBtn.getBoundingClientRect();
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
lightBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    lightBtn.style.opacity = '1';
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
    lightBtn.style.opacity = '1';
    hintBrowser();
  }
});

/* PROVIDENCE 3 - turbines grasses east providence */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const turbineBtn = document.querySelector('#turbineBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = turbineBtn.getBoundingClientRect();
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
turbineBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    turbineBtn.style.opacity = '1';
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
    turbineBtn.style.opacity = '1';
    hintBrowser();
  }
});
/* PROVIDENCE 4 Borealis Depot */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const depotBtn = document.querySelector('#depotBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = depotBtn.getBoundingClientRect();
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
depotBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    depotBtn.style.opacity = '1';
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
    depotBtn.style.opacity = '1';
    hintBrowser();
  }
});

/* PROVIDENCE 5 Carousel */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const carouselBtn = document.querySelector('#carouselBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = carouselBtn.getBoundingClientRect();
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
carouselBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    carouselBtn.style.opacity = '1';
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
    carouselBtn.style.opacity = '1';
    hintBrowser();
  }
});

/* PROVIDENCE 6 barrington foliage */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const foliageBtn = document.querySelector('#foliageBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = foliageBtn.getBoundingClientRect();
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
carouselBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    foliageBtn.style.opacity = '1';
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
    foliageBtn.style.opacity = '1';
    hintBrowser();
  }
});

/* PROVIDENCE 7 barrington cove */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const coveBtn = document.querySelector('#coveBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = coveBtn.getBoundingClientRect();
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
coveBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    coveBtn.style.opacity = '1';
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
    coveBtn.style.opacity = '1';
    hintBrowser();
  }
});
/* Warren 8 warren  */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const warrenBtn = document.querySelector('#warrenBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = warrenBtn.getBoundingClientRect();
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
warrenBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    warrenBtn.style.opacity = '1';
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
    warrenBtn.style.opacity = '1';
    hintBrowser();
  }
});

////////////////////////////////////////////////

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
audBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    audBtn.style.opacity = '1';
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
    audBtn.style.opacity = '1';
    hintBrowser();
  }
});

/* Bristol 10 colt */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const coltBtn = document.querySelector('#coltBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = coltBtn.getBoundingClientRect();
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
coltBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    coltBtn.style.opacity = '1';
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
    coltBtn.style.opacity = '1';
    hintBrowser();
  }
});
/* Bristol 11 Fin Path */

/* SCRIPT FOR THE GREEN RECTANGLE BUTTON EXPANDING TO A LARGE PANEL TO FILL VIEW*/
const finBtn = document.querySelector('#finBtn');
const modal = document.querySelector('.modal');
const body = document.body; // Reference to the body to set variables

// --- New JavaScript Function ---
function updateModalClipPath() {
  const rect = finBtn.getBoundingClientRect();
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
finBtn.addEventListener('click', (e) => {
    console.log('button clicked');
  e.target.style.opacity = '0';
  modal.classList.add('open');
  hintBrowser();
});

// Animate modal closing when clicking outside modal__content
modal.addEventListener('click', e => {
  if (!e.target.closest('.modal__content')) {
    // Make sure we update the clip path variables one last time
    // before the animation starts closing the modal
    updateModalClipPath(); 

    coltBtn.style.opacity = '1';
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
    finBtn.style.opacity = '1';
    hintBrowser();
  }
});
