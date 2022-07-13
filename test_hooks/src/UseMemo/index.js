import React, { useState,useMemo } from 'react'


function longWork(t = 500) {
    console.log("longWork");
    const end = Date.now() + t;
    while (Date.now() < end) { }
    console.log("end longWork");
}


function toUpper(s) {
    longWork()

    return s.toUpperCase()
}

function UseMemo() {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const bUpper = useMemo(() => toUpper(b),[b])
    return (
        <div>
            <input type="text" value={a} onChange={e => setA(e.target.value)} placeholder="a" />
            <input type="text" value={b} onChange={e => setB(e.target.value)} placeholder="b" />
            <br />
            <b>a</b>: {a}, <b>bUpper</b>: {bUpper}
        </div>
    )
}

export default UseMemo
