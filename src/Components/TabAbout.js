import React from "react";
import './TabAbout.css';

class NavAbout extends React.Component {
    constructor() {
      super();
      
      this._handleTabChange = this._handleTabChange.bind(this)
    }
    
    _handleTabChange(index) {
      console.log('Selected tab index', index);
    }
  
    render() {
        return (
          <TabPanel onTabChange={this._handleTabChange}>
            <div title="Misión">
                <h2>Misión</h2>
                <p>
                    Ayudar a pequeños streamers y 
                    creadores de contenidos a crecer.
                </p>
            </div>
            <div className="text" title="Visión">
                <h2>Visión</h2>
                <p>
                    Ofrecer los mejores apoyos y poner el 
                    foco en la innovación.

                </p>
            </div>
            <div className="text" title="Objetivos">
                <h2>Objetivo General</h2>
                <p>
                    Brindar los servicios de asociación entre 
                    los creadores de contenido y los sponsors.
                </p>

                <h2>Objetivos Específicos</h2>
                <ul>
                    <li>
                        Ofrecer la mayor confidencialidad , seguridad, 
                        un trato digno y justo a los usuarios de nuestro sitio web.
                    </li>
                    <li>
                        Gestionar el contenido del sitio web, para evitar 
                        el uso inadecuado del mismo.
                    </li>
                </ul>
            </div>
          </TabPanel>
        );
      }
    }

  export default NavAbout;
  
  class TabPanel extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        selectedTabIndex: props.children.length === 0 ? null : 0
      };
  
      this._handleClick = this._handleClick.bind(this);
    }
  
    _handleClick(index) {
      this.setState({
        selectedTabIndex: index
      });
      
      this.props.onTabChange(index);
    }
  
    _renderTabs() {
      let tabs = [];
      
      for (let i = 0; i < this.props.children.length; i++) {
        tabs.push(
          <Tab
            key={`tab-${i}`}
            label={this.props.children[i].props.title}
            index={i}
            isSelected={i === this.state.selectedTabIndex}
            onClick={this._handleClick} />
        );
      }
  
      return tabs;
    }
    
    _renderTabContent() {
      return this.props.children[this.state.selectedTabIndex].props.children;
    }
  
    render() {
      if (this.state.selectedTabIndex == null) {
        return 'nope';
      }
      
      return (
        <div className="tab-panel">
          <div className="tab-panel__header">
            {this._renderTabs()}
          </div>
          <div className="tab-panel__content">
            {this._renderTabContent()}
          </div>
        </div>
     );
    }
  }
  
  class Tab extends React.Component {
    constructor(props) {
      super(props);
  
      this._handleClick = this._handleClick.bind(this);
    }
  
    _handleClick() {
      this.props.onClick(this.props.index);
    }
  
    render() {
      const tabClassName = this.props.isSelected ? 'tab tab--selected' : 'tab';
  
      return (
        <span className={tabClassName} onClick={this._handleClick}>
          <span className="tab__label">{this.props.label}</span>
        </span>
      );
    }
  }
  
/*   ReactDOM.render(<App />, document.getElementById('app')); */
  