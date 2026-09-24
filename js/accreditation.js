const $ = id => document.getElementById(id);

/* SIDEBAR */
function toggleSidebar(){
  $('sidebar')?.classList.toggle('-translate-x-full');
  $('sidebarOverlay')?.classList.toggle('hidden');
}

function closeSidebar(){
  $('sidebar')?.classList.add('-translate-x-full');
  $('sidebarOverlay')?.classList.add('hidden');
}

/* HEADER DROPDOWNS */
const notifBtn = $('notifBtn');
const notifDropdown = $('notifDropdown');
const avatarBtn = $('avatarBtn');
const userDropdown = $('userDropdown');
const searchInput = $('searchInput');
const searchDropdown = $('searchDropdown');

notifBtn?.addEventListener('click', e => {
  e.stopPropagation();
  userDropdown?.classList.add('hidden');
  searchDropdown?.classList.add('hidden');
  notifDropdown?.classList.toggle('hidden');
});

avatarBtn?.addEventListener('click', e => {
  e.stopPropagation();
  notifDropdown?.classList.add('hidden');
  searchDropdown?.classList.add('hidden');
  userDropdown?.classList.toggle('hidden');
});

searchInput?.addEventListener('focus', () => {
  notifDropdown?.classList.add('hidden');
  userDropdown?.classList.add('hidden');
  searchDropdown?.classList.remove('hidden');
});

document.addEventListener('click', e => {
  if(!notifBtn?.contains(e.target) && !notifDropdown?.contains(e.target))
    notifDropdown?.classList.add('hidden');

  if(!avatarBtn?.contains(e.target) && !userDropdown?.contains(e.target))
    userDropdown?.classList.add('hidden');

  if(!searchInput?.contains(e.target) && !searchDropdown?.contains(e.target))
    searchDropdown?.classList.add('hidden');
});

/* NOTIFICATION */
$('markAllReadBtn')?.addEventListener('click', () => {
  $('notifBadge')?.classList.add('hidden');
  notifDropdown?.classList.add('hidden');
});

/* TOAST */
function showToast(message){
  const toast = $('successToast');
  const msg = $('toastMsg');

  if(!toast || !msg) return;

  msg.textContent = message;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2200);
}

