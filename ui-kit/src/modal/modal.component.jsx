import React, { memo, useRef, useEffect, useState, useCallback } from 'react';
import { StyledModalContent, StyledModalShadow, StyledCloseButton } from './modal.styles';

const ModalComponent = ({ isOpen = false, onClose, children }) => {
	const wrapperRef = useRef(null);

	const [animationState, setAnimationState] = useState('out');
	const appearAnimationTimeoutId = useRef();

	const handleClose = useCallback(() => {
		setAnimationState('out');
	}, []);

	const handleTransitionEnd = () => {
		if (animationState === 'out') {
			onClose();
		}
	};

	const handleMouseOutsideClick = useCallback(
		(event) => {
			if (isOpen && wrapperRef.current !== null && !wrapperRef.current.contains(event.target)) {
				onClose();
			}
		},
		[isOpen, onClose]
	);

	useEffect(() => {
		const { body } = document;
		document.body.addEventListener('mousedown', handleMouseOutsideClick);

		if (isOpen) {
			appearAnimationTimeoutId.current = setTimeout(() => {
				setAnimationState('in');
			}, 0);

			body.style.overflow = 'hidden';
			body.style.paddingRight = '15px';
		}
		const handleMousedownOutside = (event) => {
			if (isOpen && wrapperRef.current !== null && !wrapperRef.current.contains(event.target)) {
				handleClose();
			}
		};

		window.addEventListener('mousedown', handleMousedownOutside);

		return () => {
			handleClose();
			window.removeEventListener('mousedown', handleMousedownOutside);
			clearTimeout(appearAnimationTimeoutId.current);
			body.style.overflow = '';
			body.style.paddingRight = '';
		};
	}, [isOpen, onClose, handleClose, handleMouseOutsideClick]);
	if (!isOpen) {
		return null;
	}
	return (
		<StyledModalShadow>
			<StyledModalContent ref={wrapperRef} onTransitionEnd={handleTransitionEnd} isOpen={isOpen}>
				<StyledCloseButton onClick={onClose} id="modal-close-button" />
				{children}
			</StyledModalContent>
		</StyledModalShadow>
	);
};

export const Modal = memo(ModalComponent);
