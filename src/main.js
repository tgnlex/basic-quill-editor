let app = document.querySelector('#app')
let heading = document.createElement('h1');
let heading_text = document.createTextNode('My Quill Editor')

let div = document.createElement('div')

heading.appendChild(heading_text)
app.prepend(heading);
app.insertAdjacentHTML(
  afterBegin, 
  `
    <div id="editor><p>Hello World from JS</p></div>
    <div id="toolbar"></div>
  `
)

