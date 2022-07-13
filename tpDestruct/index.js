
const [a,b,...c] = [0,1,2,3]

console.log(a,b)
console.log(c)


const o = {'title':'Le titre','id':12,'userId':54}

const {title} = o


const copy_o = {...o,age:46,title:"un autre"}


function f({title}){
    console.log("f")
    console.log(title)
}

f(copy_o)




