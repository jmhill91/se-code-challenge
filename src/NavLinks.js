import React from 'react'

class NavLinks extends React.Component {

		handleLatest = () => {
			this.props.history.push('/')
		}

		handleSearch = () => {
			this.props.history.push('/search')
		}


	render(){

		return(
			<div>
				<button className='latest' onClick={this.handleLatest}>Latest</button>
				<button className='search' onClick={this.handleSearch}>Search</button>
			</div>

			)
	}
}

export default NavLinks