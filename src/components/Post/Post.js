import React from "react";
import { Link } from "react-router-dom";
import VoteButtons from "../vote-buttons/vote-buttons";
import getScreenSize from "../../utils/getScreenSize";
import { Wrapper, Details, SubDetails, Author,
         Location, FlairDesktop, FlairMobile, Image, SubDetailsLink, WrapperLink
        } from "./style";

const Post = ({ post }) => {

  const screenWidth = getScreenSize().width;

  return (

    <>
        {screenWidth > 768 ?
            <Wrapper key={post.id}>
                <VoteButtons post={post} />
                <Details>
                    <>
                        {post.title}
                        <FlairDesktop>Flair</FlairDesktop>
                    </>
                    <SubDetails>submitted {post.createdAt} ago by&nbsp; <Author>{post.createdBy}</Author> &nbsp;to <Location>r/{post.subreddit}</Location></SubDetails>
                    <SubDetails>
                        <span>
                            <SubDetailsLink to={{ pathname: `/post/${post.id}`, state: {post} }}>{post.comments.length} comments</SubDetailsLink>
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
                <Image></Image>
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
                    <SubDetails>{post.comments.length} comments</SubDetails>
                </Details>
                <Image></Image>
            </WrapperLink>

        }
    </>
  );
};

export default Post;