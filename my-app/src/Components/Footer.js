// JavaScript source code
import React from "react"
import ReactDOM from 'react-dom';

function Footer() {

    const date = new Date();
    const hours= date.getHours()
    let timeOfDay ;
    const styles = {
        fontSize: 30,
        color: "#ff0000"
    }
    if (hours < 12) {
        timeOfDay = "Morning";
        styles.color = "#ff0000";
    } else if (hours > 12 && hours < 19) {
        timeOfDay = "Afternoon";
        styles.color = "#00ff00";
    } else {
        timeOfDay = "Night";
        styles.color = "#0000ff"
    }

    return (
        <footer>
            <h3 style={styles}>Good{` ${timeOfDay}`}!</h3>
        </footer>
    )
}

export default Footer// JavaScript source code
