window.addEventListener("load", init);

// reference: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function init() {
    const dialog = document.querySelector("dialog");
    const subscribeBtn = document.querySelector("#subscribe-btn");
    const emailField = document.querySelector("input#email");
    const subscribedEmail = document.querySelector(".subscribed-email");
    const errorMsg = document.querySelector(".error-msg");

    function showErrorMsg() {
        errorMsg.classList.replace("invisible", "visible");
        emailField.classList.replace("field--default", "field--error");
    }

    function hideErrorMsg() {
        errorMsg.classList.replace("visible", "invisible");
        emailField.classList.replace("field--error", "field--default");
    }

    subscribeBtn.addEventListener("click", function () {
        if (validateEmail(emailField.value)) {
            subscribedEmail.innerHTML = emailField.value;
            hideErrorMsg();
            dialog.showModal();
        } else {
            showErrorMsg();
        }
    });

    dialog.addEventListener("close", function () {
        emailField.value = "";
    });
}
