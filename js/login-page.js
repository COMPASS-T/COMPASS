// Login talks to the real backend. The Alumni / Institution tabs are cosmetic -
// the account's real role decides which dashboard you land on.
var currentTab = "alumni";

// ===== TAB SWITCHING =====
function switchTab(tab) {
  currentTab = tab;
  var alumniTab = document.getElementById("alumniTab");
  var institutionTab = document.getElementById("institutionTab");
  var emailLabel = document.getElementById("emailLabel");
  var emailInput = document.getElementById("email");

  // Hide errors on tab switch
  document.getElementById("loginError").classList.add("hidden");
  document.getElementById("linkedinErrorBanner").classList.add("hidden");

  if (tab === "alumni") {
    alumniTab.className = "flex-1 p-2.5 text-center text-[13px] font-semibold text-gray-900 rounded-md bg-gray-100";
    institutionTab.className = "flex-1 p-2.5 text-center text-[13px] font-medium text-gray-500 rounded-md hover:bg-gray-50 transition";
    emailLabel.textContent = "Alumni email";
    emailInput.placeholder = "";
  } else {
    institutionTab.className = "flex-1 p-2.5 text-center text-[13px] font-semibold text-gray-900 rounded-md bg-gray-100";
    alumniTab.className = "flex-1 p-2.5 text-center text-[13px] font-medium text-gray-500 rounded-md hover:bg-gray-50 transition";
    emailLabel.textContent = "Institution email";
    emailInput.placeholder = "";
  }
}

// ===== TOGGLE PASSWORD VISIBILITY =====
function togglePassword() {
  var pwInput = document.getElementById("password");
  var eyeOff = document.getElementById("eyeOff");
  var eyeOn = document.getElementById("eyeOn");
  if (pwInput.type === "password") {
    pwInput.type = "text";
    eyeOff.classList.add("hidden");
    eyeOn.classList.remove("hidden");
  } else {
    pwInput.type = "password";
    eyeOff.classList.remove("hidden");
    eyeOn.classList.add("hidden");
  }
}

// ===== SHOW ERROR =====
function showLoginError(msg) {
  var errorDiv = document.getElementById("loginError");
  var errorMsg = document.getElementById("loginErrorMsg");
  errorMsg.textContent = msg;
  errorDiv.classList.remove("hidden");
  errorDiv.style.animation = "shake 0.4s ease";
  setTimeout(function () { errorDiv.style.animation = ""; }, 500);
}

// ===== HANDLE LOGIN =====
var loginInFlight = false;

function handleLogin() {
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();

  document.getElementById("loginError").classList.add("hidden");
  document.getElementById("linkedinErrorBanner").classList.add("hidden");

  if (!email || !password) {
    showLoginError("Please enter your email and password.");
    return;
  }
  if (loginInFlight) return;
  loginInFlight = true;

  var btn = document.querySelector('button[onclick="handleLogin()"]');
  if (btn) { btn.disabled = true; btn.classList.add("opacity-70"); }

  var API = (window.COMPASS_API_BASE || "") + "/api";
  fetch(API + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password })
  })
    .then(function (r) {
      return r.json().then(function (d) { return { ok: r.ok, body: d }; });
    })
    .then(function (res) {
      loginInFlight = false;
      if (btn) { btn.disabled = false; btn.classList.remove("opacity-70"); }
      if (!res.ok) {
        showLoginError((res.body && res.body.error) || "Invalid email or password.");
        return;
      }
      var user = res.body.user || {};
      try {
        localStorage.setItem("compassToken", res.body.token);
        sessionStorage.setItem("compassUser", JSON.stringify({
          email: user.email, role: user.role, loggedInAt: new Date().toISOString()
        }));
      } catch (e) { /* ignore */ }
      window.location.href = user.dashboardUrl || "alumni/update-employment.html";
    })
    .catch(function () {
      loginInFlight = false;
      if (btn) { btn.disabled = false; btn.classList.remove("opacity-70"); }
      showLoginError("Could not reach the server. Make sure the COMPASS backend is running.");
    });
}

// ===== ENTER KEY TO LOGIN =====
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      handleLogin();
    }
  });

  // Show a message if we were redirected back from a failed LinkedIn sign-in.
  var params = new URLSearchParams(window.location.search);
  var linkedinError = params.get("linkedin_error");
  if (linkedinError) {
    var banner = document.getElementById("linkedinErrorBanner");
    var msg = document.getElementById("linkedinErrorMsg");
    if (msg) msg.textContent = linkedinError;
    if (banner) banner.classList.remove("hidden");
    window.history.replaceState({}, "", window.location.pathname);
  }
  if (params.get("verified") === "1") {
    var okBanner = document.getElementById("loginError");
    var okMsg = document.getElementById("loginErrorMsg");
    if (okBanner && okMsg) {
      okBanner.className = "mb-5 p-3.5 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3";
      okMsg.className = "text-[13px] text-green-700 font-medium";
      okMsg.textContent = "Email verified. You can now sign in.";
      okBanner.classList.remove("hidden");
    }
    window.history.replaceState({}, "", window.location.pathname);
  }
});
