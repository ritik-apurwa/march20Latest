
/* 
let aaaa = document.getElementById("domlearning")

let innerTextContent  = aaaa.textContent // give all text hidden or visible 

let innerText = aaaa.innerText // only visible text 

let innerHTML = aaaa.innerHTML // gives you html tags also 

let getspans = document.getElementById("spans")

let spanvisibletext = getspans.innerText 

let spanalltext = getspans.textContent



let classselecthello = document.getElementsByClassName("hello") // select by id 

let queryselector = document.querySelector("h2")

/// use queryselectorall for ul and their li 

let myUlfirstligreen = document.querySelector("ul").querySelectorAll("li")[0].style.color = "red"
// user querySelectorAll and change h1 with number 
const myh1 = document.querySelectorAll("h1")[4].style.background = "green"

let allH1 = document.querySelectorAll("h1")

// with foreach do some styling 
allH1.forEach(function (h1){
    h1.style.background = "green"
})

// document.

let allListItem = document.getElementsByClassName("list-item")

let cdd = Array.from(allListItem)


cdd.forEach(function (li){
    li.style.background = "red" 
})


*/

const allday = document.querySelector(".parent")


for (let d = 1; d < allday.children.length; d++) {
console.log(parent.children[d].innerHTML);
    
}