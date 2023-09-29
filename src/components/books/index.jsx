import React, { useContext, useEffect, useState } from 'react'
import { DropdownMenu } from '../dropdown-menu';
import { Container/* , Card  */ } from './styled';
import useFullscreenMode from '../hooks/useFullScreenMode';
import { Rate } from '../Rate';
import { numberFormatM } from '../../utils';
import { Context } from '../../Context';

export const Books = () => {
    const [visibleMenu, setVisibleMenu] = useState(false) // Visibilidad del menú
    const [positionMenu, setPositionMenu] = useState({})
    const handleMenu = (e, param) => {
        setPositionMenu({ x: e.pageX - (param || 0), y: e.pageY })
        setVisibleMenu(true)
    }
    const [elementRef, FullscreenIcon] = useFullscreenMode();
    const [rating, setRating] = useState(0);
    const { setAlertBox } = useContext(Context)
    useEffect(() => {
        if (window) setAlertBox({ message: 'Funciona', duration: 5000, color: 'red' })
    }, [])
    return (
        <Container ref={elementRef}>
            <DropdownMenu show={visibleMenu} position={positionMenu} onClickOutside={() => setVisibleMenu(false)} options={[
                { optionName: 'Trasladar' },
                { optionName: 'cortar' },
            ]} />
            <button onClick={() => handleMenu(!positionMenu)}>
                onClick</button>
            {/* <InputTags onChange={() => setVisibleMenu(false)} /> */}
            <div ref={elementRef} >
                <div>
                    {FullscreenIcon}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Rate rating={rating} onRating={rate => setRating(rate)} />
            </div>
            <p>{numberFormatM(11000000)}</p>
        </Container>
    )
}