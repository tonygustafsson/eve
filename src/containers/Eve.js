import { connect } from 'react-redux';
import { speak } from '../actions';
import Interface from '../components/Interface';
import './Eve.css';

const mapStateToProps = (state, ownProps) => {
  return {
    dialog: state.eve.dialog,
    loading: state.eve.loading,
    currentTime: state.eve.currentTime
  };
};

export const InterfaceComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      speak: (said, time) => dispatch(speak(said, time)),
    };
  }
)(Interface);
