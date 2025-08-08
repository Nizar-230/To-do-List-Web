const formList = document.getElementById("input");
const button = document.querySelector(".add");
const list = document.querySelector(".lup");
const check = document.querySelectorAll(".img");
const remove = document.querySelectorAll(".throw");

button.addEventListener("click", function() {
    const form = formList.value
    if (form === "") {
        alert("Anda belum memasukan teks")
    }

    const addList = document.createElement("li");
    addList.innerHTML = `
                    <div class="contaent">
                        <div class="img"></div> <span class="we"> ${form} </span>
                    </div><div class="hapus"><i class="fa-solid fa-trash throw"></i></div>
                `
    list.appendChild(addList);

    formList.value = "";
})

check.forEach(function (e) {
    e.addEventListener("click", function(){
        e.target.classList.toggle("nis");
        e.parentElement.classList.toggle("sas");
    })
})


del.addEventListener("click", function(e) {
    if(e.target.classList.contains("hapus")) {
        addList.target.parentElement.remove();
    }
})


console.log(check)