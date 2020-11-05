//box which will hold tags
import React from 'react';
import Tag from '../../UI/Tag'
import {TagWrapper} from './style'

const TagBox = props => {
    const {tags} = props;

    const tagJsx = tags.map((el, i) => (
        <Tag tags={el ? el : "NO TAGS"}/>
    ))

    return (
        <TagWrapper>
            {tagJsx}
        </TagWrapper>
    )
}

export default TagBox;
