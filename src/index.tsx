import { h,render } from "preact"
import BookRoom from "./containers/BookRoom"
import { getBooks,getPage } from './actions'

render(<BookRoom />,document.getElementById("app"))

setTimeout(getPage, 100);
