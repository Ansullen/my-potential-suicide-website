/* My Potential Suicide -- site scripts
   - mobile nav toggle
   - logo glitch on hover/tap
   - mark past shows automatically
   - contact form -> mailto (no backend needed)
   - footer year
   - background song-title wall
*/
(function () {
  "use strict";

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "CLOSE" : "MENU";
    });
  }

  // Logo glitch
  document.querySelectorAll(".glitch").forEach(function (el) {
    var fire = function () {
      if (el.classList.contains("is-glitching")) return;
      el.classList.add("is-glitching");
      setTimeout(function () { el.classList.remove("is-glitching"); }, 750);
    };
    el.addEventListener("mouseenter", fire);
    el.addEventListener("touchstart", fire, { passive: true });
  });

  // Past shows: any <li class="show" data-date="YYYY-MM-DD"> before today gets .show--past
  var today = new Date(); today.setHours(0, 0, 0, 0);
  document.querySelectorAll(".show[data-date]").forEach(function (li) {
    var d = new Date(li.getAttribute("data-date") + "T00:00:00");
    if (!isNaN(d) && d < today) {
      li.classList.add("show--past");
      var btn = li.querySelector(".btn");
      if (btn) { btn.textContent = "PAST"; btn.removeAttribute("href"); }
    }
  });

  // Contact form -> mailto
  var form = document.querySelector("form.form[data-mailto]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = "[" + (data.get("topic") || "Contact") + "] " + (data.get("name") || "");
      var body = "From: " + data.get("name") + " <" + data.get("email") + ">\n\n" + data.get("message");
      window.location.href = "mailto:" + form.getAttribute("data-mailto") +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  // Background song titles (decorative, hidden from screen readers)
  var songs = ["Right Back Out", "Tantalize", "I Wanna Know", "Candidiasis",
    "The Version That Quit", "Fading All That Isn't There", "Another Day", "Rhodesia"];
  var wall = document.createElement("div");
  wall.className = "bg-words";
  wall.setAttribute("aria-hidden", "true");
  for (var i = 0; i < 6; i++) {
    songs.forEach(function (title, j) {
      var span = document.createElement("span");
      span.textContent = title;
      if ((i + j) % 2) span.className = "is-outline";
      wall.appendChild(span);
    });
  }
  document.body.insertBefore(wall, document.body.firstChild);

  // Year
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
