function openRSVP() {
    document.getElementById("rsvp-form").classList.remove("hidden");
}

function submitRSVP() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name && email) {
        document.getElementById("confirmation").classList.remove("hidden");
    } else {
        alert("Өтінемін, барлық өрістерді толтырыңыз!");
    }
}