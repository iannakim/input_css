import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    email: "",
    colorchange: false
}

    //controlled form inputs
    handleChange = (evt) => {
      this.setState({
          [evt.target.name] : evt.target.value
      })
      console.log(evt.target)
      if (this.state.email.includes("@")){
        console.log("HIIIIIII")
        this.setState({
          colorchange: true
        })
      }
      else this.setState ({
        colorchange: false
      })
  }

  render() {

    console.log(this.state.email)

    let inputColor = this.state.colorchange ? "new-box" : "box"

      return (
        <div className="App">
          <div className="form-container">
            <div 
            style={{
              marginBottom: "20px",}}>
              <input type="text" name="email" className={inputColor} id="nemail" required autocomplete="off" onChange={this.handleChange} />
              <label for="nemail"><span>Email Address</span></label>
            </div>
            <div style={{
              marginTop: "20px",}}>
              <input type="password" name="password" rows="2" className="box" id="npassword" required autocomplete="off"></input>
              <label for="npassword"><span>Password</span></label>
            </div>

          </div>
        </div>
      );
  }
}

export default App;
