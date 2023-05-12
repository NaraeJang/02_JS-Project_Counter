//set counter
let count = 0;

//select values
const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else if (styles.contains("increase")) {
      count++;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count === 0) {
      value.style.color = "#222";
    } else if (count < 0) {
      value.style.color = "red";
    }

    value.textContent = count;
  });
});
