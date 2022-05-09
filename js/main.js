let guestName = document.getElementById("yourname");
let guestSurname = document.getElementById("yoursurname");
let guestNumber = document.getElementById("yourphone");
document.getElementsByTagName("button")[0].onclick = function () {
    console.log(guestName.value);
    document.getElementById("name").textContent = guestName.value;
    console.log(guestSurname.value);
    document.getElementById("surname").textContent = guestSurname.value;
    console.log(guestNumber.value);
    document.getElementById("phone").textContent = guestNumber.value;
}



