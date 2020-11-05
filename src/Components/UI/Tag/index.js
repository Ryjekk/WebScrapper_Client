// single tag box - take text props
import React from 'react';
import {TagBox, TagInner} from './style'

const Tag = props => {
    const {tags} = props
    return (
        <TagBox>
            <TagInner>{tags}</TagInner>
        </TagBox>

    )
}

export default Tag;
