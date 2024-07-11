import { useContext } from "react";
import { Mycontext } from "./Mycontext";


export default function Mycomponent(){
    const {text,setText} = useContext(Mycontext)
    return(

        <div>
            <h1>{text}</h1>
            <button onClick={()=>setText("hello world")}>click</button>
        </div>
    )
}