import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import BookShelf from "./BookShelf";
import SearchButton from "/SearchButton";
class BookCase extends Component {
    state = {}

    componentDidMount = () => {
        // Update the list of all books
        this
            .props
            .onRefreshAllBooks();
    }


    updateShelves = () => {
          // Update the state of the individual shelves to contain the appropriate books
          // for each
          const newCurrent = {
              name: "Currently Reading",
              books: this
                  .props
                  .books
                  .filter(book => book.shelf === 'currentlyReading')
          };
          const newWant = {
              name: "Want to Read",
              books: this
                  .props
                  .books
                  .filter(book => book.shelf === "wantToRead")
          };
          const newRead = {
              name: "Read",
              books: this
                  .props
                  .books
                  .filter(book => book.shelf === "read")
          };

          return ([newCurrent, newWant, newRead]);
      }

      render() {
          let shelves = [];
          if (this.props.books && this.props.books.length)
              shelves = this.updateShelves();

              return (
                 <div className="app">
                     <div className="list-books">
  //Shelf Title
                         <div className="list-books-title">
                             <h1>MyReads</h1>
                         </div>
//List of Books
                         <div className="list-books-content">
                             <div>
                                 {shelves && shelves.map((shelf) => (<BookShelf
                                     key={shelf.name}
                                     shelf={shelf}
                                 />))}
                             </div>
                         </div>
  //Search Button
                         <SearchButton/>
                     </div>
                 </div>
             )
         }
     }

     export default BookCase;
