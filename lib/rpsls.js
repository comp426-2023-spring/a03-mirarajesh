export function rps(option) {
	const accurate_options = ['rock', 'paper', 'scissors'];
	if (accurate_options == undefined) {
		return {
			'player': accurate_options[Math.floor(Math.random() * 3)]
		};
    } else if (!accurate_options.includes(accurate_options)) {
        throw new RangeError("Accurate options is out of range."); 
    } else {
        accurate_options = accurate_options.toLowerCase(); 
        competitor = accurate_options[Math.floor(Math.random() * 3)]; 
        var final; 
        //final equals tie 
        if (accurate_options == competitor) { 
            final = "tie"; } 
        // scissors versus rock
        if (accurate_options == "scissors" && competitor == "rock") {
            final = "lose"; }
        // paper versus rock 
        if (accurate_options == "paper" && competitor == "rock") {
            final = "win"; }
        // scissors verus paper 
        if (accurate_options == "scissors" && competitor == "paper") {
            final = "win"; }
        // rock versus paper 
        if (accurate_options == "rock" && competitor == "paper") {
            final = "lose"; } 
        // rock versus scissors 
        if (accurate_options == "rock" && competitor == "scissors") { 
            final = "win"; } 
        // paper versus scissors 
        if (accurate_options == "paper" && competitor == "scissors") {
            final = "lose"; }
    }
    return {
        player: accurate_options, 
        opponent: competitor, 
        final_score: final, 
    }
}
export function rpsls(option) {
	const accurate_options = ['rock','paper','scissors','lizard', 'spock'];
	if (accurate_options == undefined) {
		return {
			'player': accurate_options[Math.floor(Math.random() * 5)]
		};
    } else if (!accurate_options.includes(accurate_options)) {
        throw new RangeError("Accurate options is out of range."); 
    } else {
        accurate_options = accurate_options.toLowerCase(); 
        competitor = accurate_options[Math.floor(Math.random() * 5)]; 
        var final; 
        //final equals tie 
        if (accurate_options == competitor) { 
            final = "tie"; } 
        if (accurate_options == "spock" && (competitor == "scissors" || competitor == "rock")) {
            final = "win"; }
        if (accurate_options == "spock" && (competitor == "lizard" || competitor == "paper")) {
            final = "lose"; }
        if (accurate_options == "scissors" && (competitor == "lizard" || competitor == "paper")) {
            final = "win"; }
        if (accurate_options == "scissors" && (competitor == "spock" || competitor == "rock")) {
            final = "lose"; }
        if (accurate_options == "rock" && (competitor == "spock" || competitor == "paper")) {
            final = "lose"; }
        if (accurate_options == "rock" && (competitor == "lizard" || competitor == "scissors")) {
            final = "win"; } 
        if (accurate_options == "lizard" && (competitor == "scissors" || competitor == "rock")) {
            final = "lose"; }
        if (accurate_options == "lizard" && (competitor == "spock" || competitor == "paper")) {
            final = "win"; }
        if (accurate_options == "paper" && (competitor == "spock" || competitor == "rock")) {
            final = "win"; }
        if (accurate_options == "paper" && (competitor == "lizard" || competitor == "scissors")) {
            final = "lose"; }
        }
        return {
            player: accurate_options, 
            opponent: competitor, 
            final_score: final 
        }; 
    }

