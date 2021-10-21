import styled from "styled-components";
import { Link } from "react-router-dom";

const SidePanel = () => {

    return (
        <Wrapper>
            <Search placeholder='search'></Search>
            <Submit to="/submit">Submit a new link</Submit>
            <Submit to="/submit">Submit a new text post</Submit>
            <PremiumPanel></PremiumPanel>
            <CreatePanel><p>Create your own re-sub</p></CreatePanel>
        </Wrapper>
    )
}

export default SidePanel;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 430px;
    position: absolute;
    right: 25px;
    top: 90px;
    width: 300px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Search = styled.input`
    background-color: rgb(51, 51, 51);
    border: 1px solid rgb(128, 128, 128);
    color: #eee;
    height: 8%;
    padding-left: 10px;
    &::-webkit-input-placeholder {
        color: rgb(118, 118, 118);
    }
`;

const Submit = styled(Link)`
    background-color: rgb(68, 68, 68);
    border-style: none;
    color: rgb(140, 179, 217);
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    height: 8%;
    line-height: 2rem;
    &:hover {
        background-color: rgb(51, 51, 51);
        color: rgb(20, 150, 220);
    }
`;

const PremiumPanel = styled.div`
    background-color: rgb(28, 42, 56);
    border: 1px solid #ccc;
    cursor: pointer;
    height: 35%;
`;

const CreatePanel = styled.div`
    background-color: rgb(57, 57, 57);
    border-top: 30px solid rgb(68, 68, 68);
    cursor: pointer;
    height: 20%;
    & > p {
        color: rgb(140, 179, 217);
        font-weight: 500;
        letter-spacing: -0.5px;
        position: absolute;
        text-align: center;
        top: 325px;
        width: 100%;
    }
`;