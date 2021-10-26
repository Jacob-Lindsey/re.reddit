import styled from "styled-components";

export const Wrapper = styled.div`
    display: ${props => props.commenting ? 'flex' : 'none'};
    flex-direction: column;
`;

export const CurrentUserTitle = styled.div`
    font-size: 0.85rem;
    margin: 0.35rem 0 0.3rem 0;
    & > span {
        color: rgb(140,179,217);
        cursor: pointer;
    }
`;

export const CommentTextArea = styled.textarea`
    background-color: rgb(51,51,51);
    border: 1px solid rgb(77,77,77);
    color: #eee;
    height: 110px;
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 500px;
`;

export const ButtonWrapper = styled.div`

`;

export const SaveButton = styled.button`
    background-color: rgb(77,77,77);
    color: #eee;
    cursor: pointer;
    line-height: 1.5rem;
    margin-right: 0.5rem;
    width: 3rem;
`;

export const CancelButton = styled.button`
    background-color: rgb(77,77,77);
    color: #eee;
    cursor: pointer;
    line-height: 1.5rem;
    width: 4rem;
`;
