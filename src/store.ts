import createStore,{IPreact, Connect,DispatchAction} from "ipreact"
import { StoreState } from "../interfaces"

const initState = {
    bookList:[],
    page:null,
    status: "list"
}

const { connect,dispatch,getState }:IPreact<StoreState>=createStore([function(state, nextState) {
    console.log(nextState)
}])(initState)
export {connect,getState,dispatch} 