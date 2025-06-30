import { useState } from "react";
import "./CommentForm.css";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) =>{
        return {...currData , [event.target.name]: event.target.value}
    })
  };

  let handleSubmit = (event) =>{
    console.log(formData);
    event.preventDefault();
    setFormData({
    username: "",
    remarks: "",
    rating: 5,
  });
  }
  return (
    <div>
      <h3>Give a comment!</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="usename"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br></br> <br></br>
         <label htmlFor="remarks">Remarks</label>
        <textarea
          name="remarks"
          id="remarks"
          value={formData.remarks}
          placeholder="add few remarks"
          onChange={handleInputChange}
        >
          Remarks
        </textarea>
        <br></br> <br></br>
         <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          name="rating"
          id="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
        <br></br> <br></br>
        <button>Add Comment</button>
      </form>
    </div>
  );
}
