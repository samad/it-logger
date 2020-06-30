import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

function EditLogModal({ updateLog, current }) {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setTech(current.tech);
		}
	}, [current]);

	const onSubmit = (ev) => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and tech' });
		} else {
			const updLog = {
				id: current.id,
				message,
				attention,
				tech,
				date: new Date(),
			};

			updateLog(updLog);
			M.toast({ html: `Log updated by ${tech}` });

			// Clear fields
			setMessage('');
			setTech('');
			setAttention(false);
		}
	};

	return (
		<div id='edit-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Enter System Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={(ev) => setMessage(ev.target.value)}
						/>
						{/* <label htmlFor='message' className='active'>
							Log Message
						</label> */}
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(ev) => setTech(ev.target.value)}>
							<option value='' disabled>
								Select Technician
							</option>
							<TechSelectOptions />
						</select>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									value={attention}
									checked={attention}
									onChange={() => setAttention((prevState) => !prevState)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a href='#!' onClick={onSubmit} className='modal-close waves-effect waves-green btn-flat'>
					Enter{' '}
				</a>
			</div>
		</div>
	);
}

const modalStyle = {
	width: '75%',
	height: '75%',
};

EditLogModal.propTypes = {
	current: PropTypes.array,
	updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
