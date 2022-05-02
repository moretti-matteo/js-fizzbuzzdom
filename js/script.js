const element = document.querySelector(".container");
console.log(element);

for (let i = 1; i <= 100; i++) {
    
    if (i % 5 === 0 && i % 3 === 0) {
        element.innerHTML += `<span class="elem red">FizzBuzz</span>`;
        console.log("FizzBuzz", i);

    } else if (i % 5 === 0) {
        element.innerHTML += `<span class="elem yellow">Buzz</span>`;
        console.log("Buzz", i);

    } else if (i % 3 === 0) {
        element.innerHTML += `<span class="elem green">Fizz</span>`;
        console.log("Fizz", i);

    } else {
        element.innerHTML += `<span class="elem blue">${i}</span>`;
        console.log(i);
    }
}