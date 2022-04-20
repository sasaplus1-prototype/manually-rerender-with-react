var React = require("react");
var ReactDOM = require('react-dom/client');

var p = React.createElement('p', { key: "p" , "data-hello": 123 }, 'hello');
var main = React.createElement('div', {
  className: "hello",
  contentEditable: true,
  suppressContentEditableWarning: true,
  spellCheck: false,
}, [button, p]);

console.log(main);

var root = ReactDOM.createRoot(document.getElementById('js-root'));

root.render(main);

//------------------------------------------------------------------------------

var button = document.createElement('button');

button.textContent = 're-render!';
button.addEventListener('click', function() {
  var p1 = React.createElement('p', { key: "p", "data-hello": 123 }, 'hello');
  var p2 = React.createElement('p', { key: "p2" }, "world");
  var main2 = React.createElement('div', {
    className: "hello",
    contentEditable: true,
    suppressContentEditableWarning: true,
    spellCheck: false,
  }, [p1, p2]);

  root.render(main2);
}, false);

document.body.appendChild(button);
