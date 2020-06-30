import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css';

function TechItem({ tech: { firstName, lastName, id }, deleteTech }) {
	const onDelete = () => {
		deleteTech(id);
		M.toast({ html: 'Technician Deleted' });
	};

	return (
		<li className='collection-item'>
			{firstName} {lastName}
			<a href='#!' className='secondary-content' onClick={onDelete}>
				<div className='material-icons grey-text'>delete</div>
			</a>
		</li>
	);
}

TechItem.propTypes = {
	deleteTech: PropTypes.func.isRequired,
	tech: PropTypes.object.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
