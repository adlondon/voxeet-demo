import React from "react";
import ReactDOM from "react-dom";
import thunkMidleware from "redux-thunk";
import promiseMiddleware from "redux-promise";
import { combineReducers, createStore, applyMiddleware } from "redux";
import {
  ConferenceRoom,
  VoxeetProvider,
  reducer as voxeetReducer,
} from "@voxeet/react-components";

// Import Style
// import "@voxeet/react-components/dist/voxeet-react-components.css"; // Can you be customize, refer to https://github.com/voxeet/voxeet-assets-react-components


const reducers = combineReducers({
  voxeet: voxeetReducer
});

const configureStore = () =>
  createStore(reducers, applyMiddleware(thunkMidleware));

window.addEventListener("storage", function(e) {
  console.log(sessionStorage.getItem("conferenceId"));
});

const conferenceId = window.conferenceId;

const settings = {
  consumerKey: 'OXU1ajVpOTI0dWpoZw==',
  consumerSecret: 'N21sNGt0cXVyaXVvdWx2cms4amhpNnNqaDc=',
  conferenceAlias: 'Alias String'
}
const handleOnConnect = () => {
  console.log("Participant connecting");
};

const handleOnLeave = () => {
  console.log("Participant disconnected");
};

var constraints = {
  audio: true,
  video: true
};

var videoRatio = {
  width: 1280,
  height: 720
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
