import React from 'react'


function longWork(t = 500) {
    console.log("longWork");
    const end = Date.now() + t;
    while (Date.now() < end) { }
    console.log("end longWork");
}

function PureComponent01({value}) {
    longWork()
    console.log("render PureComponent01")
    return (
        <div>
            <h2>PureComponent01</h2>
            value :{value}
        </div>
    )
}

PureComponent01 = React.memo(PureComponent01)
export {PureComponent01}


function PureComponent02({onClick}) {
    longWork()
    console.log("render PureComponent02")
    return (
        <div>
            <h2>PureComponent02</h2>
            <button onClick={onClick}>click</button>
        </div>
    )
}

PureComponent02 = React.memo(PureComponent02)
export {PureComponent02}