/* PREVIEW EVIDENCE */
function openEvidence(){
  if($('evidenceModal')){
    $('evidenceModal').classList.remove('hidden');
    $('evidenceModal').classList.add('flex');
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'evidenceModal';
  modal.className = 'fixed inset-0 z-[300] bg-black/30 flex items-center justify-center p-4';

  modal.innerHTML = `
    <div class="bg-white w-full max-w-[760px] max-h-[90vh] overflow-y-auto rounded-xl border border-gray-200 shadow-xl">

      <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 class="text-[16px] font-bold text-gray-900">
            Accreditation Evidence Preview
          </h2>
          <p class="text-[11px] text-gray-500 mt-1">
            CHED and AACCUP accreditation evidence summary
          </p>
        </div>

        <button onclick="closeEvidence()"
          class="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-500 text-lg">
          ×
        </button>
      </div>

      <div class="p-6">

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">

          <div class="border border-gray-200 rounded-lg p-3">
            <p class="text-[9px] text-gray-500 font-semibold uppercase">
              Employment
            </p>
            <p class="text-[20px] font-bold mt-1">6/6</p>
            <p class="text-[10px] text-green-600 mt-1">Complete</p>
          </div>

          <div class="border border-gray-200 rounded-lg p-3">
            <p class="text-[9px] text-gray-500 font-semibold uppercase">
              Surveys
            </p>
            <p class="text-[20px] font-bold mt-1">5/6</p>
            <p class="text-[10px] text-amber-600 mt-1">1 pending</p>
          </div>

          <div class="border border-gray-200 rounded-lg p-3">
            <p class="text-[9px] text-gray-500 font-semibold uppercase">
              Feedback
            </p>
            <p class="text-[20px] font-bold mt-1">4/6</p>
            <p class="text-[10px] text-amber-600 mt-1">2 pending</p>
          </div>

          <div class="border border-gray-200 rounded-lg p-3">
            <p class="text-[9px] text-gray-500 font-semibold uppercase">
              Curriculum
            </p>
            <p class="text-[20px] font-bold mt-1">6/6</p>
            <p class="text-[10px] text-green-600 mt-1">Complete</p>
          </div>

          <div class="border border-gray-200 rounded-lg p-3">
            <p class="text-[9px] text-gray-500 font-semibold uppercase">
              Competency
            </p>
            <p class="text-[20px] font-bold mt-1">3/6</p>
            <p class="text-[10px] text-red-500 mt-1">3 missing</p>
          </div>

        </div>

        <div class="border border-gray-200 rounded-xl overflow-hidden">

          <div class="px-4 py-3 border-b border-gray-200">
            <h3 class="text-[13px] font-semibold text-gray-900">
              Evidence Summary
            </h3>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-[11px]">

              <thead class="bg-gray-50 text-gray-500">
                <tr>
                  <th class="text-left px-4 py-3">Program</th>
                  <th class="text-center px-3 py-3">Employment</th>
                  <th class="text-center px-3 py-3">Survey</th>
                  <th class="text-center px-3 py-3">Feedback</th>
                  <th class="text-center px-3 py-3">Curriculum</th>
                  <th class="text-center px-3 py-3">Competency</th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-100">

                ${previewRow(
                  'BSIT',
                  'Available',
                  'Available',
                  'Available',
                  'Available',
                  'Available'
                )}

                ${previewRow(
                  'BSCS',
                  'Available',
                  'Available',
                  'Available',
                  'Available',
                  'Available'
                )}

                ${previewRow(
                  'BSIS',
                  'Available',
                  'Available',
                  'Needs Review',
                  'Available',
                  'Insufficient'
                )}

                ${previewRow(
                  'BSCpE',
                  'Available',
                  'Available',
                  'Available',
                  'Available',
                  'Insufficient'
                )}

                ${previewRow(
                  'BSBA',
                  'Available',
                  'Available',
                  'Available',
                  'Available',
                  'Needs Review'
                )}

                ${previewRow(
                  'BSA',
                  'Available',
                  'Needs Review',
                  'Needs Review',
                  'Available',
                  'Insufficient'
                )}

              </tbody>
            </table>
          </div>
        </div>

        <div class="mt-5 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p class="text-[12px] font-semibold text-gray-900">
            Evidence requiring attention
          </p>

          <div class="mt-3 space-y-2 text-[11px] text-gray-600">
            <p>• BSA alumni survey requires review.</p>
            <p>• BSIS and BSA employer feedback requires review.</p>
            <p>• BSIS, BSCpE and BSA competency reports are insufficient.</p>
          </div>
        </div>

      </div>

      <div class="px-6 py-4 border-t border-gray-200 flex justify-end gap-2">

        <button onclick="closeEvidence()"
          class="px-4 py-2 border border-gray-200 rounded-lg text-[12px] font-semibold text-gray-700 hover:bg-gray-50">
          Close
        </button>

        <button onclick="exportEvidence()"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg text-[12px] font-semibold hover:bg-blue-700">
          Export Package
        </button>

      </div>

    </div>
  `;

  document.body.appendChild(modal);

  modal.addEventListener('click', e => {
    if(e.target === modal) closeEvidence();
  });
}

/* PREVIEW TABLE ROW */
function previewRow(program, employment, survey, feedback, curriculum, competency){
  return `
    <tr>
      <td class="px-4 py-3 font-semibold">${program}</td>
      <td class="text-center px-3">${statusBadge(employment)}</td>
      <td class="text-center px-3">${statusBadge(survey)}</td>
      <td class="text-center px-3">${statusBadge(feedback)}</td>
      <td class="text-center px-3">${statusBadge(curriculum)}</td>
      <td class="text-center px-3">${statusBadge(competency)}</td>
    </tr>
  `;
}

/* BADGE COLORS */
function statusBadge(status){
  let style = 'bg-blue-50 text-blue-700';

  if(status === 'Needs Review')
    style = 'bg-gray-100 text-gray-700';

  if(status === 'Insufficient')
    style = 'bg-red-50 text-red-600';

  return `
    <span class="inline-block px-2 py-1 rounded-full ${style} text-[10px] font-medium whitespace-nowrap">
      ${status}
    </span>
  `;
}

/* CLOSE PREVIEW */
function closeEvidence(){
  const modal = $('evidenceModal');

  if(!modal) return;

  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

/* EXPORT BUTTON */
function exportEvidence(){
  closeEvidence();
  showToast('Compiling accreditation evidence package...');
}

/* ESC CLOSE */
document.addEventListener('keydown', e => {
  if(e.key === 'Escape')
    closeEvidence();
});

/* LOGOUT */
$('logoutBtn')?.addEventListener('click', () => {
  console.log('Logout clicked');
});