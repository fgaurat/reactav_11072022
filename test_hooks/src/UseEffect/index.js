import React,{useState,useEffect} from 'react'

function UseEffect() {

    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        const inter = setInterval(() => {
            setCounter(c=>c+1)
            console.log('inc')
        }, 1000);

        return ()=>{ 
            console.log('end UseEffect')
            clearInterval(inter)
        }

    },[])

    

    return (
        <div>
            <h2>UseEffect</h2>
            counter : {counter}
        </div>
    )
}

export default UseEffect
