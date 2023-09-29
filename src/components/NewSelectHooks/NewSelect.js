import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { IconArrowBottom, IconCancel as IconWarning } from '../../assets/icons/icons'
import { BGColor, PColor, SFColor, SFVColor } from '../../assets/colors'

// eslint-disable-next-line
export default function NewSelect ({ options, disabled, id, idD, name, onChange, optionName, value, width, search, title, padding, margin, minWidth, error, required, accessor, fullName }) {
    /** Hooks */
    const [select, setSelect] = useState(false)
    const [selectRef, setSelectRef] = useState(0)
    const [valueInput, setValueInput] = useState()
    const [selectBody, setSelectBody] = useState(0)
    const [newOption, setNewOption] = useState(false)
    const bodyHeight = window.screen.height
    const inputSearch = useRef(null)
    const [refSelect, setRefSelect] = useState(false)

    // Renderiza el valor
    const renderVal = data => {
        if (!data) return ''
        if (Array.isArray(optionName)) {
            let valueRender = ''
            //eslint-disable-next-line
            optionName.forEach(x => valueRender = `${ valueRender } ${ (accessor && data[accessor]) ? data[accessor][x] : data[x] }`)
            return valueRender
        } else return data[optionName]
    }
    /** Use Effect */
    useEffect(() => {
        setNewOption(options)
    }, [options])

    /** Use Effect */
    useEffect(() => {
        if (search) { select && inputSearch.current.focus() }
    }, [select, search])

    // guarda la referencia de la caja */
    const changeRef = v => {
        setSelectRef(v.offsetTop + selectBody)
        setRefSelect(v)
    }

    // Valor selecionado
    const changeValue = v => {
        setSelect(false)
        onChange({ target: { name, value: v[id] } }, !v[id], refSelect)
    }

    // Busqueda
    const changeSearch = v => {
        setValueInput(v.target.value)
        const fil = options.filter(x => renderVal(x)?.toUpperCase()?.indexOf(v.target?.value?.toUpperCase()) > -1)
        setNewOption(fil)
    }

    // Función al hacer click sobre el select
    const handleClick = e => {
        e.preventDefault()
        setSelect(!select)
        setTimeout(() => setNewOption(options), 500)
    }

    const handleBlur = () => {
        setTimeout(() => setSelect(false), 400)
        setTimeout(() => setNewOption(options), 300)
    }
    // eslint-disable-next-line
    const val = options?.find(x => x[id] === value)

    return (
        <BoxSelect width={width} padding={padding} margin={margin} ref={v => !!v && changeRef(v)} id={idD}>
            <FixedBox onClick={() => setSelect(false)} active={select} />
            <CustomButtonS error={error} type='button' height={!val ? '37px' : ''} color={val ? SFColor : '#757575'} onClick={handleClick} minWidth={minWidth} disabled={disabled}>
                <SpanText>{renderVal(val)}</SpanText>
                <IconSel>
                    <IconArrowBottom size='10px' color={error ? BGColor : SFVColor} />
                </IconSel>
            </CustomButtonS>
            <LabelInput error={error} value={value}>{title}</LabelInput>
            {error && <Tooltip>Este campo no debe estar vacío</Tooltip>}
            {/** Caja de items */}
            {select &&
                <BoxOptions
                    fullName={fullName}
                    onBlur={handleBlur}
                    bottom={selectRef > bodyHeight}
                    ref={v => setSelectBody(!!v && v.offsetHeight)}
                    top={selectRef < bodyHeight}
                >
                    {search && <InputText placeholder='Buscar aquí...' value={valueInput || ''} ref={inputSearch} onChange={changeSearch} />}
                    <div style={{ width: '100%' }} >
                        {newOption?.length ?
                            newOption.map(x => <CustomButtonS option key={x[id]} title={renderVal(x)} type='button' onClick={() => changeValue(x)}>{renderVal(x)}</CustomButtonS>)
                            : <TextNotResult>No hay resultados...</TextNotResult>
                        }
                    </div>
                </BoxOptions>}
            <input type='hidden' name={name} value={value || ''} id={id} data-required={required} />
            <IconWarning size={20} color={PColor} style={{ position: 'absolute', right: 5, bottom: 10, opacity: 0, pointerEvents: 'none' }} />
        </BoxSelect>
    )
}

