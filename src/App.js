import React, { useReducer } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { carReducer, initialState, ADD_FEATURE, REMOVE_FEATURE} from './reducers/carReducer';

const App = (props) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  return (
    <div className="boxes">
      <div className="box">
       <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total/>
      </div>
    </div>
  );
};

export default (App);
