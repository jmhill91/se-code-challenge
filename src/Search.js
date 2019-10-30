import React from 'react'
import NavLinks from './NavLinks'

class Search extends React.Component {
	state = {
		input: 0,
		img: '',
		alt: '',
		title: '', 
		year: '',
		month: '',
		num: '',
		day: '', 
		searched: false
	}

	handleInput = (e) => {
		this.setState({input: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		fetch(`https://xkcd.now.sh/?comic=${this.state.input}`)
		.then(resp => resp.json())
		.then(searchedres =>{
			this.setState({
				img: searchedres.img,
				alt: searchedres.title,
				title: searchedres.alt,
				year: searchedres.year,
				month: searchedres.month,
				num: searchedres.num, 
				day: searchedres.day,
				searched: true
			})
		})
		
	}

	

	render(){
		let image
		if (this.state.searched) {
			image = <div>
				<h3 className='comicInfo'>Comic # {this.state.num}  Date={this.state.month}/{this.state.day}/{this.state.year} </h3>
			<img src={this.state.img} alt={this.state.alt} title={this.state.title} className='searchImage' /> 
			</div>
		}
		return(
			<div>
				<h1>Search page</h1>
				<NavLinks history={this.props.history}/>
				<form className='search' onSubmit={this.handleSubmit}>
				<input type='text' className='searchInput' placeholder='Comic number' onChange={this.handleInput}/>
				<button className='searchSubmit' type='Submit'>Search</button>
				{image}
				</form> 
			</div>

			)
	}
}

export default Search