import { IncomingMessage,ServerResponse } from "http"
import { Book,Page } from "../interfaces"
import { parse } from "querystring"
import { execute } from "./db"


export const getPage =  async (req:IncomingMessage,resp:ServerResponse) => {
    let sql = "select * from books limit ?,?"
    let sqlCount = "select count(*) from books"
    const { currentPage,pageSize } = JSON.parse(req['body'])
    const param = [(currentPage-1)*pageSize,pageSize]
    let booklist:Book[] = await execute(sql,param)
    let size = await execute(sqlCount)
    let dataSize = size[0]["count(*)"]
    const page:Page = {
        currentPage,
        pageSize,
        maxPage:Number(dataSize)%pageSize===0?Number(dataSize)%pageSize:Number(dataSize)%pageSize+1,
        bookList:booklist
    }
    return page
}

export const getBooks =  async (req:IncomingMessage,resp:ServerResponse) => {
    let sql = "select * from books";
    let booklist = await execute(sql)
    return booklist
}

export const addBook = async (req:IncomingMessage,resp:ServerResponse) => {
    let sql = "insert into books (name,author,type,price) values(?,?,?,?)";
    const { name,author,type,price } = JSON.parse(req['body'])
    let param = [name,author,type,price]
    await execute(sql,param)
    return {
        success:"ok"
    }
}

export const updateBook = async (req:IncomingMessage,resp:ServerResponse) => {
    let sql = "update books set name=?,author=?,type=?,price=? where id=?";
    const { name,author,type,price,id } = JSON.parse(req['body'])
    let param = [name,author,type,price,id]
    await execute(sql,param)
    return {
        success:"ok"
    }
}

export const delBook = async (req:IncomingMessage,resp:ServerResponse) => {
    let sql = "delete from books where id=?";
    const { id } = req['data']
    const param = [id]
    await execute(sql,param)
    return {
        success:"ok"
    }
}