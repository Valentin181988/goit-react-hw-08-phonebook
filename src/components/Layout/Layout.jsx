import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/appBar';

export const Layout = () => {
    return (
        <div>
            <AppBar />            
            <Outlet />
        </div>

    );
};