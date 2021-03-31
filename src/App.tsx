import React from 'react';


function App() {
    return (
        <div className="App">
            <Header/>
            <Tech/>
        </div>
    );
}

function Header() {
    return (
        <div>
            <a href="#1">a</a>
            <a href="#1">b</a>
            <a href="#1">c</a>
        </div>
    )
}

function Tech() {
    return (
        <ul>
            <li>css</li>
            <li>saa</li>
            <li>asf</li>
            <li>fsa</li>
        </ul>
    )
}

export default App;


