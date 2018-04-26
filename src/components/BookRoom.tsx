import { h,Component,render } from "preact"
import { Book,StoreState } from "../../interfaces"
import BooTable from "../containers/BookTable"
import BookForm from "../containers/BookForm"



export default class BookRoom extends Component<StoreState,any>{
    render(){
        const { status } = this.props
        return(
            <div style="min-width:1000px;">
                <BooTable />
                {
                    status=="list"?"":<BookForm />
                }
            </div>
        )
    }
}