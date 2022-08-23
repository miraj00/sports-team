import {Player} from './Player';
import {Team} from './Team';

let player1: Player = {
  name: ' Someone',
  jersey: 777,
  active: true
}

let player2: Player = {
  name: ' Different',
  jersey: 555,
  active: false
}

let players: Player[] = [];
players.push(player1)
players.push(player2)

let team1: Team = new Team(players, 'The SkyDancers');

console.log(player1)
console.log(team1)







// // let word: string = 'hello';

//let firstname: string = 'Miraj';

//console.log(`Welcome ${firstname}`);
// use the back ticks

//console.log('Welcome ' + firstname);


// let exampleNumber: number = 10.5;

// let anotherExampleNumber: number = 12;


// let amount: number = 10;

// console.log(amount*2);
// console.log(amount /2);
// console.log(amount - 5);
// console.log(amount + 25 );

// let granted:boolean = true;


// //let count: number = 10;

// // count = null;
// // number can not be null later

// // This is ok -->  let count: number | null = 10;

// let count: number | string = 10;

// let anyVar: any = 10;

// anyVar = 'Bob';
// anyVar = true;


