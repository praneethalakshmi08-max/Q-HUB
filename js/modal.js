/* Modal Dialog System */
const overlay = document.getElementById('modal-overlay');
const modalBox = document.getElementById('modal-box');

function openModal(html) {
  if (!modalBox || !overlay) return;
  modalBox.innerHTML = `<button class="modal-close" id="modal-close-btn"> ✕ </button>${html}`;
  overlay.classList.add('open');
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
}

function closeModal() {
  if (!overlay || !modalBox) return;
  overlay.classList.remove('open');
  modalBox.innerHTML = '';
}

function initModalSystem() {
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const apiBtn = document.getElementById('connect-api-btn');
  if (apiBtn) {
    apiBtn.addEventListener('click', () => {
      openModal(`
        <h3>Connect Hardware Provider</h3>
        <div class="m-sub">Route circuits from the composer to a real QPU.</div>
        <label>Provider</label>
        <select id="provider-select">
          <option>IBM Quantum</option>
          <option>AWS Braket</option>
          <option>Azure Quantum</option>
        </select>
        <label>API Key</label>
        <input id="api-key-input" type="password" placeholder="Paste your API key…">
        <div class="modal-status" id="api-status"></div>
        <div class="modal-actions">
          <button class="btn small" id="api-submit-btn" style="flex:1; justify-content:center;">Connect</button>
          <button class="btn ghost small" id="api-cancel-btn" style="flex:1; justify-content:center;">Cancel</button>
        </div>
      `);
      document.getElementById('api-cancel-btn').addEventListener('click', closeModal);
      document.getElementById('api-submit-btn').addEventListener('click', () => {
        const key = document.getElementById('api-key-input').value.trim();
        const status = document.getElementById('api-status');
        if (!key) {
          status.className = 'modal-status warn';
          status.textContent = '⚠ Enter a key to connect — this demo does not store or transmit it anywhere.';
          return;
        }
        status.className = 'modal-status ok';
        status.textContent = '✓ Provider linked (simulated session).';
        setTimeout(closeModal, 1200);
      });
    });
  }
}
