// JavaScript source code
import React from "react";
import Footer from "./Footer"
import MainContent from "./MainContent"
import Header from "./Header"
import ContactCard from "./ContactCard"
import ReactDOM from 'react-dom';


function MyInfo() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
            <ContactCard
                contact={{
                    name: "Mr.Tsatsalas", imgUrl: "http://placekitten.com/500/200",
                    phone: "2710238059", email: "Tsatsalas@ko.com", state:"OK"
                }}
            />
            <ContactCard
                contact={{
                    name: "Mr.Tsouts", imgUrl: "http://placekitten.com/400/200",
                    phone: "4556321", email: "DSADSA@ko.com", state: "OK" 
                }}
            />
            <ContactCard
                contact={{
                    name: "Mr.J", imgUrl: "http://placekitten.com/400/300",
                    phone: "321321", email: "DRA@ko.com", state: "OK"
        }}
            />
            <ContactCard
                contact={{
                    name: "Mr.Kouk", imgUrl: "http://placekitten.com/300/200",
                    phone: "67589421", email: "CHSWS@ko.com", state: "Not ok"
                }}
            />
        </div>
    )
}


export default MyInfo