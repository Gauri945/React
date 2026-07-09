
import {useState} from "react";


export default function Counter(){
//    let count=0;
//    function inccount(){
//     count+=1;
//     console.log(count);
//    }
let[count , setcount] = useState(0);
let inccount =() =>{
    setcount(count+1);
}

    return(
       <div>
        <h3>Count={count}</h3>
        <button onClick={inccount}>Increase count</button>
       </div>
    );
}