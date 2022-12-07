import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postItem } from '../../helpers/items';
import { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export default function Order() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        description: '',
        owner: '638c7e57e4ca94de71098947'
    })

    useEffect(() => {

        socket.on('newOrder', (order) => {
            console.log(order);
        });

        
    }, []);
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const { name, description } = form;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await postItem(form);
        console.log(data);
        socket.emit('newOrder', data);
        //navigate('/home');
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { 
                    m: 1, 
                    width: '25ch', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <h3>Registrar nueva donación</h3>
                <TextField
                    required
                    id="name"
                    label="Numero de mesa"
                    name="name"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <TextField
                    required
                    id="description"
                    label="Orden"
                    name="description"
                    value={ description }
                    onChange={ handleInputChange }
                />
                <Button variant="contained" className='m-2' onClick={ handleSubmit }>Registrar</Button>
            </div>
        </Box>
    );
}