// Let the html file have this tags

{/* <div class="parent">
    <div class="day Monday">Monday</div>
    <div class="day">Tuesday</div>
    <div class="day">Wednesday</div>
    <div class="day">Thursday</div>
</div> */}

const parentNode = document.querySelector('.parent')// selects the class parent

//returns all children as html collection
parentNode.children

//to select specific children
parentNode.children[1].innerHTML

// accessing all children by loop
for(let t=0;i<parent.children.length;i++){
    // console.log(parent.children[i].innerHTML)
}


//accessing first child of parent
parentNode.firstElementChild.innerHTML

//accessing last child of parent
parentNode.lastElementChild

const childNode= document.querySelector('.Monday')

//to get the parent element of a tag
childNode.parentElement //return parent element

//gets next sibling of the tag
childNode.nextElementSibling 

//returns every node inside the child <br> <tags> every thing will be counted as one node
parentNode.childNodes

//adding new child
parentNode.appendChild(h1)

//removing child
parentNode.removeChild(p)