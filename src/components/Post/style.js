import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 25px;
    @media (max-width: 768px) {
        background-color: black;
        border-bottom: 1px solid rgba(158,158,158,0.25);
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0px 20px 0px 8px;
        & > span {
            font-size: 0.7rem;
        }
`;

export const WrapperLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    margin-left: 25px;
    @media (max-width: 768px) {
        background-color: black;
        border-bottom: 1px solid rgba(158,158,158,0.25);
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0px 20px 0px 8px;
        & > span {
            font-size: 0.7rem;
    }
`;

export const Karma = styled.div`
    order: 1;
    color: rgb(84,84,84);
    font-weight: 600;
    & > span {
        cursor: pointer; 
    }
    & > span:first-child:hover {
        color: rgba(0,220,0,0.7);
    }
    & > span:last-child:hover {
        color: rgba(250,0,0,0.7);
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        order: 1;
        padding: 10px 0px;
        & > span {
            color: rgb(84,84,84);
        }
        & > div {
            color: #fff;
            font-size: 0.78rem;
            font-weight: 600;
        }
    }
`;

export const Details = styled.div`
    color: #eee;
    cursor: pointer;
    order: 3;
    padding: 6px 0px 0px 4px;
    text-align: left;
    width: 75%;
    &:hover {
        background-color: rgb(55, 55, 55); 
    }
    @media (max-width: 768px) {
        color: #fff;
        font-size: 0.9rem;
        margin: 6px 0px 0px 8px;
        order: 2;
        padding: 8px 0px 6px 4px;
        text-align: left;
    }
`;

export const SubDetails = styled.div`
    color: #888;
    cursor: pointer;
    font-size: 0.65rem;
    margin: 4px 0px 0px 0px;
    text-align: left;
    
    & > span > span {
        cursor: pointer;
        font-size: 0.73rem;
        font-weight: 600;
        margin: 0px 8px 0px 0px;
        &:hover {
            text-decoration: underline;
        }
    }
    @media (max-width: 768px) {
        color: #bbb;
        font-size: 0.65rem;
        font-weight: 300;
        margin-top: 2px;
    }
`;

export const SubDetailsLink = styled(Link)`
    color: #888;
    cursor: pointer;
    font-size: 0.73rem;
    font-weight: 600;
    margin: 0px 8px 0px 0px;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        color: #bbb;
        font-size: 0.65rem;
        font-weight: 300;
        margin-top: 2px;
    }
`;

export const Author = styled.span`
    color: rgb(106, 152, 175);
    &:hover {
        text-decoration: underline;
    }
`;

export const Location = styled.span`
    color: rgb(106, 152, 175);
    &:hover {
        text-decoration: underline;
    }
`;

export const FlairDesktop = styled.span`
    background-color: rgb(58,58,58);
    cursor: pointer;
    display: inline;
    font-size: 0.75rem;
    margin-left: 10px;
    padding: 3px 2px;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

export const FlairMobile = styled.span`
    background-color: rgb(58,58,58);
    display: none;
    font-size: 0.75rem;
    margin-right: 4px;
    padding: 3px 2px;
    @media (max-width: 768px) {
        display: inline;
    }
`;

export const Image = styled.div`
    background-color: #777;
    border-radius: 50%;
    cursor: pointer;
    height: 3.6rem;
    margin: 0px 10px;
    order: 2;
    width: 3.6rem;
    @media (max-width: 768px) {
        border-radius: 5%;
        height: 3rem;
        margin: auto 0;
        order: 3;
        width: 3.5rem;
    }
`;

export const Title = styled.div`
`;

export const Anchor = styled.a`
    &:link {
        color: #eee;
    }
    &:visited {
        color: rgb(136,136,136);
    }
`;