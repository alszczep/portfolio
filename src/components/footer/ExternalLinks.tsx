import React, { FC } from "react";
import { SiGithub } from "react-icons/si";

const ExternalLinks: FC<any> = (): JSX.Element => {
    return (<section className='externalLinks'>
        <a target='_blank' rel='noreferrer' href='https://github.com/alszczep'><SiGithub color='white'/></a>
    </section>)
}

export default ExternalLinks;