import { Route,out } from "f2e-serve"
import { MiddlewareCreater } from "f2e-server"
const { ServerSent,JsonOut } = out
import {getBooks,addBook,delBook,updateBook,getPage} from "./booklist"

const route = new Route()

route.on('getbooks',JsonOut(getBooks))
route.on('addBook',JsonOut(addBook))
route.on('delBook',JsonOut(delBook))
route.on('updateBook',JsonOut(updateBook))
route.on('getPage',JsonOut(getPage))

const creater:MiddlewareCreater = (conf) => {

    return {
        onRoute: (pathname,req,resp)=>{
            return route.execute(pathname,req,resp)
        }
    }
}

export default creater