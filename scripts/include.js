document.addEventListener("DOMContentLoaded", () => {
  const includeHTML = async () => {
    const elements = document.querySelectorAll("[data-include]");
    for (let el of elements) {
      const file = el.getAttribute("data-include");
      try {
        const resp = await fetch(file);
        if (!resp.ok) throw new Error("Ошибка загрузки " + file);
        el.innerHTML = await resp.text();
      } catch (err) {
        console.error(err);
        el.innerHTML = "<p>Ошибка загрузки компонента</p>";
      }
    }
  };
  includeHTML();
});
