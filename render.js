'use strict'
	var menu = document.querySelector(".main-menu__list");

	class Toggle extends React.Component {
  		constructor(props) {
			super(props);
			this.handleClick = this.handleClick.bind(this);
			this.state = {
				classes: 'main-menu__close'
			}
  		}
    handleClick() {
    	if (menu.classList.contains("hidden-item")) {
				menu.classList.remove("hidden-item");
				this.setState({
					classes: 'main-menu__close'
				})
				
		}	
		else {
			menu.classList.add("hidden-item");
			this.setState({
					classes: 'main-menu__open'
				})
		}
  	}
  	render() {
    	return (
			  <button className={this.state.classes} onClick={this.handleClick}></button>);
  		}
	}	

	ReactDOM.render(<Toggle/>, document.getElementById('root') );