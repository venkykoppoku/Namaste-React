// using javascript
// const header = document.createElement('h1');
// header.innerText = 'Namaste React!'
// document.body.appendChild(header)

const header1 = React.createElement("h1", {id:'title'}, "Namaste React");
const header2 = React.createElement('h2',{id:'name'},'This is Venkat');
const div = React.createElement('div',{},header1,header2)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
