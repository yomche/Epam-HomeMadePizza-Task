import React, { memo, useState } from 'react';
import {
	StyledAddressForm,
	StyledTextInput,
	StyledTextInputsRow,
	StyledTextArea,
	StyledSelect,
	StyledOption,
	StyledSelectWrapper,
	StyledBasketPayRow,
	StyledBasketSubmitButton,
	StyledBasketHeading3,
} from './address-form.styles';

const AddressFormComponent = ({
	onSubmit = (e) => {
		e.preventDefault();
	},
	isError,
}) => {
	const [isSelectOpen, setIsSelectOpen] = useState(false);
	const [selectValue, setSelectValue] = useState('картой');
	const [formState, setFormState] = useState({});
	const handleFieldChange = (event) => {
		setFormState({
			...formState,
			changeSum: '',
			[event.target.name]: event.target.value,
		});
	};
	const handleSelectChange = (event) => {
		setSelectValue(event.target.value);
		handleFieldChange(event);
	};
	const handleSelectClick = () => setIsSelectOpen(!isSelectOpen);

	return (
		<>
			<StyledBasketHeading3>Адрес доставки</StyledBasketHeading3>
			<StyledAddressForm onSubmit={onSubmit}>
				<StyledTextInput placeholder="улица" name="street" onChange={handleFieldChange} />
				<StyledTextInputsRow>
					<StyledTextInput placeholder="дом" name="house" onChange={handleFieldChange} />
					<StyledTextInput placeholder="корпус" name="block" onChange={handleFieldChange} />
					<StyledTextInput placeholder="квартира" name="flat" onChange={handleFieldChange} />
				</StyledTextInputsRow>
				<StyledTextArea placeholder="комментарий к заказу" name="comment" onChange={handleFieldChange} />
				<StyledBasketPayRow>
					<StyledSelectWrapper onClick={handleSelectClick} isOpen={isSelectOpen}>
						<StyledSelect onChange={handleSelectChange} name="payment">
							<StyledOption id="payment-option">картой</StyledOption>
							<StyledOption id="payment-option">наличными</StyledOption>
						</StyledSelect>
					</StyledSelectWrapper>
					<StyledTextInput
						placeholder="c какой суммы нужна сдача"
						disabled={selectValue === 'картой'}
						name="changeSum"
						onChange={handleFieldChange}
					/>
				</StyledBasketPayRow>
				<StyledBasketSubmitButton disabled={isError}>Заказать</StyledBasketSubmitButton>
			</StyledAddressForm>
		</>
	);
};

export const AddressForm = memo(AddressFormComponent);
