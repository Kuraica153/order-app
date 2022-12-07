import ResponsiveDrawer from '../components/homepage/ResponsiveDrawer';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const HomePage = ({ clearToken }) => {
    
    const op = [
        {
            text: 'Inicio',
            icon: <HomeIcon />,
            link: '/home'
        },
        {
            text: 'Registrar Orden',
            icon: <AddBoxIcon />,
            link: '/order'
        }
    ]
    
    return (
        <>
            <ResponsiveDrawer opciones={op} clearToken={clearToken} />
        </>
    )
}
