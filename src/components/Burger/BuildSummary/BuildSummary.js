import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const BuildSummary = (props) => {
	const ingredientsList = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
			</li>
		);
	});

	return (
		<Auxiliary>
			<h3>ORDER</h3>
			<p>A delicious burger with following ingredients</p>
			<ul>{ingredientsList}</ul>
			<p>Continue to checkout?</p>
			<button type='success'>CANCEL</button>
			<button type='success'>CONTINUE</button>
		</Auxiliary>
	);
};

export default BuildSummary;
