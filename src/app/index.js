import React from "react";
import ReactDOM from "react-dom";
import thunkMidleware from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import {
  ConferenceRoom,
  VoxeetProvider,
  reducer as voxeetReducer,
} from "@voxeet/react-components";


const reducers = combineReducers({
  voxeet: voxeetReducer
});

const configureStore = () =>
  createStore(reducers, applyMiddleware(thunkMidleware));

const settings = {
  consumerKey: '',
  consumerSecret: '',
  conferenceAlias: 'Alias String'
};

ReactDOM.render(
  <VoxeetProvider store={configureStore()}>
    <ConferenceRoom
      autoJoin
      consumerKey={settings.consumerKey}
      consumerSecret={settings.consumerSecret}
      conferenceAlias={settings.conferenceAlias}
    />
  </VoxeetProvider>,
  document.getElementById("app")
);
