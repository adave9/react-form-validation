import './App.css';
import { useState } from "react";



function App() {
  
  const [user, setUser] = useState();
  const [pwd, setPwd] = useState();

  const [visible,setVisible]=useState(false);

  const handleChangeU=(e)=>{
      const x = e.target.value;
      setUser(x);
  }

  const handleChangeP=(e)=>{
    const y = e.target.value;
    setPwd(y);

           var lowerCaseLetters=/[a-z]/g;
            if(y.match(lowerCaseLetters))
            {
                document.getElementById("letter").style.color="green";
            }

            var upperCaseLetters=/[A-Z]/g;
            if(y.match(upperCaseLetters))
            {
               document.getElementById("capital").style.color="green";
            }

            var numbers=/[0-9]/g;
            if(y.match(numbers))
            {
               document.getElementById("number").style.color="green";
            }

            if(y.length>=8)
            {
               document.getElementById("length").style.color="green";
            }

    }
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(user);
      console.log(pwd);

      const a = document.getElementById("var1").value;
      const b = document.getElementById("var2").value;

      if(a==="")
      {
        alert("Please enter a Username !");
      }
      if(b==="")
      {
        alert("Please enter a Password !");
      }

    }

  return (

    <div className="App">
          <div className="validform">
          <h1>Form Validation</h1>
        <form onSubmit={handleSubmit} action="message.html">
                
                <label>User Name:</label>
                <input name="username" type="text" id="var1" onChange={handleChangeU}></input>
                
                <label>Password:</label>
                <input name="psw" type="password" id="var2" onChange={handleChangeP} onClick={()=>{setVisible(true)}} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain one number, one upper and lower case with at least 8 characters."></input>       

                <button type="submit">Submit</button>
        </form>

            {
              visible && <div id="message" className="message">
                <h3>Password must contain the following:</h3>
                <p id="letter">A <b>lowercase</b> letter</p>
                <p id="capital">A <b>capital (uppercase)</b> letter</p>
                <p id="number">A <b>number</b></p>
                <p id="length">Minimum <b>8 characters</b></p>
              </div>
            }
    </div>
    </div>
  );
}

export default App;
