import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './app.css';

export default function App() {
    let navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    
    // this can be used to render the next page component or something!
    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    return (
        <div>
            <h1 className="helloWorld">Hello World!</h1>
            <p className="count">You clicked <strong>{count}</strong> times. <br />
            Click 10 times to unlock the username and password :)</p>
            <button className="count" onClick={() => {
                setCount(count+1)
                if(count === 9) {   //idk why its 9
                    render(
                        <div> 
                            {/* need to workout how to unrender this... */}
                            <p className="login">Username: batman<br />
                            Password: alfred</p>
                        </div>
                    )
                }
                }}>Click</button>
            <form className="login" onSubmit={handleSubmit}>
                Username: <input type="text" name="username" onChange={e => setName(e.target.value)} autocomplete="off"/><br />
                Password: <input type="password" name="password" onChange={s => setPassword(s.target.value)} autocomplete="off" /><br />
                <input type="button" value="Submit" onClick={() => {
                    if(name === "batman" && password === "alfred") {
                        navigate("/batcave");
                    }
                }} />
            </form>
        </div>
    );
}