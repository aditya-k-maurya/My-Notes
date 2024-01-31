// ways to get element from html doc

const title = document.getElementById("heading") // selecting element by id
document.getElementsByClassName('heading') //selecting element by class
document.getElementsByTagName('h1')// selecting element by tagname

// query selector 
document.querySelector('h1')
document.querySelector('.heading')// for  selecting classes
document.querySelector('#heading')// for  selecting ID's
document.querySelector('li[type = "email"]')// for  selecting by checking the type
document.querySelector('p:first-child')// for  selecting the first child element
document.querySelectorAll('h1')[0]// select all elements of same tag, basically gives node list which can be accessed using forEach method



// getAttribute - returns the attribute of the selector
title.getAttribute('src')

// setAttribute - override the attribute
title.setAttribute('src', 'xyz.jpg')


// innerText - returns the visible text on screen
title.innerText


// textContent - returns all content of the selector
title.textContent

// innerHTML - return the HTML tags inside the selector
title.innerHTML