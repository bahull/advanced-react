import React from 'react';
import { Link } from 'react-router-dom';
import ClubAjax from '../assets/ClubAjax';
import AppTitle from '../assets/AppTitle';
import storage from '../util/storage';
import { logout } from '../util/api';
import '../assets/icon-logout';

export default function Header () {
	console.log('user:', storage('username'));
	return (
		<header>
			<ClubAjax />
			<AppTitle />
			<menu className="right-top">
				<icon-logout onClick={logout} />
				<span className="username">Welcome {storage('username')}</span>
			</menu>
			<menu>
				<Link to="/home">Home</Link>
				<Link to="/example">Example</Link>
			</menu>
		</header>
	)
}