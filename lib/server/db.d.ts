import { Connection } from "mysql";
export declare const conn: Connection;
export declare const execute: (sql: string, values?: string[]) => Promise<any>;
