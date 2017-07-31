import { connect } from 'react-redux';
import {  } from '../actions';
import Interface from '../components/Interface';
import './Eve.css';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading
  };
};

export const InterfaceComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      
    };
  }
)(Interface);
