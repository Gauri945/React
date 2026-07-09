function submitform(event){
    event.preventDefault();  //agr y nhi tohh console mai ek dmm se kuch print hoga phr htt jyega
    console.log("Form Submitted");
}

export default function Form(){
    return(
        <form>
            <input placeholder="Write Something"/>
            <button onClick={submitform}>Submit</button>
        </form>
    )
}