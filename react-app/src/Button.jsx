function dosmthg(event){
    console.log(event);
    console.log("Button clicked");
}
function bye(){
    console.log("Bye");
}
function hover(){
    console.log("HOVER");
}

export default function Button(){
    
    return(
        <div>
            <button onClick={dosmthg}>Click Me!</button> <br></br>
            <button onMouseOver={hover}>Hover Over Me!</button>
            <p onClick={bye}>Click the paragraph --- Bye!!</p>
        </div>
    )
}