import styled from "styled-components";

// MobileHeader

export const Container = styled.div`
    display: none;
    @media (max-width: 768px) {
        background-color: rgb(38,38,38);
        display: flex;
        flex-direction: column;
        padding-top: 5px;
        position: fixed;
        top: ${({ scrolling }) => scrolling ? '-100px' : '0px'};
        transition: all 0.25s linear;
        width: 100%;
    }
`;

export const Dropdown = styled.div`
    display: none;
    @media (max-width: 768px) {
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 1.1rem;
        height: 3rem;
        line-height: 3rem;
        text-indent: 20%;
        width: 12rem;
        > * {
                display: inline-block;
                transition: all 0.3s linear;
                transform: ${({ open }) => open ? 'rotate(180deg)' : 'rotate(0)'};
                width: 0.9rem;
            }       
    }
`;

export const Wrapper = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        color: #fff;
        display: flex;
        font-size: 0.9rem;
        height: 3rem;
        justify-content: space-between;
        line-height: 3rem;
        width: 100%;
    }
`;

export const Utilities = styled.div`
    display: none;
        
    @media (max-width: 768px) {
        color: #fff;
        display: flex;
        font-size: 1.15rem;
        font-weight: 600;
        height: 3rem;
        justify-content: space-evenly;
        line-height: 3rem;
        width: 30%;
    }
`;

export const MobileSearch = styled.div`
`;

export const Refresh = styled.div`
    transform: rotate(100deg);
`;

export const Menu = styled.div`
    
`;

export const Subscriptions = styled.ul`
    display: none;
    @media (max-width: 768px) {
        background-color: rgb(58,58,58);
        display: grid;
        grid-auto-rows: 3rem;
        position: absolute;
        height: 100vh;
        left: ${({ open }) => open ? '0' : '-100%'};
        overflow-y: scroll;
        transition: all 0.2s linear;
        width: 40%;
        & > li {
            border-bottom: 1px solid rgba(200,200,200,0.03);
            font-weight: 600;
            text-align: left;
            text-indent: 10%;
        }
        & > li:first-child {
            color: #ff6b2b;
        }
    }
    @media (max-width: 450px) {
        width: 60%;
    }
`;

// MobileSubHeader

export const SubHeader = styled.div`
    display: none;
    @media (max-width: 768px) {
        background-color: rgb(29,29,29);
        color: #ccc;
        display: flex;
        font-size: 0.8rem;
        height: 3rem;
        justify-content: space-between;
        line-height: 3rem;
        padding: 0px 5.5%;
        width: 100%;
        & > span:last-child {
            display: flex;
            flex-direction: column;
            gap: 7%;
            justify-content: center;
            width: 1.4rem;
        }
        & > span:last-child > span {
            background-color: #ccc;
            height: 0.15rem;
            width: 66%;
        }
        & > span:last-child > span:first-child {
            width: 100%;
        }
        & > span:last-child > span:last-child {
            width: 33%;
        }
        
    }
`;