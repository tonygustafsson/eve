import React from 'react';

const Interface = ({ loading }) => {
    return (
        <div className="interface">
            <a href="http://www.tonyg.se/projects/sarabot/" title="Gå till startsidan">
                <img src="http://www.tonyg.se/projects/sarabot/assets/images/bot.jpg" class="bot-img" alt="Sarabot" />
            </a>

            <form method="post" id="dialog_form" class="dialog-form" action="http://www.tonyg.se/projects/sarabot/bot/speak">
                <input id="input_field" class="input-field" type="text" name="input" />
                <input type="submit" value="Say" class="btn-submit" />
                <input type="button" value="Clear" class="btn-clear" id="clear" data-url="http://www.tonyg.se/projects/sarabot/bot/forget" />
            </form>

            <div id="dialog" class="dialog">
                <p>&#60;18:35:04&#62; eve: Hi, what's your name?</p>
            </div>


        </div>
    );
}

export default Interface;