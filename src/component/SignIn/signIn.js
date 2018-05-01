import React from 'react';
import './signIn.css';

const SignIn = () => {

    return (
        <div>
            <a href="#" className='close-create-contact'>Close</a>
                <form className='create-contact-form'>
                <div className='create-contact-avatar-input' name='avatarURL' maxHeight='64'>
                    <input type="hidden"/>
                    <input
                        className= 'inputCont'
                        type="file"
                    />
                </div>
                <div className='create-contact-details'>
                    <input type='text' name='name' placeholder='Name'/>
                    <input type='text' name='email' placeholder='Email'/>
                    <button>Add Contact</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;