// fetch gives promise of response... 

const loadData= ()=>{
fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json()).then((data) => console.log(data));
}


const loadPost = () =>{

    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(res=> res.json()).then(json => {
        console.log(json);
        displayPost(json); })

    }


const displayPost = (posts) => {
  posts.forEach(post => {
    console.log(post)
  });
}



/* 
fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json()).then((data) => console.log(data)) */

/* console.log("Explore API")

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
console.log(personJSON1); */