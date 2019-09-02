import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Pdf from './components/resume.pdf'

class App extends React.Component {

  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <a href={Pdf} target="_blank" rel="noopener noreferrer">Resume</a>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="">
            <Navigation>
              <Link to="/" onClick={() => this.hideToggle()}>Home</Link>
              <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
              <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
              <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;