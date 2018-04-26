import { h,Component,render } from "preact"
import { Book, FetchProps } from "../../interfaces"

export interface BookFormProps {
    book?: Book
    status: string
    action?: {
        (form: HTMLFormElement): Promise<FetchProps>
    }
    cancel: {
        (): void
    }
}

export default class extends Component<BookFormProps,any>{

    onSubmit = (e) => {
        const { action } = this.props
        e.preventDefault()
        action(e.target).then(({error})=>{error && alert(error)})
    }

    renderFormValues = () => {
        const { form } = this
        const { book } = this.props;
        [].slice.call(form.elements).map(input => {
            if(input.name){
                input.value = book ? book[input.name] : ''
            }
        })
    }
    componentDidUpdate () {
        this.renderFormValues()
    }
    componentDidMount(){
        this.renderFormValues()
    }
    form: HTMLFormElement
    initForm = (form) => {
        this.form = form
    }
    render(){
        const { onSubmit, initForm } = this
        const { cancel,book } = this.props
        return(
            <div>
                <form onSubmit={onSubmit} ref={initForm}>
                    <div class="form-group row">
                        <label class="col-1 offset-2 col-form-label" for="name">书名</label>
                        <div class="col-4">
                            <input id="name" type="text" name="name" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-1 offset-2 col-form-label">作者</label>
                        <div class="col-4">
                            <input type="text" class="form-control" name="author"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-1 offset-2 col-form-label">类型</label>
                        <div class="col-4">
                            <input type="text" class="form-control" name="type"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-1 offset-2 col-form-label">价格</label>
                        <div class="col-4">
                            <input type="text" class="form-control" name="price"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-1 offset-3">
                            <input type="submit" class="btn" value={book?"修改":"添加"}/>
                        </div>
                        <div class="col-1 ">
                            <input type="button" class="btn" value="取消" onClick={cancel}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}