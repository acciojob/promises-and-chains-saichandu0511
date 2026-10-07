//your JS code here. If required.
const form = document.getElementById("form");
const age = document.getElementById("age");
const name = document.getElementById("name");
const btn = document.getElementById("btn");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (age.value === "" || name.value === "") {
        alert("Please enter valid details.");
        return;
    }

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Number(age.value) > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
    });

    promise
        .then(function () {
            alert("Welcome, " + name.value + ". You can vote.");
        })
        .catch(function () {
            alert("Oh sorry " + name.value + ". You aren't old enough.");
        });
});