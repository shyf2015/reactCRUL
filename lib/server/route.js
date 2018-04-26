"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f2e_serve_1 = require("f2e-serve");
const { ServerSent, JsonOut } = f2e_serve_1.out;
const booklist_1 = require("./booklist");
const route = new f2e_serve_1.Route();
route.on('getbooks', JsonOut(booklist_1.getBooks));
route.on('addBook', JsonOut(booklist_1.addBook));
route.on('delBook', JsonOut(booklist_1.delBook));
route.on('updateBook', JsonOut(booklist_1.updateBook));
route.on('getPage', JsonOut(booklist_1.getPage));
const creater = (conf) => {
    return {
        onRoute: (pathname, req, resp) => {
            return route.execute(pathname, req, resp);
        }
    };
};
exports.default = creater;
