
   import React from "react";

   class InputValidationDemo extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         type: "text",
         name: "username",
         value: ""
       };
     }
     onChange = (e) => {
       const re = /^[A-Za-z]+$/;
       if (e.target.value === "" || re.test(e.target.value))
         this.setState({ value: e.target.value });
     };
     render() {
      const { type, name, value } = this.state;
      return (
        <div>
          <input type={type} name={name} value={value} onChange={this.onChange} />
        </div>
      );
    }
  }
  export default InputValidationDemo;
