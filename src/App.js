import React from 'react'
import IRouter from './router'

class App extends React.Component {
	render() {
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}

export default App