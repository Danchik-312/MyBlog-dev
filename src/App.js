import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Tags from "./components/Tags";
import Footer from "./components/Footer";
import Post from "./components/Post";
import PopularPost from "./components/PopularPost";
import posts from "./data/posts";

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: '1400px'}}>
                <Header/>
                <div className="w3-row">
                    <div className="w3-col l8 s12">
                        {
                            posts.map((item) => {
                                return(
                                    <Post
                                        imglink={item.imglink}
                                        imgAlt={item.imgAlt}
                                        postTitle={item.postTitle}
                                        postData={item.postData}
                                        postContent={item.postContent}
                                        countComments={item.countComments}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="w3-col l4">
                        <About/>
                        <PopularPost/>
                        <Tags/>
                    </div>
                </div><br />
            </div>
            <Footer/>
        </>
    );
};

export default App;