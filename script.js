const names = ['John', 'Danielle', 'Philip', 'Noah', 'William', 'Charles', 'Sint', 'Kenard', 'Ify', 'Steve'];

function randomNames() {
    document.getElementById('nameList').innerHTML = '';
    var listOfNames = document.createElement('ul');
    listOfNames.id = 'list-names';
    document.getElementById('nameList').appendChild(listOfNames);
    for (let i = 0; i < 5; i++) {
    var classNames = names[Math.floor(Math.random() * names.length)];
var listItems = document.createElement('li');
listItems.id = 'lists';
document.getElementById('list-names').appendChild(listItems).innerHTML = classNames
    }
}
function clearText(){
    document.getElementById('nameList').innerHTML = " ";
  }
mybutton.onclick = randomNames;
clearbutton.onclick = clearText;