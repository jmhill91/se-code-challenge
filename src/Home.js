import React from 'react'
import NavLinks from './NavLinks'

class Home extends React.Component {
	state = {
		img: '',
		alt: '',
		title: '', 
		year: '',
		month: '',
		num: '',
		day: ''
	}

	componentDidMount() {
		fetch('https://xkcd.now.sh/?comic=latest')
		.then(res => res.json())
		.then(latestComic => {
			this.setState({
				img: latestComic.img,
				alt: latestComic.title,
				title: latestComic.alt,
				year: latestComic.year,
				month: latestComic.month,
				num: latestComic.num, 
				day: latestComic.day
			})
		})
	}
	render(){
		return(
			<div>
				<h1>Welcome</h1>
				<NavLinks history={this.props.history} />
				<h3 className='comicInfo'>Comic # {this.state.num}  Date={this.state.month}/{this.state.day}/{this.state.year} </h3>
				<img src={this.state.img} alt={this.state.alt} title={this.state.title} className='latestImage' />
			</div>

			)
	}
}

export default Home