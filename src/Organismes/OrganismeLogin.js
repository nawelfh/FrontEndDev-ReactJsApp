import React from 'react'
import { Icon,  Text } from '../designSystem/Atom'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoleculeInput from '../designSystem/molecules/MoleculeInput';

function OrganismeLogin(props) {
    return (
        <div
            className='flex justify-center item-center flex-direction-column form-container mx-auto p-5'
        >
            <Text text='Login' />

            <MoleculeInput
            placeholder='Ajouter email '
            type = 'mail'
            onChange={(e) => props.changeInput(e,'mail')}
            value={props.state.mail.value}
            isValid={props.state.mail.isValid}
            isInvalid={props.state.mail.isInvalid}  
              /> 
          
           
           <MoleculeInput 
            placeholder='Ajouter password'
            type = 'password'
            onChange={(e) => props.changeInput(e,'password')}
            value={props.state.password.value}
            isValid={props.state.password.isValid}
            isInvalid={props.state.password.isInvalid}
          
            
            />
            <Icon  icon='key'
              className='small-icon red ml-2' />
            
             
            <div
                onClick={props.submit}
                className='flex item-center pointer'
            >
           <Button variant="outline-light" type="submit">
             login
             <Icon  icon='switch'
              className='small-icon red ml-2' />
            </Button>
           

              
                
            </div>
        </div>
    )
}

export default OrganismeLogin