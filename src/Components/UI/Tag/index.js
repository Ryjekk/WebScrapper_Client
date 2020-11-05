// single tag box - take text props
import React from 'react';
import {TagBox, TagInner} from './style'

const Tag = props => {
    const {tag} = props
    return (
        <TagBox>
            <TagInner>{tag}</TagInner>
        </TagBox>

    )
}

export default Tag;
