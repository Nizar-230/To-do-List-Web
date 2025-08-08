const formList = document.getElementById("input");
const button = document.querySelector(".add");
const list = document.querySelector(".lup");
const check = document.querySelectorAll(".img");
const remove = document.querySelectorAll(".throw");


button.addEventListener("click", function () {
    const form = formList.value
    if (form === "") {
        alert("Anda belum memasukan teks")
        return;
    }

    const addList = document.createElement("li");
    const content = document.createElement("div");
    content.classList.add("content")

    const img = document.createElement("div");
    img.classList.add("img");

    const span = document.createElement("span");
    span.classList.add("we");
    span.textContent = form

    const hapus = document.createElement("div");
    hapus.classList.add("hapus");


    const del = document.createElement("i");
    del.classList.add("fa-solid", "fa-trash", "throw");


    content.appendChild(img);
    content.appendChild(span);
    addList.appendChild(content);
    addList.appendChild(hapus)
    hapus.appendChild(del);
    list.appendChild(addList)

    formList.value = "";

    hapus.addEventListener("click", function () {
        addList.remove();
    })

    if(e.target == list) {
         number++
    }

})



list.addEventListener("click", function (e) {

    if (e.target.classList.contains("img")) {
        e.target.classList.toggle("nis");
        e.target.parentElement.classList.toggle("sas");
    }
});


console.log(check)