#!/usr/bin/env node
//import statements 
import minimist from "minimist"; 
import { rpsls } from "../lib/rpsls.js"; 
let args = minimist(process.argv.slice(2)); 
//help message 
if (args.h || args.help) { 
    console.log('Usage: node-rps [SHOT]')
    console.log('\nPlay Rock Paper Scissors (RPS)')
    console.log('\n\n\t-h, --help      display this help message and exit')
    console.log('\n\t-r, --rules     display the rules and exit' )
    console.log('\n\nExamples:')
    console.log('\n\tnode-rps        Return JSON with single player RPS result.')
    console.log('\n\t\te.g. {"player":"rock"}')
    console.log( '\n\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.')
    console.log( '\n\t\te.g {"player":"rock","opponent":"scissors","result":"win"}');
    process.exit(0); 
}
if (args.r || args.rules) { 
    console.log('Rules for Rock Paper Scissors:')
    console.log('- Scissors CUTS Paper')
    console.log('- Paper COVERS Rock')
    console.log('- Rock CRUSHES Scissors'); 
    process.exit(0); 
}
try {
    console.log(JSON.stringify(rps(args._[0]))); 
} catch(error) {
    console.log('Usage: node-rps [SHOT]')
    console.log('\nPlay Rock Paper Scissors (RPS)')
    console.log('\n\n\t-h, --help      display this help message and exit')
    console.log('\n\t-r, --rules     display the rules and exit' )
    console.log('\n\nExamples:')
    console.log('\n\tnode-rps        Return JSON with single player RPS result.')
    console.log('\n\t\te.g. {"player":"rock"}')
    console.log( '\n\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.')
    console.log( '\n\t\te.g {"player":"rock","opponent":"scissors","result":"win"}')
    console.log('Rules for Rock Paper Scissors:')
    console.log('- Scissors CUTS Paper')
    console.log('- Paper COVERS Rock')
    console.log('- Rock CRUSHES Scissors'); 
    process.exit(); 
}