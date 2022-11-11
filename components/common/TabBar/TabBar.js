import React, { Component } from "react";
import TabBarNav from "./TabBarNav";

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    activeTab: null,
  };
  componentDidMount() {
    const { children = [] } = this.props;
    const hash = window.location.hash;
    let activeTab = this.getChildrenLabels(children)[0];
    if (hash) {
      activeTab = decodeURI(hash.replace("#", ""));
    }
    this.setActiveTab(activeTab);
  }
  static defaultProps = {
    children: null,
    classNames: [],
    component: null,
    alignToButtons: null,
    header: null,
    contentClass: "",
  };
  render() {
    const { activeTab } = this.state;
    const {
      children,
      header,
      component,
      alignToButtons,
      classNames,
      contentClass,
      vertical,
      ...attrs
    } = this.props;
    const classes = [...classNames, ""];
    return (
      <>
        <div className="profile-block">
          {header}
          <div className={"profile-tabs__buttons"}>
            {this.renderTabs()}
            {alignToButtons}
          </div>
          {component}
        </div>
        {React.Children.map(children, (child) => {
          if (child.props.label === activeTab) {
            return React.cloneElement(child, { activeTab });
          }
          return null;
        })}
      </>
    );
  }

  renderTabs() {
    const { children = [] } = this.props;
    const { activeTab } = this.state;

    return this.getChildrenLabels(children).map((navLabel) => (
      <TabBarNav
        key={navLabel}
        navLabel={navLabel}
        classNames={[activeTab === navLabel ? "active" : ""]}
        onChangeActiveTab={this.setActiveTab.bind(this)}
      />
    ));
  }

  getChildrenLabels(children) {
    return children.map(({ props }) => props.label);
  }

  setActiveTab(activeTab) {
    const { activeTab: currentTab } = this.state;
    if (currentTab !== activeTab) {
      window.location.hash = activeTab;
      this.setState({
        activeTab,
      });
    }
  }
}

export default MyComponent;
