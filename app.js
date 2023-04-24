let btn = document.querySelector('button');
let fortune = document.querySelector('#fortune');

let responses = [
	'It is certain.',
	'It is decidedly so.',
	'Without a doubt.',
	'Yes - definitely.',
	'You may rely on it.',
	'As I see it, yes.',
	'Most likely.',
	'Outlook good.',
	'Yes.',
	'Signs point to yes.',
	'Reply hazy, try again.',
	'Ask again later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',
	'Don\'t count on it.',
	'My reply is no.',
	'My sources say no.',
	'Outlook not so good.',
	'Very doubtful.'
];

let loading = [
	'Consulting the spirits...',
	'Gazing into the depths of the future...',
	'BRB, jumping into my time machine...',
	'I see... I see...'
];

let timeout;

function shuffle (array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

}


btn.addEventListener('click', getFortune);

function getFortune() {

    shuffle(loading)
    fortune.textContent = loading[0];

    clearTimeout(timeout);

    timeout = setTimeout(function () {
        shuffle(responses);
        fortune.textContent = responses[0];
    }, 2000);


};