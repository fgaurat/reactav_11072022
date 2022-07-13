import { useState,useMemo,useCallback,useRef } from 'react'
import {PureComponent01, PureComponent02} from './PureComponent';
import UseEffect from "./UseEffect";
import UseMemo from './UseMemo';
import UseReducer from "./UseReducer";
import UseRef from './UseRef';

function App() {

  const [show, setShow] = useState(false)

  const theValue = "toto"
  const childRef = useRef();

  // const onClickPureComponent02 = useMemo( () =>{
  //   return () =>{
  //     console.log("onClickPureComponent02")
  //   }

  // },[])
  const onClickPureComponent02 = useCallback(
    () => {
      console.log("onClickPureComponent02 useCallback")
    },
    [],
  )

  const onButtonClick = ()=>{
    childRef.current.focus()
    console.log(childRef.current.theValue())
  }
     
  return (
    <div>
      <button onClick={e => setShow(show => !show)}>show</button>
      {show && <UseEffect />}
      <hr />
      <UseReducer></UseReducer>
      <hr />
      <UseMemo/>
      <hr />
      <PureComponent01 value={theValue}></PureComponent01>
      <hr />
      <PureComponent02 onClick={onClickPureComponent02}></PureComponent02>
      <hr />
      <UseRef ref={childRef}></UseRef>
    </div>
  );
}

export default App;
