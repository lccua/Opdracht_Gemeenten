let name;
const myArray = [];

const setup = () => {
    askInput()
    sortArray()
}

const askInput = () => {
    // Loop to get input from user
    do {
        name = window.prompt("Geef een gemeente in (of 'stop' om te stoppen)?");
        console.log(name)

        // Add input to array if it's not "stop"
        if (name !== "stop"){
            myArray.push(name);
        }
    } while (name !== "stop");}

const sortArray = () => {
    // Sort array alphabetically
    myArray.sort(compare);

    // Loop through array and add options to select element
    for (let i = 0; i < myArray.length; i++) {
        let select = document.querySelector("select")
        select.insertAdjacentHTML("beforeend",`<option>${myArray[i]}</option>`)
    }
}

// Compare function used to sort array alphabetically
const compare = (a,b) => {
    return a.localeCompare(b);
}

// Call setup function when page is loaded
window.addEventListener("load", setup);
