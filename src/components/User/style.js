import styled from "styled-components";

export const Wrapper = styled.span`
`;

export const UserName = styled.a`
    color: rgb(140,179,217);
    cursor: pointer;
    font-family: arial;
    &:hover {
        text-decoration: underline;
    }
`;

export const OnlineStatus = styled.span`
    color: rgb(140,179,217);
    font-family: arial;
`;

export const UserKarma = styled.span`
    color: rgb(190,190,190);
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const PostKarma = styled.a`
    color: rgb(140,179,217);
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const CommentKarma = styled.a`
    color: rgb(140,179,217);
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const Separator = styled.span`
    color: rgb(128.128.128);
    font-weight: 400;
    margin: 0px 3px;
`;