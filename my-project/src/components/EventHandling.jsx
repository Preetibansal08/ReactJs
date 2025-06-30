 export const EventHandling = () => {
  function
     handleButtonClick() {
       alert("hey i am clicked")
    }

  return (
        <div>
             <button onClick={handleButtonClick}> Click Me </button>
             <br/>
             <button onClick={()=>handleButtonClick()}> Click Me 2</button>
        </div>
  );
}


