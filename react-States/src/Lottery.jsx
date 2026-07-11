import { genticket , sum } from "./helper";
import "./Lottery.css";
import { useState } from "react"
export default function Lottery(){
    let [ticket , setticket]=useState(genticket(3));
    let winning =sum(ticket)===15;
    let buy=()=>{
        setticket(genticket(3));
    }

    return(
        <div>
            <h1>LOTTERY GAME!!</h1>
            <div className="ticket">
                  <span>{ticket[0]}</span>
                   <span>{ticket[1]}</span>
                    <span>{ticket[2]}</span>
            </div>
            <button onClick={buy}>Buy New Ticket</button>
            <h3>{winning && "CONGRATS You Win!!"}</h3>
        </div>
    )
}