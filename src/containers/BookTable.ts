import BookTable, { BookTableProps } from "../components/BookTable"
import { connect,getState } from "../store"
import { statusAdd, statusEdit, delBook,getPage } from "../actions"

export default connect(():BookTableProps => {
    const { page } = getState()
    return {
        page,
        add: statusAdd,
        del: delBook,
        edit: statusEdit,
        getPage,
    }
})(BookTable)