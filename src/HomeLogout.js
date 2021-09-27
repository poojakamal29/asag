import React, {Component} from 'react';
import fire from 'firebase';

class HomeLogout extends Component {
    logout = () => {
        fire.auth.signOut()
    }
    render(){
        return (
            <React.Fragment>
                <h5> Welcome </h5>
                <button> onclick = {this.logout} Logout </button>
            </React.Fragment>
            
        )
    } 
}

export default HomeLogout