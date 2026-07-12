import { useState } from "react";

export default function Form() {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");


    //ese to form mai bhut saare filds hote h tohh hr kisi k liye to usestate bnane nhi toh hum ek 
    // ek commoninputchange for all elements bnyege toh hum object bna lege

     const [formData, setFormData] = useState({
        fullName: "",
        username: "",
    });
    const handleInputChange = (event) => {
        const fieldName = event.target.name;
        const newValue = event.target.value;

        setFormData({
            ...formData,
            [fieldName]: newValue,
        });
    };
    // const handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // };

    // const handleUsernameChange = (event) => {
    //     setUsername(event.target.value);
    // };

    return (
        <form>
            <input
                type="text"
                placeholder="Enter your Full Name"
                value={formData.fullName}
                name="fullName"
                onChange={handleInputChange}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter your Username"
                value={formData.username}
                name="username"
                onChange={handleInputChange}
            />

            <br /><br />

            <button>Submit</button>
        </form>
    );
}