const BoxSelect = styled.div`
    flex-direction: column;
    min-width: ${ ({ minWidth }) => minWidth || 'auto' };
    width: ${ ({ width }) => width || '100%' };
    padding: ${ ({ padding }) => padding || '10px 5px' };
    border-radius: ${ ({ radius }) => radius || '8px' };
    ${ ({ padding }) => !!padding && css`padding: ${ padding };` }
    position: relative;
`
// Caja para ocultar al hacer click fuera del foco del select
const FixedBox = styled.div`
    display: ${ props => props.active ? 'block' : 'none' };
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    z-index: ${ ({ active }) => active ? '9' : '-1' };
    background-color: transparent;
`
/** mensaje de alerta */
const Tooltip = styled.div`
    position: absolute;
    display: block;
    right: 5px;
    bottom: 100%;
    background-color: ${ PColor };
    padding: 0 10px;
    border-radius: 2px;
    z-index: 10;
    font-size: 11px;
    color: #ffffff;
    &::after, &::before {
        top: 100%;
        left: 90%;
        border: solid transparent;
        content: "";
        position: absolute;
        pointer-events: none;
    }
    &::after {
        border-top-color: ${ PColor };
        border-width: 4px;
    }
    &::before {
        border-top-color: ${ PColor };
        border-width: 5px;
        margin-left: -1px;
    }
`
const LabelInput = styled.label`
    position: absolute;
    text-align: left;
    font-size: ${ ({ value }) => value ? '17px' : '16px' };
    top: ${ ({ value }) => value ? '-5px' : '18px' };
    left: 35px;
    color: ${ ({ value, error }) => value ? SFColor : (error ? BGColor : SFVColor) };
    transition: .3s;
    pointer-events: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 80%;
    font-family: PFont-Light;
    background-color: ${ ({ value }) => value ? BGColor : 'transparent' };
    padding-left: ${ ({ value }) => value ? '10px' : '0px' };
    
    `
// Select
const CustomButtonS = styled.button`
    position: relative;
    display: block;
    background-color: ${ ({ bgColor, disabled, error }) => disabled ? 'rgba(239, 239, 239, 0.3)' : (error ? '#FBCACA' : (bgColor || '#fff')) };
    outline: 0;
    border: ${ ({ option }) => option ? 'none' : `1px solid ${ SFVColor }` };
    border-radius: 5px;
    padding: 9px;
    padding-left: 37px;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 100%;
    font-family: PFont-Light;
    font-size: ${ ({ size }) => size || '13px' };
    color: ${ ({ color }) => color || SFColor };
    width: ${ ({ width }) => width || '100%' };
    ${ ({ height }) => !!height && css`height: ${ height };` }
    &:hover {
        cursor: ${ ({ disabled }) => disabled ? 'no-drop' : 'pointer' };
        ${ ({ hover }) => hover && css`background-color: ${ PColor };` }
        ${ ({ hover }) => hover && css`color: ${ BGColor };` }
    }
    &:hover ~ ${ Tooltip } { display: block; }
    &:focus { border: 1px solid ${ PColor }; }
`
const IconSel = styled.div`
    position: absolute;
    right: -5px;
    top: 20%;
    pointer-events: none;
`
const BoxOptions = styled.div`
    position: absolute;
    left: 5px;
    bottom: ${ ({ bottom }) => bottom ? '100%' : 'none' };
    top: ${ ({ top }) => top ? '80%' : 'none' };
    width: 100.5%;
    min-width: ${ props => props.fullName ? 'min-content' : 'auto' };
    background-color: ${ BGColor };
    border: 1px solid ${ SFVColor };
    z-index: 100;
`
const SpanText = styled.label`
    font-size: 12px;
    color: ${ SFColor };
`
const TextNotResult = styled.span`
    font-size: 10px;
    color: ${ SFVColor };
    padding: 0 10px; 
`
// Input Text (buscador)
export const InputText = styled.input`
    width: 100%;
    margin: 0;
    padding: 1px 8px;
    border: none;
    border-bottom: 1px solid #cccccc42;
    outline: none;
`
NewSelect.propTypes = {
    options: PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    id: (PropTypes.string || PropTypes.number).isRequired,
    idD: (PropTypes.string || PropTypes.number),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string || PropTypes.number,
    width: PropTypes.string,
    search: PropTypes.bool,
    title: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    minWidth: PropTypes.string,
    error: PropTypes.bool,
    required: PropTypes.bool,
    accessor: PropTypes.string,
    fullName: PropTypes.bool
}