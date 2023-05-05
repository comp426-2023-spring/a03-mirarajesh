#!/usr/bin/env node
//import statements 
import minimist from "minimist"; 
import { rps } from "../lib/rpsls.js"; 
let args = minimist(process.argv.slice(2)); 
//help message 
if (args.h || args.help) { 
    console.log('Usage: node-rpsls [SHOT]')
    console.log('\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!')
    console.log('\n\n\t -h, --help        display this help message and exit')
    console.log('\n\t-r, --rules       display the rules and exit' )
    console.log('\n\nExamples:')
    console.log('\n\tnode-rpsls        Return JSON with single player RPSLS result.')
    console.log('\n\t\te.g. {"player":"rock"}')
    console.log( '\n\tnode-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.')
    console.log( '\n\t\te.g {"player":"rock","opponent":"Spock","result":"lose"}');
    process.exit(0); 
}
if (args.r || args.rules) { 
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:')
    console.log('- Scissors CUTS Paper')
    console.log('- Paper COVERS Rock')
    console.log('- Rock SMOOSHES Lizard'); 
    console.log('- Lizard POISONS Spock'); 
    console.log('- Spock SMASHES Scissors'); 
    console.log('- Scissors DECAPITATES Lizard'); 
    console.log('- Lizard EATS Paper'); 
    console.log('- Paper DISPROVES Spock'); 
    console.log('- Spock VAPORIZES Rock'); 
    console.log('- Rock CRUSHES Scissors'); 
    process.exit(0); 
}
try {
    console.log(JSON.stringify(rps(args._[0]))); 
} catch(error) {
    console.log('Usage: node-rpsls [SHOT]')
    console.log('\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!')
    console.log('\n\n\t -h, --help        display this help message and exit')
    console.log('\n\t-r, --rules       display the rules and exit' )
    console.log('\n\nExamples:')
    console.log('\n\tnode-rpsls        Return JSON with single player RPSLS result.')
    console.log('\n\t\te.g. {"player":"rock"}')
    console.log( '\n\tnode-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.')
    console.log( '\n\t\te.g {"player":"rock","opponent":"Spock","result":"lose"}');
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:')
    console.log('- Scissors CUTS Paper')
    console.log('- Paper COVERS Rock')
    console.log('- Rock SMOOSHES Lizard'); 
    console.log('- Lizard POISONS Spock'); 
    console.log('- Spock SMASHES Scissors'); 
    console.log('- Scissors DECAPITATES Lizard'); 
    console.log('- Lizard EATS Paper'); 
    console.log('- Paper DISPROVES Spock'); 
    console.log('- Spock VAPORIZES Rock'); 
    console.log('- Rock CRUSHES Scissors');
    process.exit(); 
}