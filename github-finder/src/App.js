import React, { Component, Fragment} from 'react';
import './App.css';

class App extends Component  {

foo = () => 'Barz';

render(){

  const name = 'Pablito';
  const loading = false;



  const foo = () => 'foo mayne';

  return (
    <Fragment>
      {loading ? <h4>Loading</h4>: <h1>Wassup it's {this.foo()} from React</h1>}
     <h1>Wassup it's {name} from React</h1>
     <h1>Wassup it's {name.toUpperCase()} from React</h1>
     <h1>Wassup it's {foo()} from React</h1>
     <h1>Wassup it's {this.foo()} from React</h1>
     <h1>{11+11}</h1>
     <h1>{loading}</h1>
    </Fragment>
  );
  
}

}

export default App;
