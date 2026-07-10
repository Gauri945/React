import { useState } from "react";
import "./LudoBoard.css";

export default function LudoBoard() {

    let [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0
    });

    const updateBlue = () => {
        setMoves(prev => ({ ...prev, blue: prev.blue + 1 }));   //object mai ese update nhi ya rerender nhi so we use spred 
    };

    const updateYellow = () => {
        setMoves(prev => ({ ...prev, yellow: prev.yellow + 1 }));
    };

    const updateGreen = () => {
        setMoves(prev => ({ ...prev, green: prev.green + 1 }));
    };

    const updateRed = () => {
        setMoves(prev => ({ ...prev, red: prev.red + 1 }));
    };

    return (
        <div className="container">
            <h2>🎲 Ludo Game</h2>
            <p>Click the button to move a player!</p>

            <div className="board">

                <div className="player blue">
                    <p>Blue : {moves.blue}</p>
                    <button onClick={updateBlue}>+1 Move</button>
                </div>

                <div className="player yellow">
                    <p>Yellow : {moves.yellow}</p>
                    <button onClick={updateYellow}>+1 Move</button>
                </div>

                <div className="player green">
                    <p>Green : {moves.green}</p>
                    <button onClick={updateGreen}>+1 Move</button>
                </div>

                <div className="player red">
                    <p>Red : {moves.red}</p>
                    <button onClick={updateRed}>+1 Move</button>
                </div>

            </div>
        </div>
    );
}