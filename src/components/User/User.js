import { Wrapper, UserName, OnlineStatus, UserKarma, PostKarma, CommentKarma } from "./style";
import { Link } from "react-router-dom";

const User = () => {
    return (
        <Wrapper>
            <UserName><Link to="/profile" style={{ color: "rgb(140,179,217)",  textDecoration: "none" }}>Pantzzzzless</Link></UserName>
            <OnlineStatus> --- </OnlineStatus>
            <UserKarma>
                &nbsp;(&nbsp;
                <PostKarma>10,102</PostKarma>
                &nbsp;·&nbsp;
                <CommentKarma>124,439</CommentKarma>
                &nbsp;)&nbsp;
            </UserKarma>
        </Wrapper>
    )

}

export default User;