import React from 'react';
import Title from './header/title';

export default class Header extends React.Component {
	handleChange( e ) {
		const title = e.target.value;
		this.props.changeTitle( title );
	}
	render() {
		return (
			<header>
				<Title title={ this.props.title } />
				<input value={ this.props.title } onChange={ this.handleChange.bind( this ) } />
			</header>
		)
	}
}
