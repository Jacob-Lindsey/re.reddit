import styled from "styled-components";

export const PostTitle = styled.div`
    color: rgb(180,180,180);
    text-align: left;
`;

export const PostAuthor = styled.div`
    color: rgb(130,130,130);
    font-size: 0.7rem;
    text-align: left;
`;

export const Divider = styled.hr`
    border: 1px solid rgb(90,90,90);
    margin-bottom: 1.8rem;
    width: 95%;
`;

export const PostContent = styled.div`
    background-color: rgb(51,51,51);
    border: 1px solid rgb(90,90,90);
    border-radius: 8px;
    color: #ddd;
    margin: 10px 0px 30px 0px;
    padding: 10px;
    width: 50%;
`;

export const NewCommentWrapper = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
`;

export const CommentTextBox = styled.textarea`
    background-color: rgb(51,51,51);
    color: #ddd;
    font-size: 0.9rem;
    height: 8rem;
    padding: 10px;
    width: 35rem;
`;

export const SubmitButton = styled.button`
    background-color: rgb(51,51,51);
    color: #ddd;
    font-size: 0.9rem;
    height: 2rem;
    margin: 30px 0px 30px 0px;
    width: 4rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Comment = styled.div`
    background-color: rgb(22,22,22);
    color: #ddd;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    margin: 5px 0px;
    padding: 10px 0px 10px 20px;
    text-align: left;
    width: 100%:
`;

export const CommentTop = styled.div`
    display: flex;
    font-size: 0.75rem;
    gap: 10px;
`;

export const Author = styled.div`
    color: rgb(106, 152, 175);
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const Karma = styled.div`

`;

export const TimePosted = styled.div`

`;

export const Controls = styled.div`

`;