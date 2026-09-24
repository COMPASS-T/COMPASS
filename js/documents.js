document.getElementById('avatarBtn').addEventListener('click',function(){closeAll();document.getElementById('userDropdown').classList.toggle('hidden')});
document.getElementById('notifBtn').addEventListener('click',function(){closeAll();document.getElementById('notifDropdown').classList.toggle('hidden')});
document.getElementById('markAllReadBtn').addEventListener('click',function(){document.querySelectorAll('.notif-dot').forEach(function(d){d.classList.add('hidden')});document.getElementById('notifBadge').classList.add('hidden')});
document.getElementById('searchInput').addEventListener('focus',function(){closeAll();document.getElementById('searchDropdown').classList.remove('hidden')});
function closeAll(){document.getElementById('userDropdown').classList.add('hidden');document.getElementById('notifDropdown').classList.add('hidden');document.getElementById('searchDropdown').classList.add('hidden')}
document.addEventListener('click',function(e){if(!e.target.closest('#avatarBtn')&&!e.target.closest('#userDropdown'))document.getElementById('userDropdown').classList.add('hidden');if(!e.target.closest('#notifBtn')&&!e.target.closest('#notifDropdown'))document.getElementById('notifDropdown').classList.add('hidden');if(!e.target.closest('#searchContainer'))document.getElementById('searchDropdown').classList.add('hidden')});
document.getElementById('logoutBtn').addEventListener('click',function(){if(confirm('Are you sure you want to logout?')){alert('You have been logged out.');window.location.href='../index.html'}});
// ===== UPLOAD MODAL =====
// The modal was simplified in the redesign: the file-preview, progress bar and
// success panel may not be on the page. Every one of these lookups is therefore
// optional - dereferencing a missing one would abort the whole page script.
var uploadModal = document.getElementById('uploadModal');
var dropZone = document.getElementById('dropZone');
var fileInput = document.getElementById('fileInput');
var filePreview = document.getElementById('filePreview');
var uploadSuccess = document.getElementById('uploadSuccess');
var submitUploadBtn = document.getElementById('submitUploadBtn');
var selectedFile = null;

function on(id, ev, fn) {
  var el = document.getElementById(id);
  if (el) el.addEventListener(ev, fn);
}
function show(el) { if (el) el.classList.remove('hidden'); }
function hide(el) { if (el) el.classList.add('hidden'); }
function setText(id, text) {
  var el = document.getElementById(id);
  if (el) el.textContent = text;
}

on('uploadBtn', 'click', function () { show(uploadModal); resetUpload(); });
on('closeUploadBtn', 'click', function () { hide(uploadModal); });
on('cancelUploadBtn', 'click', function () { hide(uploadModal); });
on('uploadOverlay', 'click', function () { hide(uploadModal); });
on('browseLink', 'click', function (e) { e.stopPropagation(); if (fileInput) fileInput.click(); });
on('removeFileBtn', 'click', function () { resetUpload(); });

if (dropZone) {
  dropZone.addEventListener('click', function () { if (fileInput) fileInput.click(); });
  dropZone.addEventListener('dragover', function (e) {
    e.preventDefault();
    dropZone.classList.add('border-blue-400', 'bg-blue-50/50');
  });
  dropZone.addEventListener('dragleave', function (e) {
    e.preventDefault();
    dropZone.classList.remove('border-blue-400', 'bg-blue-50/50');
  });
  dropZone.addEventListener('drop', function (e) {
    e.preventDefault();
    dropZone.classList.remove('border-blue-400', 'bg-blue-50/50');
    if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
  });
}
if (fileInput) {
  fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) handleFile(fileInput.files[0]);
  });
}

function handleFile(file) {
  selectedFile = file;
  setText('fileName', file.name);
  setText('fileSize', formatSize(file.size));
  hide(dropZone);
  show(filePreview);
  hide(uploadSuccess);
  if (submitUploadBtn) submitUploadBtn.disabled = false;
  simulateProgress();
}

function simulateProgress() {
  var bar = document.getElementById('progressBar');
  if (!bar) return;                       // no progress bar in this layout
  var w = 0;
  var interval = setInterval(function () {
    w += Math.random() * 15 + 5;
    if (w >= 100) { w = 100; clearInterval(interval); setText('progressText', 'Ready to upload'); }
    bar.style.width = w + '%';
    if (w < 100) setText('progressText', 'Processing... ' + Math.round(w) + '%');
  }, 200);
}

function resetUpload() {
  selectedFile = null;
  if (fileInput) fileInput.value = '';
  show(dropZone);
  hide(filePreview);
  hide(uploadSuccess);
  if (submitUploadBtn) submitUploadBtn.disabled = true;
  var bar = document.getElementById('progressBar');
  if (bar) bar.style.width = '0%';
}

if (submitUploadBtn) {
  submitUploadBtn.addEventListener('click', function () {
    if (!selectedFile) return;
    hide(filePreview);
    show(uploadSuccess);
    submitUploadBtn.disabled = true;
    var ext = selectedFile.name.split('.').pop().toUpperCase();
    var dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    var body = document.getElementById('docTableBody');
    if (body) {
      var row = document.createElement('tr');
      row.className = 'border-b border-gray-100 hover:bg-gray-50';
      row.innerHTML =
        '<td class="px-6 py-4 text-sm font-medium text-gray-900">' +
        selectedFile.name.replace('.' + selectedFile.name.split('.').pop(), '') +
        '</td><td class="px-6 py-4 text-sm text-gray-500">' + ext +
        '</td><td class="px-6 py-4 text-sm text-gray-500">' + dateStr +
        '</td><td class="px-6 py-4 text-sm text-gray-500">' + formatSize(selectedFile.size) +
        '</td><td class="px-6 py-4 text-center"><button class="text-blue-600 text-sm font-semibold hover:underline">Download</button></td>';
      body.prepend(row);
    }
    setTimeout(function () { hide(uploadModal); }, 1500);
  });
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(0) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
}




//reactive
function toggleSidebar(){document.getElementById('sidebar').classList.remove('-translate-x-full');document.getElementById('sidebarOverlay').classList.remove('hidden');}
function closeSidebar(){document.getElementById('sidebar').classList.add('-translate-x-full');document.getElementById('sidebarOverlay').classList.add('hidden');}