import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
margin-right: 20px;
text-decoration: none;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 8; 
    border-bottom: 1px solid black; 
    margin-bottom: 12;
`;