import BookRoom from "../components/BookRoom"
import { connect,getState } from "../store"
import { getBooks } from "../actions"

export default connect(()=>{
    const { status } = getState()
    return {
        status
    }
})(BookRoom)