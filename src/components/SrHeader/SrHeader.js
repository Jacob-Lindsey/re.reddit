import { useState } from "react";
import styled from "styled-components";

const SrHeader = () => {

    const [active, setActive] = useState(2);

    return (
        <Wrapper>
            <ul>
                <li><LinkItem selected={active === 0 ? true : false} onClick={() => setActive(0)}>MY SUBREDDITS</LinkItem></li>
                -
                <li><LinkItem selected={active === 1 ? true : false} onClick={() => setActive(1)}>DASHBOARD</LinkItem></li>
                -
                <li><LinkItem selected={active === 2 ? true : false} onClick={() => setActive(2)}>HOME</LinkItem></li>
                -
                <li><LinkItem selected={active === 3 ? true : false} onClick={() => setActive(3)}>POPULAR</LinkItem></li>
                -
                <li><LinkItem selected={active === 4 ? true : false} onClick={() => setActive(4)}>ALL</LinkItem></li>
                -
                <li><LinkItem selected={active === 5 ? true : false} onClick={() => setActive(5)}>RANDOM</LinkItem></li>
                -
                <li><LinkItem selected={active === 6 ? true : false} onClick={() => setActive(6)}>USERS</LinkItem></li>
                -
                <li><LinkItem selected={active === 7 ? true : false} onClick={() => setActive(7)}>FRIENDS</LinkItem></li>
                -
                <li><LinkItem selected={active === 8 ? true : false} onClick={() => setActive(8)}>MOD</LinkItem></li>
                -
                <li><LinkItem selected={active === 9 ? true : false} onClick={() => setActive(9)}>MODQUEUE</LinkItem></li>
                -
                <li><LinkItem selected={active === 10 ? true : false} onClick={() => setActive(10)}>SAVED</LinkItem></li>
                -
                <li><LinkItem selected={active === 11 ? true : false} onClick={() => setActive(11)}>EDIT</LinkItem></li>
            </ul>
        </Wrapper>
    )
}

export default SrHeader;

const Wrapper = styled.header`
    background-color: rgb(204,204,204);
    height: 30%;
    padding: 3px 0px 0px 6px;
    position: absolute;
    top: 0;
    width: 100%;
    & > ul {
        cursor: default;
        display: flex;
        font-size: 0.57rem;
        font-weight: 400;
        gap: 5px;
        justify-content: flex-start;
        line-height: 1.2rem;
    }
    & > ul > li > span {
        cursor: pointer;
        font-size: 0.64rem;
        text-decoration: none;
        transform: scale(0.9,0.8);
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const LinkItem = styled.span`
    color: ${({ selected }) => selected ? 'rgb(210, 90, 50)' : 'rgb(0, 0, 0)'};
    display: inline-block;
    font-family: 'Roboto';
`;