import React, { FC, useEffect, useState } from "react";

const TechBox: FC<any> = (props): JSX.Element => {
    const [color, setColor] = useState<string>();
    useEffect(() => {
        switch(props.tech){
            case 'React':
                setColor('rgb(97,218,251)'); 
                break;
            case 'Sass':
                setColor('rgb(206,103,154)');
                break;
            case 'TypeScript':
                setColor('rgb(0,122,204)');
                break;
            case 'JavaScript':
                setColor('rgb(247,224,24)');
                break;
            case 'Jest':
                setColor('rgb(153,66,91)');
                break;
            default:
                setColor('white');
                break;
        }
    }, [props.tech])
    return (<section className='techBox'>
        <h5 style={{borderColor: color}}>{props.tech}</h5>
    </section>)
}

export default TechBox;