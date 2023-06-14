import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    gap: 413px;

    width: 292px;
    height: 1014px;

    background: #0E2019;
    border-radius: 12px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const NavBar = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    gap: 30px;

    width: 292px;
    height: 381.22px;


    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const NavLink = styled.li`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 11px 30px;
    gap: 29px;

    width: 167px;
    height: 46px;


    /* Inside auto layout */
    flex: none;
    flex-grow: 0;
`

export const NavIcon = styled.div`
    height: fit-content;
    width: 30px;
    background: #FFFFFF;
    background: url(${({bg}) => bg}) contain center;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const Link = styled(Link)`
    width: 49px;
    height: 22px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.035em;

    color: #FFFFFF;


    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
`