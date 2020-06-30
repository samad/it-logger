import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css';

function LogItem({ log, deleteLog, setCurrent }) {
	const deleteLogHandler = () => {
		deleteLog(log.id);

		M.toast({ html: 'Log deleted' });
	};

	return (
		<li className='collection-item'>
			<div>
				<a
					href='#edit-log-modal'
					className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}
					onClick={() => setCurrent(log)}>
					{log.message}
				</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>ID #{log.id}</span> last updated by{' '}
					<span className='block-text'>{log.tech}</span>
				</span>
				<a href='#!' className='secondary-content' onClick={deleteLogHandler}>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	);
}

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
