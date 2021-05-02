import { FC } from "react";
import { SiGithub } from "react-icons/si";

const ExternalLinks: FC<any> = (): JSX.Element => {
    return (
        <section 
            className='external-links'>
            <a 
                className='external-links__link external-links__link--github' 
                target='_blank' 
                rel='noreferrer' 
                href='https://github.com/alszczep'>
                <SiGithub 
                    className='external-links__icon external-links__icon--github' 
                    color='white'/>
            </a>
        </section>
    )
}

export default ExternalLinks;