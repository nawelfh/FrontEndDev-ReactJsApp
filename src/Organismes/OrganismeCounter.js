import React from 'react'
import { Icon, Input} from '../designSystem/Atom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrganismeCounter(props) {
    return (
        <>
            <div onClick={props.logOut} className='flex item-center pointer absolute top-5 right-5' >
            <Button variant="outline-light" type="submit">
                logOut
                <Icon
                    icon='switch'
                    className='small-icon red ml-2'
                />
            </Button>
               
            </div>
            <div className='flex justify-center item-center form-container mx-auto p-5'>
                <Icon
                    onClick={() => props.onChangeCounter('DECREMENT')}
                    icon='circle-left'
                    className='big-icon pointer mr-4' />
                <Input
                    readOnly
                    value={props.counter}
                    className='text-center input-counter'
                    
                />
                <Icon
                    onClick={() => props.onChangeCounter('INCREMENT')}
                    icon='circle-right'
                    className='big-icon pointer ml-4' />
            </div>
        </>
    )
}

export default OrganismeCounter