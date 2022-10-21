import React from 'react';

class Navbar  extends React.Component {
    render() { 
        return (

            <nav className="navbar navbar-dark  " style = {{"background":"#1b3240"}}>
            <div className="container-fluid">
              <a className="navbar-brand ">Apna cart</a>
    
            </div>
          </nav>
            
        );
    }
}
 
export default Navbar;