/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
import { Page } from "../interfaces";
export declare const getPage: (req: IncomingMessage, resp: ServerResponse) => Promise<Page>;
export declare const getBooks: (req: IncomingMessage, resp: ServerResponse) => Promise<any>;
export declare const addBook: (req: IncomingMessage, resp: ServerResponse) => Promise<{
    success: string;
}>;
export declare const updateBook: (req: IncomingMessage, resp: ServerResponse) => Promise<{
    success: string;
}>;
export declare const delBook: (req: IncomingMessage, resp: ServerResponse) => Promise<{
    success: string;
}>;
