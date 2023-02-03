const container = document.querySelector(".container"),
qrInput = document.querySelector(".form input"),
generateBtn= document.querySelector(".form button"),
qrImg= document.querySelector(".qr-code img")


generateBtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    if(!qrValue)return;
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrValue}`;
    container.classList.add("active");
})
