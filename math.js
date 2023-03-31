let num=document.getElementById('num')
let range=document.getElementById('range')
let table=document.getElementById('table')

num.onkeyup=function(){
    let ele=Number(num.value)
    table.innerText=ele
    calucate()
}

range.addEventListener('input',function(){
    let mul=Number(range.value)
    document.getElementById('mutipler').innerText=mul
    calucate()
})

function calucate(){
    let n1=Number(table.innerText)
    let n2=Number(document.getElementById('mutipler').innerText)
    let res=n1*n2;
    
    document.getElementById('sol').innerText= res
}
