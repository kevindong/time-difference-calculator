const Alexa = require('alexa-sdk');

const helpMessage = "You can ask me the difference between two times.";
const welcomeMessage = "Hello, welcome to the time difference calculator. What are the two times you want me to calculate the difference between?";
const welcomeRepromt = "What are the two times you want me to calculate the difference between?";
const goodbyeMessage = "Good bye. Have a great day!";
const repromptMessage = "There was an error. Please say that again?";

const handlers = {
	'LaunchRequest': function () {
		this.emit(':ask', welcomeMessage, welcomeRepromt);
	},
	'getTimeDiff': function () {
		let begin = this.event.request.intent.slots.begin.value;
		let end = this.event.request.intent.slots.end.value;

		if (begin === undefined || begin === '' || end === undefined || end === '') {
			this.emit(':ask', 'Hmm, I didn\'t understand what you said. Please try again.', repromptMessage);
		}

		if (begin.indexOf(':') === -1 || end.indexOf(':') === -1) {
			this.emit(':ask', 'Oops something went wrong. Make sure that you are using actual times and try again.', repromptMessage);
		}

		let beginMinutes = getMinutes(begin);
		let endMinutes = getMinutes(end);

		let diff = endMinutes - beginMinutes;
		if (diff < 0) {
			diff = diff + (60 * 24);
		}

		let output = "";
		if (diff / 60 >= 1) {
			output += `${Math.floor(diff / 60)} hours and `;
		}
		output += `${diff % 60} minute`;
		if (diff % 60 !== 1) {
			output += 's';
		}
		this.emit(':tell', output);
	},
	'AMAZON.StopIntent': function () {
		this.emit(':tell', goodbyeMessage);
	},
	'AMAZON.HelpIntent': function () {
		this.emit(':ask', helpMessage, helpMessage);
	},
	'AMAZON.CancelIntent': function () {
		this.emit(":tell", goodbyeMessage);
	},
	'SessionEndedRequest': function () {
		this.emit('AMAZON.StopIntent');
	},
	'Unhandled': function () {
		this.emit(':ask', repromptMessage, repromptMessage);
	}
};

function getMinutes(value) {
	let hours = parseInt(value.split(':')[0]) * 60;
	let minutes = parseInt(value.split(':')[1])
	return (hours + minutes);
}

exports.handler = function (event, context, callback) {
	let alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};