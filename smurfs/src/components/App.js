import React from "react";
import { getData } from '../actions/actions'
import { connect } from 'react-redux'
import "./App.css";
import SmurfList from './SmurfList'
import { handleNewSmurf, deleteSmurf } from '../actions/actions'

const App = (props) => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {
        props.isFetching ? (
          <SmurfList smurfs={props.smurfs} handleNewSmurf={props.handleNewSmurf} deleteSmurf={props.deleteSmurf} />
        ) : (
            <button type='button' onClick={() => props.getData()}>Meet The Smurfs!</button>
          )
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps, { getData, handleNewSmurf, deleteSmurf })(App);
