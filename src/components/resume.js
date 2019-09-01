import React from 'react';
import Pdf from './resume.pdf'

class Resume extends React.Component {
    render() {
        return (
            <div>
                <a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>
            </div>

        )
    }
}

export default Resume;