import styled from "styled-components";


export const Wrapper = styled.ul`
    display: flex;
    font-size: 0.78rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
    width: 28%;
`;

export const TabMenuItem = styled.li`
    cursor: pointer;
    display: inline;
    list-style: none;
    margin: 0px 3px;
    white-space: nowrap;
`;

export const ItemLink = styled.a`
    background-color: rgb(38,38,38);
    border: 1px solid rgba(95, 153, 207, ${({ active }) => active ? 1 : 0});
    border-bottom: 1px solid ${({ active }) => active ? 'rgb(38, 38, 38)' : 'rgb(95, 153, 207)'};
    color: ${({ active }) => active ? 'rgb(210, 90, 50)' : 'rgb(140, 179, 217)'};
    padding: 2px 6px 0px 6px;
    z-index: ${({ active }) => active ? 100 : 'inherit'};
`;