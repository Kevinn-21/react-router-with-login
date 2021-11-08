import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import App from './app';
import Batcave from './batcave';

const routing = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="batcave" element={<Batcave />} />
        </Routes>
    </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));
