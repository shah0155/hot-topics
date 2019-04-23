const container = document.querySelector(".main-container");
const button = document.querySelectorAll(".dropdown-item");

function handleFetch(url) {
  fetch(url)
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      container.innerHTML = data;
    })
}
const content = {};

function testHandle(a) {
  fetch(a)
    .then((b) => {
      if (b.ok) {
        return b.json()
      }
    })
    .then((data) => {
      content.data = data;
    })
}

button.forEach((e) => {
  e.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.textContent === "Home") {
      container.innerHTML = "<h2>Fetch some data for me ... </h2>"
    } else {
      handleFetch(e.target.href, {
        mode: "no-cors"
      });
    }
  })
})