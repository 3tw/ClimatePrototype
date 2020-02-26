document.addEventListener('DOMContentLoaded', function() {
    let textElement = document.getElementById("text").innerText;
    let textArray = textElement.split(" ");
    let insert1 = "You can refresh this page";
    let insert2 = "not our planet";

    // Functions
    let timer = (execute, time, wordLength) => setTimeout(execute, time, wordLength)

    function filter(array, number) {
        return array.filter(word => word.toString().length > number)
    }

    function eraseText(wordLength) {
        let newArray = filter(textArray, wordLength);
        let newText = newArray.join(" ");

        document.getElementById("text").innerText = newText;
    }

    function setTimers() {
        let time = 0;
        let criterion = 0;

        setTimeout(() => {
            for (let i=0; i < 12; i++) {
                time += 500;
                criterion += 1.25;
                timer(eraseText, time, criterion);
            }
        }, 3000)
    }

    function displayText(node, input, timer) {
        setTimeout(() => {
            document.getElementById(node).innerText = input
        }, timer)
    }

    // Execute code
    setTimers()
    displayText("text", insert1, 11000)
    displayText("text2", insert2, 13000)

}, false);