import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

interface LinkProps {
	href: string;
	label: string;
	textColor: string;
}

export function Link({ href, label, textColor }: LinkProps) {
	return (
		<NextLink href={href} passHref>
			<ChakraLink color={textColor ? textColor : ''}>{label}</ChakraLink>
		</NextLink>
	);
}
