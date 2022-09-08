/* ---------------------------- Const Section ---------------------------- */
const btn = document.getElementById("btn");

/* --------------------------- Add Event Listiner --------------------------- */
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const test = document.querySelectorAll("div > input");
  document.querySelectorAll("div > input").forEach((ele) => {
    if (ele.value == "") ele.classList.add("errore");
    if (ele.id == "email") {
      const email = ele;
      const regex = /\w+@(gmail|yahoo|\w+).(com|net|org)/gi;
      if (!regex.test(email.value)) email.classList.add("errore");
    }
  });
});
