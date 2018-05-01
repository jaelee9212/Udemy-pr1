import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Contact extends Component {

    
    render() {
        return (
            <li className='contact-list-item'>
                <div className='contact-avatar' style={{backgroundImage: `${this.props.url}`}}/>
                <div className='contact-details'>
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                </div>
                <button onClick={() => {this.props.remove(this.props)}}>
                    Remove
                </button>
                <button onClick={this.props.openUpdate(true)}>
                    update
                </button>
                <Link to ="/update">update</Link>
            </li>
        )
    }
}

export default Contact;