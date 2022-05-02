const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
    const span = document.createElement("span");

    if (i % 5 === 0 && i % 3 === 0) {
        // container.innerHTML += `<span class="elem red">FizzBuzz</span>`;
        span.classList.add("elem","red");
        span.innerText = "FizzBuzz";
        container.append(span);
        console.log("FizzBuzz", i);

    } else if (i % 5 === 0) {
        // container.innerHTML += `<span class="elem yellow">Buzz</span>`;
        span.classList.add("elem","yellow");
        span.innerText = "Buzz";
        container.append(span);
        console.log("Buzz", i);

    } else if (i % 3 === 0) {
        // container.innerHTML += `<span class="elem green">Fizz</span>`;
        span.classList.add("elem","green");
        span.innerText = "Fizz";
        container.append(span);
        console.log("Fizz", i);

    } else {
        // container.innerHTML += `<span class="elem blue">${i}</span>`;
        span.classList.add("elem","blue");
        span.innerText = i;
        container.append(span);
        console.log(i);

    }
}