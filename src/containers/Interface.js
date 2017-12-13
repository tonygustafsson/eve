import React from 'react';
import PropTypes from 'prop-types';
import { getAnswer } from  '../Brain';
import SpeakForm from '../components/SpeakForm';
import Dialog from '../components/Dialog';

class Interface extends React.Component {
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
            answer = getAnswer(this.state.currentPhrase, this.props.user),
            time = this.getCurrentTime();

        this.props.speak(said, answer, time);
        this.setState({currentPhrase: ''});
    }

    changePhrase(phrase) {
        this.setState({
            currentPhrase: phrase,
        });
    }

    clear() {
        this.props.clear();
        this.input.focus();        
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

Interface.propTypes = {
    dialog: PropTypes.array,
};

export default Interface;