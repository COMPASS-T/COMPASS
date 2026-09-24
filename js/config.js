/* Where the frontend should send API requests.
 *
 * - Served by the COMPASS backend (http://localhost:4000, or your deployed
 *   domain): same origin, so API_BASE stays "".
 * - Opened through VS Code Live Server / any static host: point at the backend
 *   running separately on port 4000.
 *
 * Override manually if your backend runs elsewhere, e.g. in the page:
 *   <script>window.COMPASS_API_BASE = "http://192.168.1.10:4000";</script>
 */
(function () {
  if (typeof window.COMPASS_API_BASE === 'string') return;
  var servedByBackend = location.port === '' || location.port === '4000';
  window.COMPASS_API_BASE = servedByBackend ? '' : 'http://localhost:4000';
})();
