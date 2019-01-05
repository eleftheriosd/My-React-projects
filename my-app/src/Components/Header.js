import React from "react"


function Header (){
    return(
    <div style={{display:"flex",backgroundColor:"lightgreen"}}>
        <header >
        <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
         alt="Problem?" style={{width :100,height:100}} />
        </header>
        <p>Meme Generator</p>         
    </div>
    )
}

export default Header;