import React, { useState } from 'react'
import { PColor, PLColor } from '../../assets/colors'
import { IconLogo, IconArrowLeft } from '../../assets/icons/icons'
import { Content } from './styled'
import InputHooks from '../InputHooks/InputHooks'
import { Card, Form, GoBack, ContentIcon, ButtonSubmit, Text } from './styled'
export const RegisterForm = props => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const handleChange = (e, error) => {
        setValues({ ...values, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: error })
    }

    const { setShowLogin, showLogin } = props
    const onclickLoginForm = () => {
        setShowLogin(!showLogin)
    }
    return (
        <h1>
            <Content>
                <Card>
                </Card>
                <Card>
                    <Form>
                        <GoBack type='button' onClick={onclickLoginForm}><IconArrowLeft color={`${ PLColor }`} size='10px' /></GoBack>
                        <ContentIcon >
                            <IconLogo color={PColor} size='70px' />
                        </ContentIcon>
                        <Text>¿No tienes cuenta?
                        </Text>
                        <InputHooks
                            title='Nombre'
                            required
                            type="text"
                            errors={values?.name}
                            value={values?.name}
                            onChange={handleChange}
                            name='name'
                        />
                        <InputHooks
                            title='Usuario'
                            required
                            type="text"
                            errors={values?.username}
                            value={values?.username}
                            onChange={handleChange}
                            name='username'
                        />

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
                        <InputHooks name="ConfirmPassword"
                            value={values?.ConfirmPassword}
                            errors={values?.ConfirmPassword}
                            onChange={handleChange}
                            type="password"
                            pass
                            title="Confirmar contraseña"
                            required
                            range={{ min: 0, max: 180 }}
                            passConfirm={{ validate: true, passValue: values?.password }}
                        />
                        <ButtonSubmit content='center' color='2' type='submit'>Registrar</ButtonSubmit>
                    </Form>
                </Card>
            </Content>
        </h1>
    )
}