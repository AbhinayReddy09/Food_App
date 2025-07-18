import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://i.pinimg.com/736x/82/be/d4/82bed479344270067e3d2171379949b3.jpg" 
                    alt="logo" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    );
};

const Restaurantcard = () =>{
    return (
        <div className="res-card">
        <img 
                    className="res-logo" 
                    alt="logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMEU66bWqrdH31zt3EGGEgeVfDIH6EUZGEQ&s"  
                />
            <h3>The Nawabs</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <Restaurantcard/>
            </div>

        </div>
    )
}
const AppLayout = () => (
    <div className="app">
        <Header/>
        <Body/>
    </div>
);

// Mounting the React app to the root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
