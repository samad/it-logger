import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

function Searchbar({ searchLogs }) {
	const text = useRef();

	const onChange = () => {
		searchLogs(text.current.value);
	};

	return (
		<nav style={{ marginBottom: '30px' }} className='blue'>
			<div className='nav-wrapper'>
				<form>
					<div className='input-field'>
						<input
							id='search'
							type='search'
							ref={text}
							onChange={onChange}
							placeholder='Search Logs...'
						/>
						<label className='label-icon' htmlFor='search'>
							<i className='material-icons'>search</i>
						</label>
						<i className='material-icons'>close</i>
					</div>
				</form>
			</div>
		</nav>
	);
}

Searchbar.propTypes = {
	searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(Searchbar);
