import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import '../../assets/css/home/home.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Item({ id, title, description, createdAt, handleDelete }) {

    const navigate = useNavigate();

    //Function that Navigates to the edit page
    const handleEdit = (e) => {
        e.preventDefault();
        navigate(`/edit/${id}`);
    }

    return (
        <Paper className='p-3 m-2' >
            <div className='title-row'>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    {title}
                </Typography>
                <div className='actions'>
                    <IconButton className='edit-btn' value={id} onClick={ handleEdit }><EditIcon /></IconButton>
                    <IconButton className='delete-btn' value={id} onClick={ handleDelete }><DeleteIcon /></IconButton>
                </div>
            </div>
            <div className='description-row'>
                <Typography component="p" variant="h4">
                    {description}
                </Typography>
                <Typography color="text.secondary">
                    {createdAt}
                </Typography>
            </div>
        </Paper>
    );
}