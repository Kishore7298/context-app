import React, { Component } from 'react';

//first we'll create our first context.
const MyContext = React.createContext();

//second we'll create our provider
class MyProvider extends Component {
  state = { 
    name:"kishore",
    age:"21",
    cool:true
  }
  render(){
    return (
      <MyContext.Provider value={{state:this.state}}>
        { this.props.children }
      </MyContext.Provider>
    )
  }
}

const Person = (props)=>(
  <MyContext.Consumer >
    {(context)=>(
      <div>
        hey this is also {context.state.name}
      </div>
    )}
  </MyContext.Consumer>
)

const Family = (props)=>(
  <div>
    <Person />
  </div>
)

class App extends Component {
  
  render() { 
    return ( 
      <div>
        <MyProvider>
          <Family />
        </MyProvider>
      </div>
     );
  }
}
 
export default App;