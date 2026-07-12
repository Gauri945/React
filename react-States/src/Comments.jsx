import { useState , useEffect } from "react";
import ShowComments from "./ShowComments";
export default function CommentForm() {
  const [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: "",
  });

  const [comments, setComments] = useState([]);
   useEffect(() => {
    console.log("Comments Updated");
    console.log(comments);
  }, [comments]);

  useEffect(() => {
  console.log(`Total Comments: ${comments.length}`);
}, [comments]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleSubmit = (event) => {
  event.preventDefault();

  if (formData.username.trim() === "") {
    alert("Username is required");
    return;
  }

  if (formData.remark.trim() === "") {
    alert("Remark is required");
    return;
  }

  if (formData.rating < 1 || formData.rating > 5) {
    alert("Rating must be between 1 and 5");
    return;
  }

  setComments((prev) => [...prev, formData]);

  setFormData({
    username: "",
    remark: "",
    rating: "",
  });
};
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={formData.username}
        onChange={handleInputChange}
      />

      <br /><br />

      <textarea
        name="remark"
        placeholder="Write your Remark"
        value={formData.remark}
        onChange={handleInputChange}
      />

      <br /><br />

      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        value={formData.rating}
        onChange={handleInputChange}
      />

      <br /><br />

      <button type="submit">Submit</button>
            <hr />
       <ShowComments comments={comments} />
    </form>
  );
}