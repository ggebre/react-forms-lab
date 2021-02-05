import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  handleUserNameChange = (event) => {
    let entry = event.target.value 
    
    this.setState( {
        username: entry
    }
    )
  } 
  handlePasswordChange = (event) => {
    
    let entry = event.target.value 
    this.setState({
        password: entry
      }
    )
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (!!username && !!password){
      this.props.handleLogin({username,password })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
                onChange={this.handleUserNameChange} 
                id="username" 
                name="username" 
                value={this.state.username}
                type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
                onChange={this.handlePasswordChange} 
                id="password" 
                name="password" 
                value={this.state.password}
                type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
