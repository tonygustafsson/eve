import { connect } from 'react-redux';
import { speak, type } from '../actions';
import Interface from '../components/Interface';
import './Eve.css';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.eve.loading,
    currentPhrase: state.eve.currentPhrase,
    currentTime: state.eve.currentTime
  };
};

export const InterfaceComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      type: (typed) => dispatch(type(typed)),
      speak: (said) => dispatch(speak(said))
    };
  }
)(Interface);
