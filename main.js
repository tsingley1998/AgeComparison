function getAge() {
    let num = document.getElementById('num').value;
    let result = document.getElementById('result');

    if (num > 21) {
        result.innerText = "You are older than me!";
    }

    console.log(num > 21);

    if (num < 21) {
        result.innerText = "You are younger than me!";
    }

    console.log(num < 21)

    if (num == 21) {
        result.innerText = "You are the same age as me!";
    }

    console.log(num === 21)

    if (isNaN(num)) {
        result.innerText = "Not a number, try again!"
    }
}