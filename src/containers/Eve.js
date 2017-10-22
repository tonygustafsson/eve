import { connect } from 'react-redux';
import { speak, clear } from '../actions';
import Interface from '../components/Interface';
import './Eve.css';

const mapStateToProps = (state, ownProps) => {
  return {
    dialog: state.eve.dialog,
    loading: state.eve.loading,
    currentTime: state.eve.currentTime,
    user: state.eve.user,
  };
};

export const InterfaceComponent = connect(
  mapStateToProps,
  (dispatch) => {
    return {
      speak: (said, answer, time) => dispatch(speak(said, answer, time)),
      clear: () => dispatch(clear()),
    };
  }
)(Interface);
