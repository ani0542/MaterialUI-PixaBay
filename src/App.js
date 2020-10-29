import React from 'react'
import NavBar from './components/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './components/Search';
function App() {
    return (
        <>
           <MuiThemeProvider>
               <NavBar/>
               <Search/>
            </MuiThemeProvider>
        </>
    )
}

export default App
