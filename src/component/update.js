import React, {Component} from 'react';



class Update extends Component {
    state = {
        id: '',
        name: '',
        email:'',
        avatarURL:''
    }


    render(){
        return(
            <div>
                <form>
                    <input 
                    placeholder="Id"
                    onChange={e => this.setState({
                        id: e.target.value
                    })}/>
                    <input 
                    placeholder="Name"
                    onChange={e => this.setState({
                        name: e.target.value
                    })}/>
                    <input 
                    placeholder="Email"
                    onChange={e => this.setState({
                        email: e.target.value
                    })}/>
                    <input 
                    placeholder="Uri"
                    onChange={e => this.setState({
                        avatarURL: e.target.value
                    })}/><br/>
                    
                    <button>Submit</button>
                    <button>Cancel</button>
                </form>
            </div>
        )
    }
}

export default Update;