import { Wrapper, UserName, OnlineStatus, UserKarma, PostKarma, CommentKarma } from "./style";
import { Link } from "react-router-dom";

const User = (displayName) => {

    const username = displayName.displayName ? displayName.displayName : 'guest';
    
    return (
        <Wrapper>
            <UserName><Link to="/profile" style={{ color: "rgb(140,179,217)",  textDecoration: "none" }}>{username}</Link></UserName>
            <OnlineStatus>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</OnlineStatus>
            <UserKarma>
                &nbsp;(&nbsp;
                <PostKarma>0</PostKarma>
                &nbsp;·&nbsp;
                <CommentKarma>0</CommentKarma>
                &nbsp;)&nbsp;
            </UserKarma>
        </Wrapper>
    )

}

export default User;