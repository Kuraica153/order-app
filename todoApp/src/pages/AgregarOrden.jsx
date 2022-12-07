import ResponsiveDrawer from '../components/AddOrder/ResponsiveDrawer';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';

export const AgregarOrden = ({ clearToken }) => {
    
    const op = [
        {
            text: 'Inicio',
            icon: <HomeIcon />,
            link: '/home'
        },
        {
            text: 'Registrar Donación',
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
