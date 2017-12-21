import React from 'react';
import PropTypes from 'prop-types';
import { getAnswer } from  '../Brain';
import SpeakForm from '../components/SpeakForm';
import Dialog from '../components/Dialog';
import { connect } from 'react-redux';
import { speak, clear, rememberName, rememberAge } from '../actions';
import './Interface.css';

class InterfaceComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPhrase: '',
            loadTime: this.getCurrentTime(),
        };
    }

    getCurrentTime() {
        let date = new Date(),
            hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
            minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
            seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    
        return hours + ':' + minutes + ':' + seconds;
    }

    speak = (e) => {
        e.preventDefault();

        if (this.state.currentPhrase.length < 1) return;

        let said = this.state.currentPhrase,
            saidLower = said.toLowerCase(),
            saidWords = said.split(' '),
            time = this.getCurrentTime();

        if (this.props.listeningFor === "name") {
            let name = said;
            said = "my name is " + name;
            this.props.rememberName(name);
        }

        let answer = getAnswer(said, this.props.user);

        if (saidLower.includes('my name is ') && saidWords.length > 3) {
            let name = saidWords[3];
            this.props.rememberName(name);
        }
        
        if ((saidLower.includes('my') && saidLower.includes('age') && saidLower.includes('is')) || (saidLower.includes('i ') && saidLower.includes('year') && said.includes('old'))) {
            let age = saidLower.match(/\d/g).join("");
            this.props.rememberAge(age);
        }

        this.props.speak(said, answer, time);        

        this.setState({currentPhrase: ''});
    }

    changePhrase(phrase) {
        this.setState({
            currentPhrase: phrase,
        });
    }

    clear = () => {
        this.props.clear();
    }

    getHistory = (e) => {
        if (e.nativeEvent.key !== "ArrowUp") return;

        var lastSaid = this.props.dialog[0].sentence;
        this.setState({currentPhrase: lastSaid});
        //e.target.setSelectionRange(this.state.currentPhrase.length, 0);
    }

    render() {
        return (
            <div className="interface">
                <SpeakForm
                    currentPhrase={this.state.currentPhrase}
                    speak={this.speak}
                    clear={this.clear}
                    getHistory={this.getHistory}
                    changePhrase={(phrase) => this.changePhrase(phrase)}
                />

                <Dialog
                    dialog={this.props.dialog}
                    loadTime={this.state.loadTime}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        dialog: state.eve.dialog,
        loading: state.eve.loading,
        currentTime: state.eve.currentTime,
        user: state.eve.user,
        listeningFor: state.eve.listeningFor,
    };
};
  
export const InterfaceReduxConnector = connect(
    mapStateToProps,
    (dispatch) => {
        return {
            speak: (said, answer, time) => dispatch(speak(said, answer, time)),
            rememberName: (name) => dispatch(rememberName(name)),
            rememberAge: (age) => dispatch(rememberAge(age)),
            clear: () => dispatch(clear()),
        };
    }
)(InterfaceComponent);

InterfaceComponent.propTypes = {
    dialog: PropTypes.array,
    loading: PropTypes.bool,
    currenTime: PropTypes.string,
    user: PropTypes.object,
    listeningFor: PropTypes.string,
    speak: PropTypes.func,
    rememberName: PropTypes.func,
    clear: PropTypes.func,
};

export default InterfaceComponent;