import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<Auxiliary>
			<div>toolbar,sideDrawer,backdrop</div>
			<main className={classes.content}>{props.children}</main>
		</Auxiliary>
	);
};

export default Layout;
