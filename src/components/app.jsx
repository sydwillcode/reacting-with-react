//import React from 'react';
import React, { Component } from 'react';
//Functional Component
// const App = (props) => {

//     return <h1>Hello, {props.name}</h1>
// }

//Class Component
class App extends Component{
    constructor (props){
        super(props);
            this.state = {
                text: 'is creating in React',
                placeholder: 'Placeholder text',
                hasLoaded: false,
            }     
        
    }

    handleTextChange =(textValue) => {
        this.setState({value: textValue})
    }

    handleClick = () => {
        this.setState((prevState) => ({hasLoaded: !prevState.hasLoaded}))
    }

    componentDidMount () {
        this.setState({hasLoaded: true})
    }
    // () => {this.setState(prevState) => ({hasLoaded: !prevState.hasLoaded}) }

    render() {
        if (this.state.hasLoaded){
        return (
        <React.Fragment>
            <h1>{this.props.name}  {this.state.text}</h1>
            <input 
            type="text" 
            onChange={(event) => this.handleTextChange(event.target.value)}  
            placeholder={this.state.placeholder} 
            />
            <button onClick={this.handleClick}>Click Me</button>
        </React.Fragment>
        )} else{
            return (
                <React.Fragment>
                    <h1>Loading</h1>
                    <button onClick={this.handleClick}>Click Me</button>
                </React.Fragment>
            )
        }
    } 
}
    




export default App;