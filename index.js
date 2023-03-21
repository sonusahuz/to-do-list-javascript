const addnote = document.getElementById("addnote");
const closePopUp = document.getElementById("close");
// this is a close box function  ===================================

closePopUp.addEventListener("click", function () {
  const popbox = document.getElementById("popbox");

  popbox.classList.remove("active");
});

// this is a popup box function ============================
addnote.addEventListener("click", function () {
  const popbox = document.getElementById("popbox");
  popbox.classList.toggle("active");
});

// this is a input value get function ===========================
const addnotebtn = document.getElementById("addnotebtn");
addnotebtn.addEventListener("click", function (e) {
  e.preventDefault();
  const title = document.getElementById("title");
  const textArea = document.getElementById("textarea");
  if (title.value.trim() == "" && textArea.value.trim() == "") {
    alert("plesase enter some note");
  } else {
    const boxApplend = document.getElementById("box");
    const create = document.createElement("div");
    create.classList.add("active");
    create.innerHTML = `<div class="note"> <h1>${title.value}</h1>
        <p>${textArea.value}</p>
        <hr />
        <ion-icon name="create-outline" id="edit"></ion-icon>
         <ion-icon name="trash-outline" id="trash2"></ion-icon></div>`;
    boxApplend.appendChild(create);
    const popbox = document.getElementById("popbox");
    popbox.classList.remove("active");
    title.value = "";
    textArea.value = "";
  }
});

// this is a delete note functin=====================
