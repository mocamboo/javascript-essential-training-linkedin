/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    // (function () {
    //   console.log("this.volume in nested function:", this.volume);
    // })();
  },
};

console.log(greenPack.newVolume(5));

class person {
  constructor(
    name,
    age,
    sex,
    stream
  ) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.stream = stream
  }
}

const rahul = new person("rahul", 20, "male", "music");
const binod = new person("binod", 19, "transgender", "comedy");

document.querySelector("main article").classList.add("maincontent");

function addElement(newElement) {
  const ans = document.createElement("article")
  ans.innerHTML = `
  <ul>
  <li>Name ${newElement.name}</li>
  <li>Age ${newElement.age}</li>
  <li>Sex ${newElement.sex}</li>
  <li>Stream ${newElement.stream}</li>
  </ul>
  
  `;
  return ans;
}
const target = document.querySelector("main")
target.classList.add("edit1");
target.append(addElement(binod));





