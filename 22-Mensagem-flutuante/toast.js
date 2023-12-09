const toastElList = document.querySelectorAll(".toast");
const toastList = [...toastElList].map((toastEl) => {
    const toast = new bootstrap.Toast(toastEl, {});
    toast.show();
});

const btnToast = document.getElementById("btnToast");
btnToast.addEventListener("click", () => {
    const toast = document.getElementById("toast-exemplo");
    const container = document.getElementById("toastContainer");
    const novoToast = toast.cloneNode(true);
    novoToast.lastElementChild.innerHTML = "Mensagem em " + Date();
    container.appendChild(novoToast);
    const bsToast = new bootstrap.Toast(novoToast, {});
    bsToast.show();
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));


/* 
const btnToast = document.getElementById("btnToast");
    const container = document.getElementById("toastContainer");

    btnToast.addEventListener("click", () => {
      const novoToast = document.createElement("div");
      novoToast.classList.add("toast");
      novoToast.setAttribute("role", "alert");
      novoToast.setAttribute("aria-live", "assertive");
      novoToast.setAttribute("aria-atomic", "true");

      novoToast.innerHTML = `
        <div class="toast-header">
          <i class="bi-info-circle me-1"></i>
          <strong class="me-auto">Informação</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fechar"></button>
        </div>
        <div class="toast-body">
          Mensagem em ${new Date()}
        </div>
      `;

      container.appendChild(novoToast);

      const bsToast = new bootstrap.Toast(novoToast, {});
      bsToast.show();
    });
*/