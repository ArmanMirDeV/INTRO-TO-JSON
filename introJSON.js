console.log("Explore API")

const person = {
    name: "ARMAN",
    fruit: "Anaros",
    dish: "Kacchi",
    friends:[ " Sayem" , "Noman" , "Hridoy"],
    isRich: false,
    money: 10

}

console.log(person, typeof person);
//JSON > js object notation
//JSON.stringify --> JSON
//JSON.parse --> object

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);


const personJSON1 = JSON.parse(personJSON);
console.log(personJSON1);