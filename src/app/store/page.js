import { getAllBooks } from "../lib/fake-data";
import BookList from '../ui/sidebar/books/BookList'
const BookListPage =()=>{
const books = getAllBooks();

    return (
        <BookList books ={books}/>
    )
}
export default BookListPage;