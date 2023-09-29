import React, { useState } from 'react';
import { Options } from '../Acordion';
import { PLColor } from '../../assets/colors';
import { IconArrowBottom } from '../../assets/icons/icons';
import { Container, Title, Paragraph, ContentPqr, Content } from './styled';

export const PQR = () => {
    const [active, setActive] = useState(false)
    const handleClick = index => setActive(index === active ? false : index)
    const customTime = new Date();
    const customHours = customTime.getHours();
    let displayMessage;
    const customColor = {
        color: ''
    };
    if (customHours < 12) {
        displayMessage = 'Good Morning User';
        customColor.color = 'red';
    } else if (customHours >= 12 && customHours < 18) {
        displayMessage = 'Good Afternoon User';
        customColor.color = 'green';
    } else {
        displayMessage = 'Good Night User';
        customColor.color = '#090c10';
    }
    return (
        <Container>
            <Title>Preguntas frecuentes</Title>
            <Title>¿Cómo podemos ayudarte?</Title>
            <Paragraph margin >Hola, {displayMessage}</Paragraph>
            <Content>

                <Options label='¿ Como registrarme ?' active={active === 1} handleClick={() => handleClick(1)} icon={<IconArrowBottom size='10px' color={PLColor} />} >
                    <ContentPqr >
                        <Paragraph> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis pariatur nihil deleniti aperiam quibusdam, sapiente laboriosam quod laudantium quidem error quam ex quaerat tempore. Nulla eum nostrum distinctio labore?
                            Accusamus, atque praeseam repellendus esse pariatur eaque officiis ipsa at magnam, ad beatae quibusdam dolorum amet blanditiis, perferendis reprehenderit fugiat ea nihil? Qui quod doloremque possimus libero voluptatibus. </Paragraph>
                    </ContentPqr>
                </Options>
                <Options label='Puntos de reclamo' active={active === 2} handleClick={() => handleClick(2)} icon={<IconArrowBottom size='10px' color={PLColor} />} >
                    <ContentPqr >
                        <Paragraph> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis pariatur nihil deleniti aperiam quibusdam, sapiente laboriosam quod laudantium quidem error quam ex quaerat tempore. Nulla eum nostrum distinctio labore?
                            Accusamus, atque praeseam repellendus esse pariatur eaque officiis ipsa at magnam, ad beatae quibusdam dolorum amet blanditiis, perferendis reprehenderit fugiat ea nihil? Qui quod doloremque possimus libero voluptatibus. </Paragraph>
                    </ContentPqr>
                </Options>
                <Options label='¿ Como funciona ?' active={active === 3} handleClick={() => handleClick(3)} icon={<IconArrowBottom size='10px' color={PLColor} />} >
                    <ContentPqr >
                        <Paragraph> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis pariatur nihil deleniti aperiam quibusdam, sapiente laboriosam quod laudantium quidem error quam ex quaerat tempore. Nulla eum nostrum distinctio labore?
                            Accusamus, atque praeseam repellendus esse pariatur eaque officiis ipsa at magnam, ad beatae quibusdam dolorum amet blanditiis, perferendis reprehenderit fugiat ea nihil? Qui quod doloremque possimus libero voluptatibus. </Paragraph>
                    </ContentPqr>
                </Options>
                <Options label='¿Por qué una plataforma de Marketing de micro-influencers?' active={active === 4} handleClick={() => handleClick(4)} icon={<IconArrowBottom size='10px' color={PLColor} />} >
                    <ContentPqr >
                        <Paragraph> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis pariatur nihil deleniti aperiam quibusdam, sapiente laboriosam quod laudantium quidem error quam ex quaerat tempore. Nulla eum nostrum distinctio labore?
                            Accusamus, atque praeseam repellendus esse pariatur eaque officiis ipsa at magnam, ad beatae quibusdam dolorum amet blanditiis, perferendis reprehenderit fugiat ea nihil? Qui quod doloremque possimus libero voluptatibus. </Paragraph>
                    </ContentPqr>
                </Options>
                <Options label='¿ Qué diferencia a inffluyo?' active={active === 5} handleClick={() => handleClick(5)} icon={<IconArrowBottom size='10px' color={PLColor} />} >
                    <ContentPqr >
                        <Paragraph> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nobis pariatur nihil deleniti aperiam quibusdam, sapiente laboriosam quod laudantium quidem error quam ex quaerat tempore. Nulla eum nostrum distinctio labore?
                            Accusamus, atque praeseam repellendus esse pariatur eaque officiis ipsa at magnam, ad beatae quibusdam dolorum amet blanditiis, perferendis reprehenderit fugiat ea nihil? Qui quod doloremque possimus libero voluptatibus. </Paragraph>
                    </ContentPqr>
                </Options>
            </Content>
        </Container>
    )
}
// use useLazyQuery se ejecuta cuando espera una acción