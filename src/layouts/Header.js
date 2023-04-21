import { NavbarLight, NavbarDark, NavbarFixed } from './Navbar';
import Offcanvas from './Offcanvas';

export function HeaderLight() {
    return (
        <header className="header">
            <NavbarLight />
            <Offcanvas />
        </header>
    )
}

export function HeaderFixed() {
    return (
        <header className="header">
            <NavbarFixed />
            <Offcanvas />
        </header>
    );
}

export function HeaderDark() {
    return (
        <header className="header">
            <NavbarDark />
            <Offcanvas />
        </header>
    );
}