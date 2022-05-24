import {
	Box,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
	label: string;
	type: string;
}

export function Input({ label, type, ...rest }: InputProps) {
	return (
		<Box>
			<label>{label}</label>
			<ChakraInput
				border={'1px'}
				colorScheme={'messenger'}
				// borderColor='pink.100'
				// focusBorderColor='pink.600'
				type={type}
				name={label}
				{...rest}
			/>
		</Box>
	);
}
