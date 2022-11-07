(() => {
    let openModalBtn = document.getElementById("data-modal-open");
    let = closeModalBtn = document.getElementById("data-modal-close");
    let = modal = document.getElementById("data-modal");
  
    closeModalBtn.onclick = () => modal.style.display = "none";
    openModalBtn.onclick = () => modal.style.display = "block";

  })();