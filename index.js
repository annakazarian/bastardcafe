window.addEventListener("DOMContentLoaded", getData);


function getData() {
    console.log("getData")
    fetch("https:/kea-alt-del.dk/t9_2019_autumn/wp-json/wp/v2/posts")
.then(res=>res.json())
    .then(handleData)
}
function handleData(myData){
    concole.log(myData)
    //1 loop
    myData.forEach(ShowPost)
}
function ShowPost(post){
    console.log(post)
    //2. cloning a template
    const template = document.querySelector(".postTemplate").content;
    const postCope = template.cloneCode(true);
    //3. textcontent & innerHTML
    const h1 = potCopy.querySelector("h1");
    h1.textContent=post.title.rendered;
    //4. append
    document.querySelector("#posts").appendChild(postCopy)
}
