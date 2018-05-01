import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ContactList from './Contact/contact-list';
import SignIn from './SignIn/signIn'

class Home extends Component {
   
    state = {
        items : [],
        value : '',
        action: false
    }

    toggleUpdate = (action) =>{
        // this.setState({
        //     action
        // })
        // {(this.state.action===true) ? <Link to ="/update"></Link>: null}
    }

    search = (event) => {
        return (
            this.setState({
                ...this.state,
                items : this.props.items.filter((item) => (item.id.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1)),
                value : event.target.value
            })
        )
    }

    remove = (data) => {
            this.setState({...this.state, items: this.state.items.filter((item) => (item.name != data.name))})
    }   

    handleButtonClick = () =>{
        return (
            this.setState({...this.state, items : this.props.items, value : '',  action: false})
        )
    }

    componentWillMount () {
        
        this.setState({...this.state, items : this.props.items, value : '', action: false})
    }

    render() {
        console.log("myyyy" + this.props.items);
        return(
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        value = {this.state.value}
                        placeholder='Search contacts'
                        onChange= {this.search}
                    />
                    <Link to ="/signIn">Add</Link>
                </div>
                
                <div className='showing-contacts'>
                    <span> Now showing {this.state.items.length} of {this.props.items.length} total</span>
                    <button onClick= {this.handleButtonClick}>Show all</button>
                    
                </div>
                <ContactList items={this.props.items} remove={this.remove} openUpdate={() => this.toggleUpdate(true)} />
                
            </div>
        )
    }
}

export default Home;