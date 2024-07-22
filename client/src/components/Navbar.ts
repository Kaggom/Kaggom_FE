import React from 'react';
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import Home from '../pages/Home';

const Navbar: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string): boolean => location.pathname === path;

    return (
        <Bar>
            <ul>
                <NavItem className={isActive('/':) ? 'active' : ''}>
                <Link to="/">Home</Link>
                </NavItem>
                </Bar>
    )
export default Navbar;


const Bar = styled.div`
    position: absolute;
    width: 72px;
    height: 719px;
    left: 381px;
    right: 0;
    top: 0px;
`;
