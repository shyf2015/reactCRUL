export interface FetchProps {
    error?: string;
    success?: string;
    data?: any;
}
export interface Book {
    id: number;
    name: string;
    author: string;
    type: string;
    price: number;
}
export interface StoreState {
    page?: Page;
    currentId?: number;
    status?: "list" | "add" | "edit" | "show";
}
export interface Page {
    currentPage: number;
    maxPage: number;
    pageSize: number;
    bookList: Book[];
}
