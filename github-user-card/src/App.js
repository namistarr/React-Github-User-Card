import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []
    }
  }

componentDidMount() {
  axios.get(`https://api.github.com/users/namistarr`)
  .then(response => {
    console.log(response.data)
    this.setState({userData: [response.data]})
  })
  .catch(error => {
    console.log('error', error)
  });
}

render() {
  return (
    <div className="App">

    </div>
  )
}
}

export default App;
