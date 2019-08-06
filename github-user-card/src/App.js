import React from 'react';
import './App.css';
import axios from 'axios';
import UserList from './components/UserList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followerData: []
    }
  }

componentDidMount() {
  axios.get(`https://api.github.com/users/namistarr`)
  .then(response => {
    console.log(response.data);
    this.setState({userData: [response.data]})
  })
  .catch(error => {
    console.log('error', error)
  });

  axios.get(`https://api.github.com/users/namistarr/followers`)
  .then(response => {
    this.setState({followerData: [response.data]})
  })
  .catch(error => {
    console.log('error', error)
  });
}

render() {
  return (
    <div className="App">
      <h1>GitHub User</h1>
      <UserList userData={this.state.userData} />
    </div>
  )
}
}

export default App;
