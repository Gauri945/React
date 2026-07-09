function MsgBox({username , textcolor}){
    return (
        <h1 style={{ color: textcolor }}>
            Hello!! , {username}
            </h1>
    );
}

export default MsgBox;