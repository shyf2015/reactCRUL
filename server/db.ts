import { createConnection,Connection } from "mysql"


export const conn = createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'test'
});

conn.connect()

export const execute = (sql:string, values?:string[]):Promise<any> => new Promise((resolve, reject) => {
  conn.query(sql, values, function (err, data) {
    if (err) {
      reject({error: err.message})
    } else {
      resolve(data)
    }
  })
})
