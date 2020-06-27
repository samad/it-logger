import React, { useState } from 'react';
import M from 'materialize-css';

function AddLogModal() {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');

	const onSubmit = (ev) => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and tech' });
		} else {
			// Clear fields
			setMessage('');
			setTech('');
			setAttention(false);
		}
	};

	return (
		<div id='add-log-modal' className='modal' style={modalStyle}>
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
						<label htmlFor='message' className='active'>
							Log Message
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							// className='select'
							onChange={(ev) => setTech(ev.target.value)}>
							<option value='' disabled>
								Select Technician
							</option>
							<option value='John Doe'>John Doe</option>
							<option value='Sam Smith'>Sam Smith</option>
							<option value='Mary Doe'>Mary Doe</option>
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

export default AddLogModal;
