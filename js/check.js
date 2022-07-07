let newCommentBlock = document.querySelector(".testimonials__slider");
let addButton = document.querySelector(".comButton");
let errorSection = document.querySelector("#commentError");

addButton.addEventListener('click', function(){

    let commentSection = document.querySelector(".newComment_section__row");
    errorSection.innerHTML = "";

    if(document.querySelector('.comName').value.length < 4){
        errorSection.innerHTML = "Ошибка! Введенное имя меньше 4 символов."
        return false;
    }else if(document.querySelector('.comMessage').value.length < 10){
        errorSection.innerHTML = "Ошибка! Введенное сообщение меньше 10 символов."
        return false;
    }
});