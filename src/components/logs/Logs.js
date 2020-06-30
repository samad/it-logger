import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader';
import LogItem from './Logitem';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';

function Logs({ log: { logs, loading }, getLogs }) {
	useEffect(() => {
		getLogs();
	}, []);

	if (loading || logs === null) {
		return <Preloader />;
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4>System Logs</h4>
			</li>

			{!loading && logs.length === 0 ? (
				<li className='collection-item'>No logs to show...</li>
			) : (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
}

Logs.propTypes = {
	log: PropTypes.object.isRequired,
	getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
