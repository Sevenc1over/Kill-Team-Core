document.querySelectorAll(".operative-summary").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".operative-card");
    const open = card.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    const toggle = button.querySelector(".toggle");
    if (toggle) toggle.textContent = open ? "접기" : "상세 보기";
  });
});
