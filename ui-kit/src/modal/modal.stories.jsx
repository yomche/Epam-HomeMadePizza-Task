import React, { useState } from 'react';
import { Modal } from './modal.component';

export default { title: 'Modal' };

export const defaultModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button type="button" onClick={() => setIsOpen(!isOpen)}>
				Open/close
			</button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<p>Modal content</p>
			</Modal>
		</>
	);
};
