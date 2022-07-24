import { Link, Header } from "./appBar.styled";

export const AppBar = () => {
    return (
        <Header>
            <nav>
                 <Link to="/register">Registration</Link>
                 <Link to="/login">Log in</Link>
                 <Link to="/contacts">Contacts</Link>
            </nav> 
        </Header>
    );
}