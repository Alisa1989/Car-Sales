import React, {useReducer} from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {carReducer, initialState, ADD_FEATURE, REMOVE_FEATURE} from './reducers/carReducer';

const App = () => {
  const [state, dispatch] = useReducer(carReducer, initialState);

const removeFeature = item => {
  dispatch({ type: REMOVE_FEATURE, payload: item})
};

const buyItem = item => {
  dispatch({ type: ADD_FEATURE, payload: item})
};

// const mapStateToProps = state => {
//   return{
//     additionalPrice: state.additionalPrice,
//     carName: state.car.name
//   }
// }

//const mapDispatchToProps = {};//actions go in here


  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures removeFeature={removeFeature} car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default
//connect (mapStateToProps)
//mapDispatchToProps
(App);
