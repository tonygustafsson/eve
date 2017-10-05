import React from 'react';

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

    speak(e) {
        e.preventDefault();

        if (this.state.currentPhrase) return;

        this.props.speak(this.state.currentPhrase, this.getCurrentTime());
        this.setState({currentPhrase: ''});

        this.input.focus();
    }

    changePhrase(phrase) {
        this.setState({
            currentPhrase: phrase,
        });
    }

    render() {
        return (
            <div className="interface">
                <a href="http://www.tonyg.se/projects/sarabot/" title="Gå till startsidan">
                    <img src="http://www.tonyg.se/projects/sarabot/assets/images/bot.jpg" className="bot-img" alt="Sarabot" />
                </a>

                <form className="dialog-form" onSubmit={e => { this.speak(e) }}>
                    <input type="text" ref={(input) => { this.input = input; }} className="input-field" value={this.state.currentPhrase} onChange={e => { this.changePhrase(e.target.value); }} />
                    <button type="submit" className="btn-submit">Say</button>
                    <button type="button" className="btn-clear" id="clear">Clear</button>
                </form>

                <div id="dialog" className="dialog">
                    <p>&#60;{this.getCurrentTime()}&#62; eve: Hi, what's your name?</p>

                    {typeof this.props.dialog !== "undefined" && this.props.dialog.map((said) => {
                        return (
                            <div key={said.time}>
                                <p>
                                    <span>&#60;{said.time}&#62; {said.sentence}</span><br />
                                    <span>&#60;{said.time}&#62; {said.answer}</span>
                                </p>
                            </div>
                        );
                    })};
            </div>
            </div>
        );
    }
}
