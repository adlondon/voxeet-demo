import React from 'react'
import thunkMidleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import {
  ConferenceRoom,
  VoxeetProvider,
  reducer as voxeetReducer
} from "./app/VoxeetReactComponents";

const reducers = combineReducers({
  voxeet: voxeetReducer
});

const configureStore = () => createStore(
  reducers,
  applyMiddleware(thunkMidleware)
)

const settings = {
  consumerKey: '',
  consumerSecret: '',
  conferenceAlias: 'Alias String'
}

function App() {
  return (
    <VoxeetProvider store={configureStore()}>
      <ConferenceRoom
        autoJoin
        consumerKey={settings.consumerKey}
        consumerSecret={settings.consumerSecret}
        conferenceAlias={settings.conferenceAlias}
      />
    </VoxeetProvider>
  );
}

export default App;
