import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostsList from './components/PostsList';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={16}>
          <PostsList />
        </Grid>
      </div>
    );
  }
}

export default App;
