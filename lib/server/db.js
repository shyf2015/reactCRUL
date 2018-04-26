"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
exports.conn = mysql_1.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
});
exports.conn.connect();
exports.execute = (sql, values) => new Promise((resolve, reject) => {
    exports.conn.query(sql, values, function (err, data) {
        if (err) {
            reject({ error: err.message });
        }
        else {
            resolve(data);
        }
    });
});
