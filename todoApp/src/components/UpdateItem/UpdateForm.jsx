import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postItem } from '../../helpers/items';
import { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import { getItem, updateItem } from '../../helpers/items';

export default function UpdateForm() {

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        getItem(id).then((item) => {
            setForm({
                name: item.title,
                description: item.description,
                owner: '638c7e57e4ca94de71098947'
            })
        });
    }, []);
    
    const [form, setForm] = useState({
        name: '',
        description: '',
        owner: '638c7e57e4ca94de71098947'
    })    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const { name, description } = form;

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            id: id,
            ...form
        }

        updateItem(item);
        navigate('/home');
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
                    label="Nombre del artículo"
                    name="name"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <TextField
                    required
                    id="description"
                    label="Descripción del artículo"
                    name="description"
                    value={ description }
                    onChange={ handleInputChange }
                />
                <Button variant="contained" className='m-2' onClick={ handleSubmit }>Actualizar</Button>
            </div>
        </Box>
    );
}