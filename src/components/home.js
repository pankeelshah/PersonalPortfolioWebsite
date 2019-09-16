import React from 'react';
import { Grid, Cell } from 'react-mdl';


class Home extends React.Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <div className="banner-text" style={{ marginTop: '10%' }}>
                            <h1>Pankeel Shah</h1>
                            <hr />
                            <p>Hi, I'm Pankeel. I'm a Computer Science student at the University of Minnesota Twin Cities.</p>

                            <div className="social-links">

                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/pankeelshah" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub*/}
                                <a href="https://github.com/pankeelshah" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>


                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Home;