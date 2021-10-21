import React, { useEffect, useRef, useState } from "react";
import { Container, Dropdown, Wrapper, MobileSearch, Refresh, Menu, Utilities, Subscriptions, SubHeader } from "./style";
import getSubscriptions from "../../utils/getSubscriptions";

const MobileHeader = (props) => {

    const [open, setOpen] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(false);
    const [...subs] = getSubscriptions();
    const headerRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        
        const toggleOpen = (e) => {
            if (dropdownRef && dropdownRef.current && e.target !== dropdownRef.current && open) {
                setOpen(!open);
            }
        }
        window.addEventListener('click', toggleOpen);
        return () => window.removeEventListener('click', toggleOpen);
    });

    useEffect(() => {
        function handleScroll() {
            if (headerRef.current > window.scrollY && !open) {
                setScrollingUp(false);
            }
            if (headerRef.current < window.scrollY && !open) {
                setScrollingUp(true);
            }
            headerRef.current = window.scrollY;
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleClick = (e) => {
        e.stopPropagation();
    };

    return (
        <Container scrolling={scrollingUp}>
            <Wrapper>
                <Dropdown open={open} onClick={() => setOpen(!open)}>Front Page &nbsp;&nbsp;&#9660;</Dropdown>
                <Subscriptions ref={dropdownRef} open={open}>
                    { subs.map(item => (
                        <li onClick={handleClick}>{item}</li>
                    ))}
                </Subscriptions>
                <Utilities>
                    <MobileSearch>&#x1F50D;</MobileSearch>
                    <Refresh>&#x21BB;</Refresh>
                    <Menu>&#x22EE;</Menu>
                </Utilities>
            </Wrapper>
            <SubHeader>
                <span>What's hot</span>
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </SubHeader>
        </Container>
    )
}

export default MobileHeader;