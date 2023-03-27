let theBooks = [];

// getting the value and storing in above function

function getVal(){
    const nameInp = document.querySelector('#name').value;
    const authorInp = document.querySelector('#author').value;
    const pagesInp = document.querySelector('#pages').value;
    const checkbox = document.querySelector('input[id="checkbox"]');

    const theName = nameInp;
    const theAuthor = authorInp;
    const thePages = pagesInp;

    const myLibrary = {
      name: theName,
      author: theAuthor,
      pages: thePages,
    }

    const container = document.querySelector('#container');
    const bookDisplay = document.createElement('div');
    const deleteBox = document.createElement('button');
    deleteBox.innerText = 'Delete';
    deleteBox.classList = 'deletebox';

    bookDisplay.className = 'bookDisplay';
    container.appendChild(bookDisplay);

    const bookName = document.createElement('p');
    bookName.className = 'bookName';
    bookName.textContent = 'Name: ' + theName;

    const bookAuthor = document.createElement('p');
    bookAuthor.className = 'bookAuthor';
    bookAuthor.textContent = 'Author: ' + theAuthor;

    const bookPages = document.createElement('p');
    bookPages.textContent = 'Pages: ' + thePages;

    bookDisplay.appendChild(bookName);
    bookDisplay.appendChild(bookAuthor);
    bookDisplay.appendChild(bookPages);

    if(checkbox.checked){
      var readornot = document.createElement('input');
      readornot.type = "checkbox";
      readornot.name = "name";
      readornot.value = "value";
      readornot.id = "id";
      readornot.checked = true;
      
      var label = document.createElement('label')
      label.htmlFor = "id";
      label.appendChild(document.createTextNode('Read: '));

      var checkboxContainer = document.createElement('div');
      checkboxContainer.append(label);
      checkboxContainer.append(readornot);
      
      bookDisplay.appendChild(checkboxContainer);

    }else{
      var readornot = document.createElement('input');
      readornot.type = "checkbox";
      readornot.name = "name";
      readornot.value = "value";
      readornot.id = "id";
            
      var label = document.createElement('label')
      label.htmlFor = "id";
      label.appendChild(document.createTextNode('Read: '));
      
      var checkboxContainer = document.createElement('div');
      checkboxContainer.append(label);
      checkboxContainer.append(readornot);
      
      bookDisplay.appendChild(checkboxContainer);

    }
    bookDisplay.appendChild(deleteBox);
    theBooks.push(myLibrary);
    console.log(theBooks);

    deleteBox.addEventListener('click', ()=>{
      let beingDeleted = theBooks.indexOf(myLibrary);
      delete theBooks[beingDeleted];
      bookDisplay.remove(beingDeleted);
    })
}

// getting the input from keyboard enter

let button = document.getElementById("pages");
button.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    return getVal();
  }
});