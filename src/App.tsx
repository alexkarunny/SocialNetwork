import React from 'react';
import './App.css';


function App() {
    return (
        <div className="App-wrapper">
            <header className='header'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX47gEOGCvxd42k4jH-Nv_-Yw2CfIjylnhVi4aV8Yr8TP3NrBOtzq7gnKVYeTBkYJXlEE&usqp=CAU"
                    alt=""/>
            </header>
            <nav className='nav'>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        new posts
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;


