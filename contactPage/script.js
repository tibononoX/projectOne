//Button Submit
const message ="Thank you for your email, the team will answer you quickly";

document.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
})