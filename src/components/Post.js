import React from 'react';

const Post = (props) => {
    return (
        <>
            <div className="w3-card-4 w3-margin w3-white">
                <img src={props.imglink} alt={props.imgAlt} style={{width: '100%'}} />
                <div className="w3-container">
                    <h3><b>{props.postTitle}</b></h3>
                    <h5>Title description, <span className="w3-opacity">{props.postData}</span></h5>
                </div>
                <div className="w3-container">
                    <p>{props.postContent}</p>
                    <div className="w3-row">
                        <div className="w3-col m8 s12">
                            <p><button className= "w3-button w3-padding-large w3-border"><b>ДАЛЕЕ »</b></button></p>
                        </div>
                        <div className="w3-col m4 w3-hide-small">
                            <p><span className="w3-padding-large w3-right"><b>Comments &nbsp;</b> <span className="w3-tag">{props.countComments}</span></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Post;