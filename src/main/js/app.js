import ReactDom from 'react-dom';
import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainPage from './MainPage';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});

function App() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <MainPage />
        </MuiThemeProvider>
    );
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);
