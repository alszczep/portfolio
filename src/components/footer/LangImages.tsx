import pl_flag from './../../images/lang-icons/pl_flag.svg';
import uk_flag from './../../images/lang-icons/uk_flag.svg';
import { FC } from "react";

const LangImages: FC<any> = (props): JSX.Element => {
    return (
        <section 
                className='lang-images'>
            <img 
                className='lang-images__lang-image lang-images__lang-image--pl' 
                src={uk_flag} 
                alt='eng' 
                onClick={() => {props.setLang('eng')}}/>
            <img 
                className='lang-images__lang-image lang-images__lang-image--eng' 
                src={pl_flag} 
                alt='pl' 
                onClick={() => {props.setLang('pl')}}/>
        </section>
    )
}

export default LangImages;