console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");

const sortByRate = (parkA, parkB) => {
    const parkARate = parkA.querySelector(".rating .value").innerText;
    const parkBRate = parkB.querySelector(".rating .value").innerText;
    if (parseFloat(parkARate) < parseFloat(parkBRate)) {
        return 1;
    } else if(parseFloat(parkARate) > parseFloat(parkBRate)) {
        return -1;
    } else {
        return 0;
    }
}

const rateSorterClickHandler = (event) => {
    event.preventDefault();
    const main = document.querySelector("main")
    const parkList = main.querySelectorAll(".park")
    main.innerHTML = "";
    const parksArray = Array.from(parkList);
    parksArray.sort(sortByRate);
    parksArray.forEach((park) => {
        main.appendChild(park)
    })
}

const rateSorter = document.querySelector("#ratingSorter");
rateSorter.addEventListener("click", rateSorterClickHandler);