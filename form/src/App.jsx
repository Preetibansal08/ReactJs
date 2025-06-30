 const App = () =>{
       
        function formSubmit(event) {
             event.preventDefault();
        }


        return  (
          <form>
            <h3>Welcome Users</h3>
            <input type="email" placeholder=" enter email"/>
            <br/>
            <br/>
            <br/>
            <input type="password" placeholder=" enter password"/>
            <br/>
            <br/>
            <br/>
            <button onClick={formSubmit}>Login</button>
          </form>
        )
 }

 export default App