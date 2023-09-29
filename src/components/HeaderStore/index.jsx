import React from 'react'
import { Link } from 'react-router-dom'
import { PColor } from '../../assets/colors'
import { IconLogo } from '../../assets/icons/icons'
import { CartShop } from '../CartShop'
import useScrollHook from '../hooks/useScroll'
import { HeaderContent, Content } from './styled'

export const Header = ({ keyTheme, handleTheme }) => {

    const style = useScrollHook();
    return (
        <>
            <HeaderContent style={style} >
                <Content >
                    <div>
                        <Link to='/'>
                            <IconLogo size='80px' color={PColor} />
                        </Link>
                    </div>
                    <div>
                        <nav>
                            <li>
                                <Link to='/'>Home</Link>
                                <Link to='/'>Home</Link>
                                <Link to='/'>Home</Link>
                            </li>
                        </nav>
                    </div>
                    <div>
                        <CartShop keyTheme={keyTheme} handleTheme={handleTheme} />
                    </div>

                </Content>
            </HeaderContent>
        </>
    )
}
// const ContainerResults = styled.div `
// position: absolute;
// `