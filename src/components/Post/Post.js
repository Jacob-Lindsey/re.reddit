import React from "react";
import { Link } from "react-router-dom";
import VoteButtons from "../vote-buttons/vote-buttons";
import getScreenSize from "../../utils/getScreenSize";
import { Wrapper, Details, SubDetails, Author,
         Location, FlairDesktop, FlairMobile, Image, SubDetailsLink, WrapperLink, Anchor
        } from "./style";

const Post = ({ post }) => {

  const screenWidth = getScreenSize().width;

  const handleClick = () => {
      window.location.href = post.url;
  }

  return (

    <>
        {screenWidth > 768 ?
            <Wrapper key={post.id}>
                <VoteButtons post={post} />
                <Details>
                    <>
                        {
                            post.url ?
                                <Anchor href={post.url}> {post.title} </Anchor>
                                    :
                                <span>{post.title}</span>
                        }
                        {
                            post.flair ? <FlairDesktop>{post.flair}</FlairDesktop> : null
                                    
                        }
                        
                        
                    </>
                    <SubDetails>submitted {post.createdAt} ago by&nbsp; <Link to="/profile"><Author>{post.createdBy}</Author></Link> &nbsp;to <Location>r/{post.subreddit}</Location></SubDetails>
                    <SubDetails>
                        <span>
                            <SubDetailsLink to={{ pathname: `/post/${post.id}`, state: {post} }}>{post.comments} comments</SubDetailsLink>
                            <span>source</span>
                            <span>share</span>
                            <span>save</span>
                            <span>hide</span>
                            <span>give award</span>
                            <span>report</span>
                            <span>crosspost</span>
                        </span>
                    </SubDetails>
                </Details>
                {
                    post.url ?
                        <Image onClick={handleClick}></Image>
                            :
                        <Image></Image>
                        

                }
            </Wrapper>
            
            

        :

            <WrapperLink to={{ pathname: `/post/${post.id}`, state: {post} }}>
                <VoteButtons post={post} />
                <Details>
                    <>
                        <FlairMobile>Flair</FlairMobile>
                        {post.title}
                    </>
                    <SubDetails>to r/{post.subreddit} by {post.createdBy}</SubDetails>
                    <SubDetails>{post.createdAt}</SubDetails>
                    <SubDetails>{post.comments} comments</SubDetails>
                </Details>
                <Image></Image>
            </WrapperLink>

        }
    </>
  );
};

export default Post;