"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
exports.getPage = async (req, resp) => {
    let sql = "select * from books limit ?,?";
    let sqlCount = "select count(*) from books";
    const { currentPage, pageSize } = JSON.parse(req['body']);
    const param = [(currentPage - 1) * pageSize, pageSize];
    let booklist = await db_1.execute(sql, param);
    let size = await db_1.execute(sqlCount);
    let dataSize = size[0]["count(*)"];
    const page = {
        currentPage,
        pageSize,
        maxPage: Number(dataSize) % pageSize === 0 ? Number(dataSize) % pageSize : Number(dataSize) % pageSize + 1,
        bookList: booklist
    };
    return page;
};
exports.getBooks = async (req, resp) => {
    let sql = "select * from books";
    let booklist = await db_1.execute(sql);
    return booklist;
};
exports.addBook = async (req, resp) => {
    let sql = "insert into books (name,author,type,price) values(?,?,?,?)";
    const { name, author, type, price } = JSON.parse(req['body']);
    let param = [name, author, type, price];
    await db_1.execute(sql, param);
    return {
        success: "ok"
    };
};
exports.updateBook = async (req, resp) => {
    let sql = "update books set name=?,author=?,type=?,price=? where id=?";
    const { name, author, type, price, id } = JSON.parse(req['body']);
    let param = [name, author, type, price, id];
    await db_1.execute(sql, param);
    return {
        success: "ok"
    };
};
exports.delBook = async (req, resp) => {
    let sql = "delete from books where id=?";
    const { id } = req['data'];
    const param = [id];
    await db_1.execute(sql, param);
    return {
        success: "ok"
    };
};
