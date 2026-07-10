
import {useState} from "react";


export default function Counter(){
//    let count=0;
//    function inccount(){
//     count+=1;
//     console.log(count);
//    }

function init(){
    return Math.random();
}
let[count , setcount] = useState(init);
let inccount =() =>{
    setcount((currcount)=>{
        return currcount+1;
    });
}

    return(
       <div>
        <h3>Count={count}</h3>
        <button onClick={inccount}>Increase count</button>
       </div>
    );
}