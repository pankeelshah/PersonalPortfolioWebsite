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

      <Layout>
        <Header className="header-color" scroll>
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
            <a href={Pdf} target="_blank" rel="noopener noreferrer" onClick={() => this.hideToggle()}>Resume</a>
            <Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
            <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>

    );
  }
}

export default App;