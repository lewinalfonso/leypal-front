import React, { useState } from 'react'
import { PColor, PLColor } from '../../assets/colors'
import { IconArrowLeft } from '../../assets/icons/icons'
import InputHooks from '../InputHooks/InputHooks'
import { ContainerSliderForm, GoBack, Text, Alert } from './styled'
import { ButtonSubmit } from '../Login/styled'
export const LoginAut = props => {
    // Contexto
    const { activeLogin, setActive } = props
    const [values, setValues] = useState({})
    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const onclickLoginForm = () => {
        setActive(!activeLogin)
    }
    return (
        <>
            <ContainerSliderForm activeLogin={activeLogin}>
                <GoBack type='button' onClick={onclickLoginForm}><IconArrowLeft color={`${ PLColor }`} size='25px' /></GoBack>
                <Text>Inicia sesión
                </Text>
                <InputHooks name="email"
                    value={values?.email}
                    errors={values?.email}
                    email
                    onChange={handleChange}
                    type="text"
                    title="Correo Electrónico"
                    required
                    range={{ min: 0, max: 180 }}
                />
                <InputHooks name="password"
                    value={values?.password}
                    errors={values?.password}
                    pass
                    onChange={handleChange}
                    title="Contraseña"
                    required
                    type="password"
                    range={{ min: 0, max: 180 }}
                />
                { undefined !== undefined && <Alert>An error occurred</Alert>}
                <ButtonSubmit colorFont={PColor} color='2' hoverColor content='center' type='submit'>Login</ButtonSubmit>
            </ContainerSliderForm>
        </>
    )
}