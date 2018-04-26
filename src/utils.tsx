import { h,Component,render } from "preact"

const form2seria = (elements:HTMLFormElement) => {
    let arr = []
    for(let i=0; i<elements.length;i++){
        arr.push(elements[i].name+"="+encodeURIComponent(elements[i].value))
    }
    return "?"+arr.join("&")
}

export {form2seria}