import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';
import { buyItem} from '../actions/carActions'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature buyItem={props.buyItem} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
};

const mapDispatchToProps = {
  buyItem
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeatures);
