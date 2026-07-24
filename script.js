document.addEventListener("DOMContentLoaded", function () {
  var t = document.querySelector(".nav-toggle"), n = document.querySelector(".main-nav");
  if (t && n) { t.addEventListener("click", function () { n.classList.toggle("is-open"); }); }
  var b = document.getElementById("backToTop");
  if (b) {
    var f = function () { if (window.scrollY > 500) b.classList.add("is-visible"); else b.classList.remove("is-visible"); };
    window.addEventListener("scroll", f, { passive: true }); f();
    b.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  }
});
