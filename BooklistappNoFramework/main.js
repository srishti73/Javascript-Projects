//book class:represents a book
class Book{
    constructor(title,author,isbn){
     this.title=title;
     this.author=author;
     this.isbn=isbn;
    }
}



//ui class to handle ui tasks
class UI{
 static displaybooks(){
//    const storedbook=[
//        {
//            title:'book one',
//            author:'Srishti',
//            isbn:'34343434'
//        },
//        {
//         title:'book two',
//         author:'Abhirath',
//         isbn:'35353535'
//     }
//    ];

   const books=Store.getBooks();

   books.forEach((book)=>UI.addBookToList(book))
 }
 static addBookToList(book){
     const list= document.querySelector('#book-list');
     const row=document.createElement('tr');
     row.innerHTML-`
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
     `;
     list.appendChild(row);

 }
 static deletebook(el)
 {
     if(e.classList.contains('delete')){
         el.parentElement.parentElement.remove();
     }
 }
 static showAlert(message, className){
    const div= document.createElement('div');
    div.className= `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container= document.querySelector('.container');
    const form= document.querySelector('#book-form');
    container.insertBefore(div, form);
    //vanish in 3seconds
    setTimeout(()=>document.querySelector('.alert').remove(),3000)//3000ms

 }
 //to clear the form once you enter or refresh
  static clearfield(){
      document.querySelector('#title').value='';
      document.querySelector('#author').value='';
      document.querySelector('#isbn').value='';
  }
}



//store class to take care of storage
class Store{
    static getBooks(){
      let books;
      if(localStorage.getItem('books')===null){
        books= [];
      }
      else{
          books= JSON.parse(localStorage.getItem(books));


      }
      return books;
    }
    static addBook(book){
      const books= Store.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books))
    }
    static removeBook(isbn){
      const books= Store.getBooks();
      books.forEach((book,index)=>{
          if(books.isbn===isbn)
          {
              books.splice(index,1);
          }
      });
      localStorage.setItem('books', JSON.stringify(books));
    }
}

//event to display books 
document.addEventListener('DOMContentLoaded', UI.displaybooks);

//event to add a book
document.querySelector('#book-form').addEventListener('submit',(e) =>{
    e.preventDefault(); //prevent default submit action
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;
//validate
if(title===' '|| author===' '|| isbn===' '){
    UI.showAlert('please fill all fields','danger');//danger is class of bootstrap that displays colors eg red for error etc   
}
else{
     //instantiate book
     const book=new Book(title, author, isbn);
    
     //add book to ui
     UI.addBookToList(book);
     //add book to store
     Store.addBook(book);
     //show success message
     UI.showAlert('Book Added', 'success');
     //clear fields
     UI.clearfield();
}
  
});

//event to remove a book 
document.querySelector('#book-list').addEventListener('click',(e)=>{
    //remove book from ui
    UI.deletebook(e.target)
    //remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //show success message
    UI.showAlert('Book Removed', 'success');
});