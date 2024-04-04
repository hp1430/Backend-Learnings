function outer(){
    let a="Outer Function"
    function inner(){
        console.log(a)
    }
    return inner
}
let fn=outer()
fn()