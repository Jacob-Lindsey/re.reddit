import styled from "styled-components";

export const Wrapper = styled.header`
    background-color: rgb(105,105,105);
    border-bottom: 1px solid #5f99cf;
    display: flex;
    height: 6%;
    justify-content: space-between;
    position: relative;
    width: 100%;
    z-index: 99;
    
    @media (max-width: 768px) {
        flex-direction: column;
        left: -200%;
        top: 5rem;
        position: fixed;
        &:active {
            left: 0;
        }
    }
`;

export const HeaderLeft = styled.div`
    align-items: end;
    display: flex;
`;

export const HeaderImg = styled.span`
    cursor: pointer;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.6rem;
    margin: 2px 5px 0px 0px;
    width: 120px;
    vertical-align: bottom;
    & > span {
        color: rgb(140,190,255);
    }
`;

export const HeaderRight = styled.div`
    background-color: rgb(51,51,51);
    bottom: auto;
    display: flex;
    font-size: 0.7rem;
    height: 24px;
    justify-content: space-between;
    line-height 18px;
    padding: 4px;
    position: absolute;
    right: 0px;
    top: 30%;
    width: 21%;
`;

export const Separator = styled.span`
    color: rgb(128.128.128);
    font-weight: 400;
    margin: 0px 3px;
`;

export const Inbox = styled.a`
    background-image: url(${(props) => props.img});
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
    display: inline-block;
    font-family: arial;
    position: relative;
    width: 20px;
`;

export const Preferences = styled.a`
    color: rgb(140,179,217);
    cursor: pointer;
    font-family: arial;
    &:hover {
        text-decoration: underline;
    }
`;

export const Logout = styled.div`
    color: rgb(140,179,217);
    cursor: pointer;
    font-family: arial;
    margin-right: 2%;
    &:hover {
        text-decoration: underline;
    }
`;

export const Dropdown = styled.div`
    display: none;
    @media (max-width: 768px) {
        color: #ccc;
        cursor: pointer;
        display: block;
        font-size: 0.9rem;
        height: 3rem;
        line-height: 3rem;
        text-indent: 20%;
        width: 12rem;
    }
`;

export const MobileHeader = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        color: #ccc;
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
        color: #ccc;
        display: flex;
        font-size: 0.9rem;
        height: 3rem;
        justify-content: space-evenly;
        line-height: 3rem;
        width: 30%;
    }
`;

export const MobileSearch = styled.div`
`;

export const Refresh = styled.div`
`;

export const Menu = styled.div`
`;