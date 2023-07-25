
import {useState} from "react"
function CounterApp(){
    const [X,setx]=useState(0)
    return(
        <>
        {X}
        <button onClick={()=>setx(X+1)}>Increment</button>
        <button onClick={()=>setx(X-1)}>Decrement</button>

        </>
    )
}
export default CounterApp;