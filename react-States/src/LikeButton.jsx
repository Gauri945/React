import { useState } from "react";

export default function LikeButton(){
   let[islike , setislike] = useState(false);
   let[count,setcount] = useState(0);

   let toggle =()=>{
    // Console.log("We are going to Toggle");
    setislike(!islike);
    setcount(count+1);
   
   };

   let style = {color:"red"};

    return(
        <div>
            <p>Clicks={count}</p>
            <p onClick={toggle}>
               {islike ? (<i className="fa-solid fa-heart" style={style}></i>):(<i className="fa-regular fa-heart"></i>)}
                
            </p>
        </div>
    );
}