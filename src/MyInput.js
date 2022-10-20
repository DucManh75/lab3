import * as React from "react";

class MyInput extends React.Component {
    onChange() {
        console.log("changed");
    }
onBlur() {
    console.log("blured");
}

render(){
    return <input onchange={this.onChange} onBlur={this.onBlur} />
}
}
export default MyInput;


