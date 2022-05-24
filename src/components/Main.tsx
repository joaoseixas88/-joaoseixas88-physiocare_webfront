import { Flex } from '@chakra-ui/react';

// interface MainProps {}

export function Main() {
	return (
		<Flex
			bg='white'
			mt={['-5.7rem', '-5.7rem', '-6.5rem']}
			mr='1.5rem'
			ml={['1.5rem', '1.5rem', '0']}
			h={['93%', '93%', '90%']}
			p='5'
			rounded={'md'}
		>
			<h1>main</h1>
		</Flex>
	);
}
