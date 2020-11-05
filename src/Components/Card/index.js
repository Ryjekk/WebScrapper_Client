import React, {useContext} from 'react';
import {CenterBox} from "./style";
import ContentBox from "./ContentBox";
import {myContext} from '../../Views/App'

const Card = () => {
    const data = useContext(myContext)

    const cardJsx = data.map(el => (
        <CenterBox>
            <img src={el.img}/>
            <ContentBox
                place={el.artist[1]}
                date={el.artist[0]}
                artist={el.artist[2]}
                mixcloud={el.mixcloud}
                tags={el.tags}
                key={el.id}/>
        </CenterBox>
    ))

    return (
        <div>
            {cardJsx}
        </div>
    )
}

export default Card;
