


function getTodo(id,readTodo){

    const p = new Promise((resolve,reject)=>{

        setTimeout(() =>{
            const todo = {id,title:`Le titre de la todo id :${id}`}
            resolve(todo)
        },1000)

    })


    return p
}

// const pTodo = getTodo(1)
// pTodo.then( todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then( todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then( todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// }).then( todo =>{
//     console.log(todo)
//     return getTodo(todo.id+1)
// })



// const p1 = getTodo(1)
// const p2 = getTodo(2)
// const p3 = getTodo(3)
// const p4 = getTodo(4)

// Promise.all([p1,p2,p3,p4]).then(arr => console.log(arr))



async function main(){
    const todo1 = await getTodo(1)
    console.log(todo1)
    const todo2 = await getTodo(2)
    console.log(todo2)
    const todo3 = await getTodo(3)
    console.log(todo3)
    const todo4 = await getTodo(4)
    console.log(todo4)
}

main()


