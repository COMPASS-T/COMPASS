var regResendCooldown = 0;
var regResendInterval = null;

// Which kind of account the LinkedIn button will create.
// Alumni is self-service; Institution creates a role-less account that an
// Institution Administrator must review and assign a role to.
window.regAccountType = 'alumni';

function switchRegTab(tab) {
  var alumniTab = document.getElementById('regAlumniTab');
  var instTab = document.getElementById('regInstTab');
  var alumniFields = document.getElementById('regAlumniFields');
  var notice = document.getElementById('regInstNotice');
  var liText = document.getElementById('regLinkedInText');
  var liHint = document.getElementById('regLinkedInHint');
  var err = document.getElementById('regError');

  window.regAccountType = tab === 'institution' ? 'institution' : 'alumni';
  if (err) err.classList.add('hidden');

  var on = 'flex-1 py-2.5 text-[13px] font-semibold text-gray-900 bg-gray-100 rounded-md transition-all';
  var off = 'flex-1 py-2.5 text-[13px] font-medium text-gray-500 rounded-md hover:bg-gray-50 transition-all';

  if (window.regAccountType === 'institution') {
    if (instTab) instTab.className = on;
    if (alumniTab) alumniTab.className = off;
    if (alumniFields) alumniFields.classList.add('hidden');
    if (notice) notice.classList.remove('hidden');
    if (liText) liText.textContent = 'Continue with LinkedIn';
    if (liHint) {
      liHint.textContent =
        'A LinkedIn window opens. After you accept the Terms, tell us which office ' +
        'you are with - an administrator assigns your role.';
    }
  } else {
    if (alumniTab) alumniTab.className = on;
    if (instTab) instTab.className = off;
    if (alumniFields) alumniFields.classList.remove('hidden');
    if (notice) notice.classList.add('hidden');
    if (liText) liText.textContent = 'Sign up with LinkedIn';
    if (liHint) {
      liHint.textContent =
        'A LinkedIn window opens - sign in there, confirm the Terms & Conditions, ' +
        'then add your batch and program.';
    }
  }
}



function toggleRegPw(fieldId) {
  var input = document.getElementById(fieldId);
  var eyeOff = document.getElementById(fieldId + 'EyeOff');
  var eyeOn  = document.getElementById(fieldId + 'EyeOn');

  if (input.type === 'password') {
    input.type = 'text';
    eyeOff.classList.add('hidden');
    eyeOn.classList.remove('hidden');
  } else {
    input.type = 'password';
    eyeOn.classList.add('hidden');
    eyeOff.classList.remove('hidden');
  }
}

function handleRegister() {
  var name = document.getElementById('regName').value.trim();
  var email = document.getElementById('regEmail').value.trim();
  var school = document.getElementById('regSchool').value.trim();
  var program = document.getElementById('regProgram').value.trim();
  var batch = document.getElementById('regBatch').value;
  var pw = document.getElementById('regPw').value;
  var privacy = document.getElementById('privacyAgree').checked;
  var errorDiv = document.getElementById('regError');
  var errorText = document.getElementById('regErrorText');

  errorDiv.classList.add('hidden');

  if (!name || !email || !school || !program || !batch || !pw) {
    errorText.textContent = 'Please fill in all fields.';
    errorDiv.classList.remove('hidden');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorText.textContent = 'Please enter a valid email address.';
    errorDiv.classList.remove('hidden');
    return;
  }
  if (batch.length < 8 || pw.length < 8) {
    errorText.textContent = 'Password must be at least 8 characters.';
    errorDiv.classList.remove('hidden');
    return;
  }
  if (batch !== pw) {
    errorText.textContent = 'Passwords do not match.';
    errorDiv.classList.remove('hidden');
    return;
  }
  if (!privacy) {
    errorText.textContent = 'You must agree to the privacy notice to continue.';
    errorDiv.classList.remove('hidden');
    return;
  }

  var btn = document.getElementById('regBtn');
  btn.disabled = true;
  btn.classList.add('opacity-70');
  document.getElementById('regSpinner').classList.remove('hidden');
  document.getElementById('regBtnText').textContent = 'Creating account...';

  setTimeout(function () {
    document.getElementById('regFormState').classList.add('hidden');
    document.getElementById('regSuccessState').classList.remove('hidden');
    document.getElementById('regSentEmail').textContent = email;
    startRegResendCooldown();
  }, 2000);
}

function resendVerification() {
  if (regResendCooldown > 0) return;

  var btn = document.getElementById('regResendBtn');
  var btnText = document.getElementById('regResendBtnText');
  document.getElementById('regResendSpinner').classList.remove('hidden');
  btnText.textContent = 'Sending...';
  btn.disabled = true;
  btn.classList.add('opacity-70');

  setTimeout(function () {
    document.getElementById('regResendSpinner').classList.add('hidden');

    var msg = document.getElementById('regResendSuccess');
    msg.classList.remove('hidden');
    setTimeout(function () {
      msg.classList.add('hidden');
    }, 3000);

    startRegResendCooldown();
  }, 1500);
}

function startRegResendCooldown() {
  regResendCooldown = 60;
  var btn = document.getElementById('regResendBtn');
  var btnText = document.getElementById('regResendBtnText');

  btn.disabled = true;
  btn.classList.add('opacity-70', 'cursor-not-allowed');
  btn.classList.remove('hover:bg-gray-50');
  updateRegResendTimer();

  regResendInterval = setInterval(function () {
    regResendCooldown--;
    updateRegResendTimer();

    if (regResendCooldown <= 0) {
      clearInterval(regResendInterval);
      btn.disabled = false;
      btn.classList.remove('opacity-70', 'cursor-not-allowed');
      btn.classList.add('hover:bg-gray-50');
      btnText.textContent = 'Resend verification email';
    }
  }, 1000);
}

function updateRegResendTimer() {
  var m = Math.floor(regResendCooldown / 60);
  var s = regResendCooldown % 60;
  document.getElementById('regResendBtnText').textContent =
    'Resend available in ' + m + ':' + (s < 10 ? '0' : '') + s;
}