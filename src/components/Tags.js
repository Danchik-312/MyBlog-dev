import React from 'react';

const TagsItem = (props) => {
    return (
        <span className={`w3-tag ${props.colorTag} w3-margin-bottom`}>{props.content}</span>
    );
};

const Tags = () => {
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div className="w3-container w3-white">
                <p>
                    <TagsItem
                        content='Travel'
                        colorTag='w3-black'
                    />
                    <TagsItem
                        content='New York'
                    />
                    <TagsItem
                        content='London'
                    />
                    <TagsItem
                        content='IKEA'
                    />
                    <TagsItem
                        content='NORWAY'
                    />
                    <TagsItem
                        content='DIY'
                    />
                    <TagsItem
                        content='Ideas'
                    />
                    <TagsItem
                        content='Bady'
                    />
                    <TagsItem
                        content='Family'
                    />
                    <TagsItem
                        content='News'
                    />
                    <TagsItem
                        content='Clothing'
                    />
                    <TagsItem
                        content='Shopping'
                    />
                    <TagsItem
                        content='Sports'
                    />
                    <TagsItem
                        content='Games'
                    />
                </p>
            </div>
        </div>

    );
};

TagsItem.defaultProps = {
    colorTag: 'w3-light-grey w3-small'
}

export default Tags;