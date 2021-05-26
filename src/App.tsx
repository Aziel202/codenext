import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { render } from 'react-dom';
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'






function App() {
  return (
    <div className="App">
    <Link to="/post">go to post</Link>
      <Router>
        <Switch>
          <Route path="/post">
          </Route>
          <Route path="/messages">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}





export default App;





// interface MySecondComponentProps {
//   firstName : string;
//   lastName : string;
// }


// interface MySecondCompenetState {
//   numberOfLikes : number;
// }



// interface MayoManProps {
//   numberofears: number;
//   numberofhands: number;
// }

// interface MayoManState {
//   jarsOfMayoAte: number;
// }


// class MayoMan extends React.Component<MySecondComponentProps,MySecondCompenetState> {
//   constructor(props:MySecondComponentProps) {
//     super(props);
//     this.state = {numberOfLikes : 0}
//   }

//   addTheLike(){
//     this.setState({numberOfLikes : this.state.numberOfLikes + 1})
//   }




