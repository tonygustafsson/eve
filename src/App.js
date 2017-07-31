import React from 'react';
import './App.css';

import { InterfaceComponent } from './containers/Eve';

const App = () => {
    return (
        <div className="app">
            <h1>Eve - Lady Talkalot</h1>

            <InterfaceComponent />
        </div>
    );
}

export default App;