import { Mycontext } from "./Mycontext";
import Mycomponent from "./Mycomponent";
import {useState } from "react";
//Provider:which produces the data or props
export default function Example(){
    const [text,setText]=useState("")
    return(
        <div>
           <Mycontext.Provider value={{text,setText}}>
             <Mycomponent/>
             {/*you can add as many components u want .Provider will
provide all the props to the given components*/}
           </Mycontext.Provider>
        </div>
    )
}