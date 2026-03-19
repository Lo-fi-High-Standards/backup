// *** tekstombrydning - horeunger ***

function preventOrphans(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    const words = el.innerHTML.trim().split(" ");

    if (words.length > 2) {
      const lastTwo = words.slice(-2).join("&nbsp;");
      const rest = words.slice(0, -2).join(" ");
      el.innerHTML = rest + " " + lastTwo;
    }
  });
}

// kør når siden er loaded
document.addEventListener("DOMContentLoaded", () => {
  preventOrphans(".howItWorks_card li");
});
