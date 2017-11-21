import React from 'react';
import { getAnswer } from  '../Brain';

export default class Interface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPhrase: '',
        };
    }

    getCurrentTime() {
        let date = new Date(),
            hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
            minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
            seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    
        return hours + ':' + minutes + ':' + seconds;
    }

    componentDidMount() {
        this.input.focus();        
    }

    speak(e) {
        e.preventDefault();

        if (this.state.currentPhrase.length < 1) return;

        let said = this.state.currentPhrase,
            answer = getAnswer(this.state.currentPhrase, this.props.user),
            time = this.getCurrentTime();

        this.props.speak(said, answer, time);
        this.setState({currentPhrase: ''});

        this.input.focus();
    }

    changePhrase(phrase) {
        this.setState({
            currentPhrase: phrase,
        });
    }

    clear() {
        this.props.clear();
    }

    getHistory(e) {
        if (e.nativeEvent.key !== "ArrowUp") return;

        var lastSaid = this.props.dialog[0].sentence;
        this.setState({currentPhrase: lastSaid});
        //e.target.setSelectionRange(this.state.currentPhrase.length, 0);
    }

    render() {
        return (
            <div className="interface">
                <a href="http://www.tonyg.se/projects/sarabot/" title="Gå till startsidan">
                    <img src="http://www.tonyg.se/projects/sarabot/assets/images/bot.jpg" className="bot-img" alt="Sarabot" />
                </a>

                <form className="dialog-form" onSubmit={e => { this.speak(e) }}>
                    <input type="text" ref={(input) => { this.input = input; }} className="input-field" value={this.state.currentPhrase} onKeyDown={e => { this.getHistory(e) }} onChange={e => { this.changePhrase(e.target.value); }} />
                    <button type="submit" className="btn-submit">Say</button>
                    <button type="button" className="btn-clear" onClick={() => { this.clear() }}>Clear</button>
                </form>

                <div id="dialog" className="dialog">
                    { (typeof this.props.dialog === "undefined" || this.props.dialog.length < 1) &&
                        <p>&#60;{this.getCurrentTime()}&#62; eve: Hi, what's your name?</p>                    
                    }

                    { typeof this.props.dialog !== "undefined" && this.props.dialog.map((said, index) => {
                        let answer = said.answer.replace(/{{imageUrl=(.*)}}/g, "<br /><img src='$1' />");
                        answer = answer.replace(/{{imageCategory=(.*)}}/g, "$1");

                        return (
                            <div key={index}>
                                <p>
                                    <span>&#60;{said.time}&#62; {said.sentence}</span><br />
                                    <span>&#60;{said.time}&#62; <span dangerouslySetInnerHTML={ { __html: answer } }></span></span>
                                </p>
                            </div>
                        );
                    })}
            </div>
            </div>
        );
    }
}
