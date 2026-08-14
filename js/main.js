(function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var offen = nav.classList.toggle("offen");
      toggle.setAttribute("aria-expanded", offen ? "true" : "false");
      toggle.setAttribute("aria-label", offen ? "Menü schließen" : "Menü öffnen");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("offen");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
})();


(function () {
  var jahr = document.getElementById("jahr");
  if (jahr) {
    jahr.textContent = new Date().getFullYear();
  }
})();
