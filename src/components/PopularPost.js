import React from 'react';
import popularItem from './../data/popularPosts';

const PopularPostItem = (props) => {
    return (
        <li className="w3-padding-16">
            <img src={props.imgLink} alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
            <span className="w3-large">{props.postTitle}</span><br />
            <span>{props.postSubtitle}</span>
        </li>
    );
};

const PopularPost = () => {
    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul className="w3-ul w3-hoverable w3-white">
                    {
                        popularItem.map((item) => {
                            return (
                                <PopularPostItem
                                    imgLink = {item.imgLink}
                                    postTitle = {item.postTitle}
                                    postSubtitle = {item.postSubTitle}
                                />
                            )
                        })
                    }
                </ul>
            </div>
            <hr />
        </>
    );
};

export default PopularPost;

/*<PopularPostItem
                        imgLink = 'https://www.w3schools.com/w3images/workshop.jpg'
                        postTitle = 'Lorem'
                        postSubTitle = 'Sed mattis nunc'
                    />
                    <PopularPostItem
                        imgLink = 'https://www.w3schools.com/w3images/gondol.jpg'
                        postTitle = 'Ipsum'
                        postSubTitle = 'Praes tinci sed'
                    />
                    <PopularPostItem
                        imgLink = 'https://www.w3schools.com/w3images/skies.jpg'
                        postTitle = 'Dorum'
                        postSubTitle = 'Ultricies congue'
                    />
                    <PopularPostItem
                        imgLink = 'https://www.w3schools.com/w3images/rock.jpg'
                        postTitle = 'Mingsum'
                        postSubTitle = 'Lorem ipsum dipsum'
                    />*/