/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};
const Car={
  type:'truck',
  color:'black',
  name:'mustang'
  
};
const sportscar=Object.create(Car);
console.log(sportscar.type);
sportscar.type='sports';
console.log(sportscar.type);

//using constructor function
function Tech(lang,demand,future)
{
  this.lang=lang;
  this.demand=demand;
  this.future=future;
}
const android=new Tech('kotlin', 'high', 'good');
const blockchain=new Tech('Solidity','Extream','Bright;)');
//accessed by Dot notation
console.log(android);
console.log(android.lang);
console.log(blockchain);
console.log(blockchain.lang);

//accessed by Brackets;
var queary='lang';
console.log(blockchain[queary]);
console.log(android[queary]);
//or
console.log("_________________");
console.log(android['future']);
console.log(blockchain['future']);