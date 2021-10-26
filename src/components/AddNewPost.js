import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { db } from "../lib/firebase";

const AddNewPost = (props) => {

    const [tab, setTab] = useState(true);
    const [title, setTitle] = useState("");
    const [textContent, setTextContent] = useState("");
    const [linkContent, setLinkContent] = useState("");
    const [flairContent, setFlairContent] = useState("");
    const [errorMsg, setErrorMsg] = useState('');

    const history = useHistory();

    const tempSubreddit = "RocketLeague";

    const toggleToLeft = () => {
        setTab(true);
    }

    const toggleToRight = () => {
        setTab(false);
    }

    const handleSubmit = async () => {
        const date = new Date();

        if (title === "") {
            setErrorMsg('You must enter a title for your post');
            return
        }

        setErrorMsg('');

        if (tab) {
            await db.collection("posts").add({
                comments: 0,
                createdAt: date.toUTCString(),
                createdBy: props.user.email,
                downVotesCount: 0,
                ...flairContent && { flair: flairContent },
                subreddit: tempSubreddit,
                textContent,
                title,
                updateAt: date.toUTCString(),
                upVotesCount: 0,
            }).then(
                history.push("/")
            );
        } else {
            if (linkContent === "") {
                setErrorMsg("You must enter a valid URL");
                return
            }
            await db.collection("posts").add({
                comments: 0,
                createdAt: date.toUTCString(),
                createdBy: props.user.email,
                downVotesCount: 0,
                ...flairContent && { flair: flairContent },
                subreddit: tempSubreddit,
                textContent,
                title,
                url: linkContent,
                updateAt: date.toUTCString(),
                upVotesCount: 0,
            }).then(
                history.push("/")
            );
        }

        setTitle("");
    };

    return (
        <Wrapper>
            <Header>
                <span>
                    {
                        tab ? 'submit a new text post' : 'submit a new link'
                    }
                </span>
                <div>
                    <ToggleTab onClick={toggleToLeft} tab={tab}>TEXT POST</ToggleTab>
                    <ToggleTab onClick={toggleToRight} tab={!tab}>LINK POST</ToggleTab>
                </div>
            </Header>
            <TitleBox>
                <label><span>* </span>title</label>
                <textarea
                    cols="30"
                    rows="4"
                    type="post-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </TitleBox>
            {
                tab ?
                    <TextBox>
                        <label><span>* </span>text</label>
                        <textarea
                            cols="30"
                            rows="24"
                            type="post-text"
                            value={textContent}
                            onChange={(e) => setTextContent(e.target.value)}   
                        />
                    </TextBox>
                    :
                    <InputBox>
                        <label><span>*</span>link url</label>
                        <input 
                            type="text"
                            value={linkContent}
                            onChange={(e) => setLinkContent(e.target.value)}
                        />
                    </InputBox>
            }
            <InputBox>
                <label>flair</label>
                <input 
                    type="text"
                    value={flairContent}
                    onChange={(e) => setFlairContent(e.target.value)}
                />
            </InputBox>
            <ErrorMessage error={errorMsg}>
                {errorMsg}
            </ErrorMessage>

            
            <Submit onClick={handleSubmit}>submit</Submit>
        </Wrapper>
    )
}

export default AddNewPost;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
    position: relative;
    width: 40%;
`;

const Header = styled.div`
    color: #ddd;
    display: flex;
    font-size: 1.2rem;
    margin: 1rem 0 0.5rem 0.4rem;
    justify-content: space-between;
    text-align: left;
    & > div {
        cursor: pointer;
        display: flex;
        gap: 10px;
    }
    & > div > span {
        border-radius: 8px;
        padding: 0.75rem;
        transition: all 0.15s linear;
        &:hover {
            background-color: rgba(140,190,255,0.3);
            border: 2px solid rgb(140,190,255);
            color: #fff;
        }
    }
`;

const ToggleTab = styled.span`
    background-color: ${props => props.tab ? 'rgba(140,190,255,0.3)' : 'rgb(38,38,38)'};
    border: 2px solid ${props => props.tab ? 'rgb(140,190,255)' : 'rgb(111,111,111)'};
    color: ${props => props.tab ? '#fff' : '#ddd'};
`;

const TitleBox = styled.div`
    background-color: rgb(24,24,24);
    color: #ddd;
    display: flex;
    flex-direction: column;
    padding: 5px 20px 30px 20px;
    text-align: left;
    & > label {
        font-size: 1.2rem;
        margin: 5px 0px;
    }
    & > label > span {
        color: red;
    }
    & > textarea {
        background-color: rgb(51,51,51);
        color: #eee;
        font-size: 1rem;
        padding: 0.8rem 0.8rem 0 0.8rem;
    }
`;

const TextBox = styled.div`
    background-color: rgb(24,24,24);
    color: #ddd;
    display: flex;
    flex-direction: column;
    padding: 5px 20px 30px 20px;
    text-align: left;
    & > label {
        font-size: 1.2rem;
        margin: 5px 0px;
    }
    & > label > span {
        color: red;
    }
    & > textarea {
        background-color: rgb(51,51,51);
        color: #eee;
        font-size: 1rem;
        padding: 0.8rem 0.8rem 0 0.8rem;
    }
`;

const InputBox = styled.div`
    background-color: rgb(24,24,24);
    color: #ddd;
    display: flex;
    flex-direction: column;
    padding: 5px 20px 30px 20px;
    text-align: left;
    & > label {
        font-size: 1.2rem;
        margin: 5px 0px;
    }
    & > label > span {
        color: red;
    }
    & > input {
        background-color: rgb(51,51,51);
        color: #eee;
        font-size: 1rem;
        padding: 0.5rem 0 0.5rem 0.8rem;
    }
`;


const Submit = styled.button`
    background-color: rgb(77,77,77);
    border-width: 1px;
    color: #fff;
    height: 2rem;
    width: 4rem;
`;

const ErrorMessage = styled.span`
    bottom: 0.6rem;
    color: rgb(255,10,0);
    font-size: 0.8rem;
    left: 5rem;
    position: absolute;
    visibility: ${props => props.error ? 'visible' : 'hidden'};
`;