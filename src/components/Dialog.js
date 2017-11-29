import React from 'react';
import DialogItem from './Dialog-Item';

const Dialog = (props) =>
    <div id="dialog" className="dialog">
        { (typeof props.dialog === "undefined" || props.dialog.length < 1) &&
            <p>&#60;{props.loadTime}&#62; eve: Hi, what's your name?</p>                    
        }

        { typeof props.dialog !== "undefined" && props.dialog.map((said, index) => {
            let answer = said.answer.replace(/{{imageUrl=(.*)}}/g, "<br /><img src='$1' />");
            answer = answer.replace(/{{imageCategory=(.*)}}/g, "$1");

            return <DialogItem
                        index={index}
                        time={said.time}
                        answer={said.answer}
                        sentence={said.sentence}
                    />;
        })}
    </div>

export default Dialog;