/*  COMPASS — Splash Overlay Controller
 *  ------------------------------------
 *  Runs the loading animation with map-pin location tracker.
 *  Progress bar fills 0% → 100%, then overlay fades out
 *  to reveal the login form underneath.
 *  ------------------------------------
 */

(function () {

  var fill         = document.getElementById('splashProgress');
  var text         = document.getElementById('splashText');
  var percent      = document.getElementById('splashPercent');
  var dots         = document.getElementById('splashDots');
  var overlay      = document.getElementById('splashOverlay');
  var content      = document.getElementById('splashContent');
  var bgCompass    = document.getElementById('splashBgCompass');
  var trackingText = document.getElementById('splashTrackingText');

  if (!overlay) return;

  var steps = [
    { percent: 8,   delay: 200,  label: 'Initializing',        tracking: 'LOCATING YOUR SPACE' },
    { percent: 20,  delay: 500,  label: 'Loading resources',    tracking: 'LOCATING YOUR SPACE' },
    { percent: 35,  delay: 1000, label: 'Mapping coordinates',  tracking: 'PINNING LOCATION' },
    { percent: 50,  delay: 1500, label: 'Connecting services',  tracking: 'TRACKING POSITION' },
    { percent: 65,  delay: 2000, label: 'Loading modules',      tracking: 'SYNCING DATA' },
    { percent: 80,  delay: 2500, label: 'Almost ready',         tracking: 'SPACE FOUND' },
    { percent: 92,  delay: 3000, label: 'Finishing up',         tracking: 'LOCKING IN' },
    { percent: 100, delay: 3400, label: 'Ready',                tracking: 'WELCOME' }
  ];

  steps.forEach(function (step) {
    setTimeout(function () {
      if (fill)         fill.style.width = step.percent + '%';
      if (text)         text.textContent = step.label;
      if (percent)      percent.textContent = step.percent + '%';
      if (trackingText) trackingText.textContent = step.tracking;
    }, step.delay);
  });

  // Hide dots at 100%
  setTimeout(function () {
    if (dots) dots.style.display = 'none';
  }, 3400);

  // Fade out overlay
  setTimeout(function () {
    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'scale(1.03)';
    }
    if (bgCompass) {
      bgCompass.style.transition = 'opacity 0.5s ease';
      bgCompass.style.opacity = '0';
    }
  }, 3800);

  // Remove overlay
  setTimeout(function () {
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.visibility = 'hidden';
    }
  }, 4000);

  setTimeout(function () {
    if (overlay) overlay.remove();
  }, 4500);

})();
