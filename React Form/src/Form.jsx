import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });
  //  let[ username, setUsername] = useState("");

  //  let handleNameChange = (event) =>{
  //     // console.log(event.target.value)
  //     setFullName(event.target.value)
  //  }

  //   let handleUsername = (event) =>{
  //     // console.log(event.target.value)
  //     setUsername(event.target.value)
  //  }

  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newVal = event.target.value;
    //    console.log(newVal);

    setFormData((currData) => {
    //   currData[fieldName] = newVal;
    //   return { ...currData , [fieldName] : newVal};
      return { ...currData , [ event.target.name] : event.target.value};
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    setFormData({
      fullName: "",
      username: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">FullName</label>
      <input
        type="text"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      <br />
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        placeholder="Enter username"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <br></br>
      <button>Submit</button>
    </form>
  );
}
