import React from 'react';

const Interface = ({ loading, speak, currentPhrase, type, currentTime }) => {
    return (
        <div className="interface">
            <a href="http://www.tonyg.se/projects/sarabot/" title="Gå till startsidan">
                <img src="http://www.tonyg.se/projects/sarabot/assets/images/bot.jpg" className="bot-img" alt="Sarabot" />
            </a>

            <form className="dialog-form" onSubmit={e => { e.preventDefault(); speak(currentPhrase) }}>
                <input type="text" className="input-field"  value={currentPhrase} onChange={e => { type(e.target.value); }} />
                <button type="submit" className="btn-submit">Say</button>
                <button type="button" className="btn-clear" id="clear">Clear</button>
            </form>

            <div id="dialog" className="dialog">
                <p>&#60;{ currentTime }&#62; eve: Hi, what's your name?</p>
            </div>
        </div>
    );
}

export default Interface;