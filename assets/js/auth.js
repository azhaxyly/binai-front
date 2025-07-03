document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".button--signin");
  const modal = document.getElementById("loginModal");
  const closeBtn = modal.querySelector(".modal-close");

  loginBtn.addEventListener("click", e => {
    e.preventDefault();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });
});
