import { Book, FetchProps } from '../interfaces'
import { dispatch, getState } from './store';
import { h,Component } from 'preact';
import { currentId } from 'async_hooks';

export const statusAdd = () => dispatch(state => ({...state, status: 'add'}))
export const statusList = () => dispatch(state => ({...state, status: 'list'}))
export const statusEdit = (currentId) => dispatch(state => ({...state, status: 'edit', currentId}))


export const getBooks = () => {
    fetch("/getbooks").then(res => res.json()).then(bookList => dispatch(state => {
        return {
            ...state,
            bookList,
            status:"list"
        }
    }))
}

export const getPage = (currentPage?:number) => {
    fetch("/getPage",{
        method:"POST",
        body:JSON.stringify({
            currentPage:currentPage?currentPage:1,
            pageSize:5
        })
    }).then(res => res.json()).then(page => dispatch(state => {
        return {
            ...state,
            page,
            status:"list"
        }
    }))
}

export const addBook = (form:HTMLFormElement):Promise<FetchProps>=> fetch("/addBook",{
        method:"POST",
        body:JSON.stringify([].slice.call(form.elements).reduce((m, input) => {
            m[input.name] = input.value
            return m
        }, {}))
    }).then(res=>res.json()).then(data=>{
        if(data.success==="ok"){
            getPage()
        }
        return data
    })

export const editBook = (form:HTMLFormElement):Promise<FetchProps> => fetch("/updateBook",{
        method:"POST",
        body:JSON.stringify([].slice.call(form.elements).reduce((m, input) => {
            m[input.name] = input.value
            return m
        }, {id:getState().currentId}))
    }).then(res=>res.json()).then(data=>{
        if(data.success==="ok"){
            getPage()
        }
        return data
    })


export const delBook = (id:number) => fetch("/delBook?id="+id).then(res=>res.json()).then(data=>{
    if(data.success==="ok"){
        getPage()
    }
    return data
})
