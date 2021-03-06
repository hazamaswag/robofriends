import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// if(true) {
	// 	throw new Error("noooooo");
	// }

	// const cardComponent = robots.map((user) => {
	// 	return <Card id={user.id} name={user.name} email={user.email}/>
	// })
	return (
		<div>
	    {
				robots.map((user,i) => {
					return (
						<Card
							key={i}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
						/>
					);
				})
			}

	  </div>
	);
}

export default CardList;
