import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech }) {
	return (
		<li className='collection-item'>
			{tech.firstName} {tech.lastName}
			<a href='#!' className='secondary-content'>
				<div className='material-icons grey-text'>delete</div>
			</a>
		</li>
	);
}

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
};

export default TechItem;
