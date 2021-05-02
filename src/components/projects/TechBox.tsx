import { FC, useEffect, useState } from "react";

const TechBox: FC<{ tech: string }> = ({ tech }): JSX.Element => {
    const [color, setColor] = useState<string>();
    useEffect(() => {
        switch(tech){
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
            case 'Node':
                setColor('rgb(104,180,99)');
                break;
            case 'Express':
                setColor('rgb(150,250,40)');
                break;
            case 'PostgreSQL':
                setColor('rgb(65,123,162)');
                break;
            default:
                setColor('white');
                break;
        }
    }, [tech])
    return (
        <section 
            className='tech-box'>
            <h5 
                className='tech-box__name'
                style={{borderColor: color}}>
                {tech}
            </h5>
        </section>
    )
}

export default TechBox;