
//Math.round gets a floating number close to 1, we multiply by 6 and add it by 1
//to get a random number between [1,6]

function rollDice(){
	const randomNumber1 = Math.floor(Math.random() * 6) + 1;
	const randomNumber2 = Math.floor(Math.random() * 6) + 1;


	document.querySelector(".img1").setAttribute('src', `images/dice${randomNumber1}.png`)
	document.querySelector(".img2").setAttribute('src', `images/dice${randomNumber2}.png`)

	if(randomNumber1 > randomNumber2){
			document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
	}else if(randomNumber1 < randomNumber2){
			document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
	}
	else(
			document.querySelector("h1").innerHTML = "Draw!"
	)
}