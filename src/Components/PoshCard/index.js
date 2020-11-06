import React, {useEffect, useState} from 'react';
import {PoshWrapper, PoshInner, PoshImg, LinkBox} from './style'
import {FethPosh} from "../../Helpers/fetcher";

const PoshCard = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchOnce = async () => {
            const dataArray = await FethPosh()
            setData(dataArray);
        }
        fetchOnce()
    }, [])

    const poshJsx = data.map(el => (
        <PoshInner>
            <PoshImg src={el.img} alt='img'/>
            <div>
                <div>{el.artist}</div>
                <div>{el.tags}</div>
                <LinkBox><a href={el.mixcloud}>Link to Mixcloud</a></LinkBox>
            </div>

        </PoshInner>
    ))

    return(
        <PoshWrapper>
            {poshJsx}
        </PoshWrapper>
    )
}

export default PoshCard;
