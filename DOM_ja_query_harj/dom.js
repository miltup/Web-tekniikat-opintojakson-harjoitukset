// a
let elem = document.querySelector("#content");
console.log(elem.tagName);

//  b
let firstElem = document.querySelector(".basic");
console.log(firstElem.tagName);

// c
let liItems = document.querySelectorAll("li");

for (element of liItems) {
    console.log(element.textContent);
}

// d
let bodyDescendants = document.querySelectorAll("body *");

for (element of bodyDescendants) {
    console.log(element.nodeName);
}

// e
let pText = document.querySelectorAll("article p");

for (element of pText) {
    console.log(element.textContent);
}

// f
for (element of liItems) {
    element.textContent = "John Doe";
}