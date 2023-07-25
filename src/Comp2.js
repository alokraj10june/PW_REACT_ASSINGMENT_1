
import Image from "./Image";

 export function Comp2(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <Image src={props.Image}/>

            <Image/>
        </div>
    )
}
export default Comp2;