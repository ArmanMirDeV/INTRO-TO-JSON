const loadPost = () =>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(res => res.json())
    .then((data) => {
        // console.log(data)
        displayPosts(data);
    })
}
                // array of object 

// const displayPosts = (posts)=>{
//     /* for(let i = 0; i<posts.length; i++){
//         console.log(posts[i]);
//     } */

//    /*  for(let post of posts){
//         console.log(post)
//     } */

//         // 1. Get the container 
//         const postContainer = document.getElementById("post-container");
//         postContainer.innerHTML = "";
//         // console.log(postContainer)
        
    
//     posts.forEach(post =>{
//         // console.log(post.title)
//         // 2. create HTML element 

//         const li = document.createElement("li");
//         li.innerText = post.title;
//         // console.log(li);

//         // 3. add li into container

//         postContainer.appendChild(li);

//     });
// }


/* 
{
    "userId": 10,
    "id": 96,
    "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
    "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
} */


const displayPosts = (posts) => {
    // 1. get the container and empty the container
    const postsContainer = document.getElementById("post-container");
    postsContainer.innerHTML = "";
    posts.forEach((post) => {
        // 2 . Create Element

        const postCard = document.createElement("div");
        postCard.innerHTML = `
         <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
        //3. add to the container
        postsContainer.appendChild(postCard);
    })
} 

loadPost()