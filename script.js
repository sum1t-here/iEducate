burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".navList");
rightnav = document.querySelector(".rightnav");

burger.addEventListener("click", () => {
  rightnav.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});

// for the editor

function run() {
  let html = document.getElementById("html").value;
  let css = document.getElementById("css").value;
  let js = document.getElementById("js").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
  output.contentWindow.eval(js);
}
