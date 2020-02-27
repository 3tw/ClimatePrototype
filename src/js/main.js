document.addEventListener('DOMContentLoaded', function() {
	let textElement = document.getElementById("text").innerText;
	
	// Array of letters
	let letterArray = textElement.split("");

	// Array of words after letters have been changed
	let modifedText = textElement

	// Text to insert
    let insert1 = "You can refresh this page";
	let insert2 = "not our planet";
	
    // Timer
    let timer = (executeFn, time, original, replace) => setTimeout(executeFn, time, original, replace)

	// Filter and delete words
    function filterWords(array, number) {
        return array.filter(word => word.toString().length > number)
	}
	
	function eraseWords(original, replace) {
        let newArray = filterWords(modifedText.split(" "), original);
		let newText = newArray.join(" ");

        document.getElementById("text").innerText = newText;
	}

	// Filter and delete letters
	function changeLetter(array, original, replace) {
        return array.map(item => item.replace(original, replace))
	}

	function eraseLetters(original, replace) {
		let newArray = changeLetter(letterArray, original, replace);
		let newText = newArray.join("");
		letterArray = newArray;
		modifedText = newText ;

        document.getElementById("text").innerText = newText;
	}

	// Show final text
    function displayText(node, input, timer) {
        setTimeout(() => {
            document.getElementById(node).innerText = input
        }, timer)
    }

	// Execute code
	timer(eraseLetters, 7000, "m", "n");
	timer(eraseLetters, 8000, "o", "s");
	timer(eraseLetters, 9000, "b", "p");
	timer(eraseLetters, 10000, "t", "l");
	timer(eraseLetters, 10000, "e", "i");
	timer(eraseLetters, 11000, "f", "c");
	timer(eraseLetters, 11000, "a", "o");
	timer(eraseLetters, 12000, "c", "k");

	timer(eraseWords, 13000, 1, 0);
	timer(eraseWords, 13500, 2, 0);
    timer(eraseWords, 14000, 4, 0);
	timer(eraseWords, 14500, 5, 0);
	timer(eraseWords, 15000, 7, 0);
	timer(eraseWords, 15500, 9, 0);
	timer(eraseWords, 16000, 12, 0);
	timer(eraseWords, 16500, 15, 0);

    displayText("text", insert1, 18000);
	displayText("text2", insert2, 20000);
	 
}, false);