import { Outlet } from 'react-router-dom';
import { FooterPrimary } from './Footer';

function Layout() {
    return(
        <div className="app-wrapper">
            <Outlet />

            <FooterPrimary />
        </div>
    );
}

export default Layout;