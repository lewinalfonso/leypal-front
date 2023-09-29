import React, { useEffect, useState } from 'react'
import { Header } from '../../components/HeaderStore'
export const HeaderC = props => {
    // Función cambiar el modo nocturno
    const { keyTheme, handleTheme } = props
    // Función para buscar Usuario
    const [time, changeTime] = useState(new Date().toLocaleTimeString());
    useEffect(function () {
        setInterval(() => {
            changeTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);
    return (
        <Header
            keyTheme={keyTheme}
            handleTheme={handleTheme}
            onchange={onchange}
            time={time}
        />
    )
}