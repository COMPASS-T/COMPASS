var resendCooldown = 0;
var resendInterval = null;

function sendResetLink() {
  var email = document.getElementById('resetEmail').value.trim();
  var errorBanner = document.getElementById('errorBanner');
  var errorText = document.getElementById('errorText');

  errorBanner.classList.add('hidden');

  if (!email) {
    errorText.textContent = 'Please enter your email address.';
    errorBanner.classList.remove('hidden');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorText.textContent = 'Please enter a valid email address.';
    errorBanner.classList.remove('hidden');
    return;
  }

  var btn = document.getElementById('sendBtn');
  btn.disabled = true;
  btn.classList.add('opacity-70');
  document.getElementById('sendSpinner').classList.remove('hidden');
  document.getElementById('sendBtnText').textContent = 'Sending...';

  setTimeout(function() {
    document.getElementById('formState').classList.add('hidden');
    document.getElementById('successState').classList.remove('hidden');
    document.getElementById('sentToEmail').textContent = email;

    startResendCooldown();
  }, 1500);
}

function resendLink() {
  if (resendCooldown > 0) return;

  var btn = document.getElementById('resendBtn');
  var btnText = document.getElementById('resendBtnText');
  document.getElementById('resendSpinner').classList.remove('hidden');
  btnText.textContent = 'Sending...';
  btn.disabled = true;
  btn.classList.add('opacity-70');

  setTimeout(function() {
    document.getElementById('resendSpinner').classList.add('hidden');

    var msg = document.getElementById('resendSuccess');
    msg.classList.remove('hidden');
    setTimeout(function() { msg.classList.add('hidden'); }, 3000);

    startResendCooldown();
  }, 1500);
}

function startResendCooldown() {
  resendCooldown = 60;
  var btn = document.getElementById('resendBtn');
  var btnText = document.getElementById('resendBtnText');
  btn.disabled = true;
  btn.classList.add('opacity-70', 'cursor-not-allowed');
  btn.classList.remove('hover:bg-gray-50');
  updateResendTimer();

  resendInterval = setInterval(function() {
    resendCooldown--;
    updateResendTimer();
    if (resendCooldown <= 0) {
      clearInterval(resendInterval);
      btn.disabled = false;
      btn.classList.remove('opacity-70', 'cursor-not-allowed');
      btn.classList.add('hover:bg-gray-50');
      btnText.textContent = 'Resend email';
    }
  }, 1000);
}

function updateResendTimer() {
  var m = Math.floor(resendCooldown / 60);
  var s = resendCooldown % 60;
  document.getElementById('resendBtnText').textContent = 'Resend available in ' + m + ':' + (s < 10 ? '0' : '') + s;
}
