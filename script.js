const formList = document.getElementById("input");
const button = document.querySelector(".add");
const list = document.querySelector(".lup");
const check = document.querySelectorAll(".img");
const remove = document.querySelectorAll(".throw");
const addNum = document.getElementById("amound-at");
const addNum2 = document.getElementById("task-suscesfulk");

let number = 0;
let number2 = 0;

button.addEventListener("click", function (e) {
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

    hapus.addEventListener("click", function (e) {
        addList.remove();
        if (e.target) {
            number--
        }
        
        const meChar = e.target.closest("li").querySelector(".content").classList.contains("sas");
        const minChar = e.target.classList.contains("fa-solid");

        if (meChar && minChar) {
            number2--
        }

        addNum.textContent = number
        addNum2.textContent = number2
    })

    if (e.target) {
        number++;
    }

    addNum.textContent = number

})

list.addEventListener("click", function (e) {

    if (e.target.classList.contains("img")) {
        e.target.classList.toggle("nis");
        e.target.parentElement.classList.toggle("sas");
    }

    if (e.target.closest(".content").classList.contains("sas")) {
        number2++;
    } else {
        number2--;
    }

    addNum2.textContent = number2
    addNum.textContent = number

});

console.log(number2)
console.log(addNum)
console.log(check)
