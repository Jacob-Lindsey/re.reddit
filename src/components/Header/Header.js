import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Wrapper, HeaderLeft, HeaderRight, HeaderImg, Separator,
         Inbox, Preferences, Logout } from "./style";
import MobileHeader from "../MobileHeader/MobileHeader";
import SrHeader from "../SrHeader/SrHeader";
import TabMenu from "../TabMenu/TabMenu";
import User from "../User/User";
import inboxEmpty from "../../images/inbox-empty.png";
import inboxActive from "../../images/inbox-active.png";

const Header = () => {

    const [isInboxActive, setIsInboxActive] = useState(false);

    return (
        <>
            <Wrapper>
                <SrHeader></SrHeader>

                <HeaderLeft>
                    
                <ImgLink to="/"><HeaderImg><span>re</span>.reddit</HeaderImg></ImgLink>
                    <TabMenu />
                
                </HeaderLeft>


                <HeaderRight>

                    <User />
                    <Separator>|</Separator>
                    <Inbox img={isInboxActive ? inboxActive : inboxEmpty}></Inbox>
                    <Separator>|</Separator>
                    <Preferences>preference</Preferences>
                    <Separator>|</Separator>
                    <Logout>logout</Logout>

                </HeaderRight>
            </Wrapper>
            <MobileHeader />
        </>
    )
}

export default Header;

const ImgLink = styled(Link)`
    color: black;
    text-decoration: none;
    width: 120px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;