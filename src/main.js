let app = document.querySelector('#app')
let heading = document.createElement('h1');
let heading_text = document.createTextNode('My Quill Editor')

let div = document.createElement('div');
let editor = div.setAttribute("id", 'editor');
heading.appendChild(heading_text)
app.prepend(heading)
app.(editor)

