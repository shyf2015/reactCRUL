import { connect,getState } from "../store"
import { BookFormProps } from "../components/BookForm"
import BookForm from "../components/BookForm"
import { statusList,editBook,addBook } from "../actions"



export default connect(():BookFormProps=>{
    const { status,page,currentId } = getState()

    
    return {
        status,
        cancel: statusList,
        action: (status === 'edit' ? editBook : addBook),
        book: (status === 'edit' ? page.bookList.find((book)=>book.id===currentId) : null)
    }
})(BookForm)