import { h,Component,render } from "preact";
import { Book, FetchProps,Page } from '../../interfaces';
import { getPage } from "../actions";

export interface BookTableProps {
    page:Page,
    add: {
        (): void
    }
    edit: {
        (id: number): void
    }
    del: {
        (id: number): Promise<FetchProps>
    }
    getPage:{
        (currentPage):void
    }
}

export default class extends Component<BookTableProps,any>{
    del = (e)=>{
        const { del } = this.props
        confirm("是否删除？") && del(e)
    }
    render(){
        const {  add, edit, page } = this.props;
        const del = this.del
        return(<div class="container">
            <div>
                <table class="table table-bordered">
                    <thead class="thead-dark">
                        <tr>
                            <th>编号</th>
                            <th>书名</th>
                            <th>作者</th>
                            <th>类型</th>
                            <th>价格</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    {page && page.bookList &&
                        page.bookList.map( (book,i)=><tr>
                            <td>{i+1}</td>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.type}</td>
                            <td>{book.price}</td>
                            <td><a href="#" onClick={e => edit(book.id)}>编辑</a>/<a href="#" onClick={e => this.del(book.id)}>删除</a></td>
                        </tr> )
                    }
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-4 text-left">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li onClick={e=>getPage(1)} class="page-item"><a class="page-link" href="#">首页</a></li>
                            <li onClick={e=>getPage(page.currentPage-1)} class="page-item"><a class="page-link" href="#">上一页</a></li>
                            <li onClick={e=>getPage(page.currentPage==page.maxPage?page.maxPage:page.currentPage+1)} class="page-item"><a class="page-link" href="#">下一页</a></li>
                            <li onClick={e=>getPage(page.maxPage)} class="page-item"><a class="page-link" href="#">尾页</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="text-right col-8">
                    <input type="button" class="btn" value="添加" onClick={add}/>
                </div>
            </div>
        </div>)
    }
}
