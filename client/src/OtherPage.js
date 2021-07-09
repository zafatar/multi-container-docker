import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OtherPage extends Component {
    render() {
        return (
            <div>
                On the other page.
                <Link to="/">Home Page</Link>
            </div>
        );
    }
}

export default OtherPage;
