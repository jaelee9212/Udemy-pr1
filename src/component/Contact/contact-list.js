import React from 'react';
import Contact from './contact';

const ContactList = (props) => {
    console.log(props.items);
    return (
        <ol className='contact-list'>
            {props.items.map((item) => {
                    return (<Contact key={item.id} name={item.name} email={item.email} url={item.avatarURL} remove={props.remove} openUpdate={() => props.openUpdate} />)
                })
            } 
        </ol>
    )
}

export default ContactList;