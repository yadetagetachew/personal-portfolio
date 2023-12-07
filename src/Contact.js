import React from 'react';
import linkedin from './media/liLogo.png'
import email from './media/emailLogo.png'
import resume from './media/cvLogo.png'
import github from './media/githubLogo.png'
import cvPdf from './documents/resume.pdf';


const Contact = () => {
    return(
        <div>
            <div className='contact-logo'>
                <a href="https://linkedin.com/in/yadeta-yadi-getachew" target="_blank" rel="noopener noreferrer" role="button">
                    <img src={linkedin} alt="LinkedIn logo"></img>
                </a>
                <a href = "mailto: yadetagetachew@gmail.com">
                    <img src={email} alt="logo" />
                </a>
                <a href="https://github.com/yadetagetachew" target="_blank" rel="noopener noreferrer" role="button">
                    <img src={github} alt="Github logo"></img>
                </a>
                <a href = {cvPdf} target = "_blank" rel="noopener noreferrer" role="button">
                    <img src={resume} alt="cv logo" />
                </a>
                    
            </div>
        </div>

    )
}

export default Contact;