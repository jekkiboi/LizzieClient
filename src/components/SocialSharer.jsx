import React from 'react';
import { Container, Segment, } from 'semantic-ui-react'
import {FacebookShareButton, RedditShareButton} from "react-share"
import {FacebookIcon, RedditIcon} from "react-share"

function SocialSharer() {
    return (
    <>
        <Container className="line-em-up">
            <Segment>
                <FacebookShareButton url="https://www.facebook.com/Lizzie-105329358581012">
                    <div className="facebook-logo">
                        <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>  
                    </div>
                </FacebookShareButton>
            </Segment>
            &nbsp;
            <Segment>
                <RedditShareButton url="https://www.reddit.com/">
                    <div className="facebook-logo">
                        <RedditIcon logoFillColor="white" round={true}></RedditIcon>  
                    </div>
                </RedditShareButton>
            </Segment>
        </Container>
    </>
    )
}
export default SocialSharer;















