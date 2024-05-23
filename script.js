var captcha = document.getElementById("captchagen")
var verifybtn = document.getElementById("verifybtn")
var input = document.getElementById("input")
let newarr = []

const printing = (newarr) => {
    let [a, b, c, d, e, f] = newarr

    console.log(a, b, c, d, e, f);

    captcha.textContent = a + b + c + d + e + f
}

const refresh = () => {
    let firstletter = Math.floor(Math.random() * 62)
    let secondletter = Math.floor(Math.random() * 62)
    let thirdletter = Math.floor(Math.random() * 62)
    let fourthletter = Math.floor(Math.random() * 62)
    let fifthletter = Math.floor(Math.random() * 62)
    let sixthletter = Math.floor(Math.random() * 62)

    const arr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'M', 'N', 'B', 'V', 'C', 'X', 'Z', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'P', 'O', 'I', 'U', 'Y', 'T', 'R', 'E', 'W', 'Q', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    for (let i = 0; i < arr.length; i++) {
        if (firstletter === i) {
            console.log(arr[i]);
            newarr.push(arr[i])
        }
        if (secondletter === i) {
            console.log(arr[i]);
            newarr.push(arr[i])
        }
        if (thirdletter === i) {
            console.log(arr[i]);
            newarr.push(arr[i])
        }
        if (fourthletter === i) {
            console.log(arr[i]);
            newarr.push(arr[i])
        }
        if (fifthletter === i) {
            console.log(arr[i]);
            newarr.push(arr[i])
        }
        if (sixthletter === i) {
            console.log(arr[i]);
            newarr.push(arr[i])
        }
    }
    printing(newarr)
}

refresh()

let [a, b, c, d, e, f] = newarr

verifybtn.addEventListener("click", function () {

    const refreshedcap = a + b + c + d + e + f

    if (input.value === "") {
        alert("You should enter the captcha...")
    } else if (refreshedcap === input.value) {
        alert("You have entered correctly...")
        newarr = []
    } else {
        alert("You have entered wrong captcha...")
        newarr = []
    }
    refresh()

    input.value = ""
})