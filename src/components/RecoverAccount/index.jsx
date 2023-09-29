import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BGColor, PColor } from '../../assets/colors'
import { IconLogo } from '../../assets/icons/icons'
import { OTPBox } from '../code'
import InputHooks from '../InputHooks/InputHooks'
import { RippleButton } from '../Ripple'
import { Form, Container, Logo, FirstSection } from './styled'
export const RecoverAccount = () => {
    const [values, setValues] = useState({})
    const [state, setState] = useState(false)
    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleChangeState = () => {
        setState(!state)
    }
    return (<div>
        {ReactDOM.createPortal(<>
            <Logo to='/'>
                <IconLogo size='80px' color={PColor} />
            </Logo>
            <Container>
                <FirstSection>

                </FirstSection>
                <Form>
                    {state ? <OTPBox /> : <InputHooks name="email"
                        value={values?.email}
                        errors={values?.email}
                        email
                        onChange={handleChange}
                        type="text"
                        title="Correo Electrónico"
                        required range={{ min: 0, max: 180 }} />}

                    <RippleButton type="button" cursor color={BGColor} size='15px' onClick={() => handleChangeState()} >Envíar</RippleButton>
                </Form>
            </Container>
        </>, document.querySelector('#portal')
        )}
    </div>

    )
}