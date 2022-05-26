class Book {
  constructor(tittle, author, pages, read) {
    this.tittle = tittle;
    this.pages = pages;
    this.author = author;
    this.read = read;
    this.info = function () {
      // const isRead = function () {
      //   return this.read ? " is read" : "is not read"
          
      // }
    return (`${this.tittle} by ${this.author} is ${this.pages} is not read`); 
    }
    }

  }

const theHobbit = new Book("The Hobbit", 295, 'J.R.Tolkien')

console.log(theHobbit.info());