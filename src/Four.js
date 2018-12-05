import React, { Component } from 'react';
import {Link} from 'react-router';

class Four extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (   
            <div>
                <h1>I am Four</h1>
                <ul>
                    <li><Link to="/Four/123">Four Point One</Link></li>
                    <div>{this.props.children}</div>
                </ul>
            </div>
         );
    }
}
 
export default Four;