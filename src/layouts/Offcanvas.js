import { Link } from 'react-router-dom';
import logo from '../logo.svg';

export default function Offcanvas() {
    return(
        <div className="offcanvas offcanvas-end" id="navbarNav" tabIndex="-1" aria-labelledby="navbarNavLabel">
            <div className="offcanvas-header border-bottom">
                <Link className="navbar-brand" to="/">
                    <img className="navbar-brand-img" src={logo} alt="Omega" style={{height: '35px', width: 'auto'}} />
                </Link>

                <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close offcanvas"></button>
            </div>
        </div>
    )
}