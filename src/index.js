import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search_component';

const MyApp = () => {
    return (
        <div>
        <Search />
        </div>
    );
}

ReactDOM.render(<MyApp />, document.querySelector('.root'));