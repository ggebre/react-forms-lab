import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      remainingCharCount: this.props.maxChars
    };
  }
  handleOnChange = (event) => {
    
    let charEntered = event.target.value
    this.setState( {
          tweet: charEntered,
      }  
    )
  }
  handleOnKeyDown = (event) => {
    let backspaceCode = event.keyCode
    this.setState(previousState => {
      return {
        remainingCharCount:  backspaceCode == 8 ? previousState.remainingCharCount + 1 : previousState.remainingCharCount - 1
      }  
    }
    )
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleOnChange} 
                onKeyDown={this.handleOnKeyDown} 
                type="text" name="message" id="message" />
        <strong>Remaining Characters: {this.state.remainingCharCount}</strong>
        
        <p><strong>Characters Entered:</strong> {this.state.tweet}</p>
      </div>
    );
  }
}

export default TwitterMessage;
