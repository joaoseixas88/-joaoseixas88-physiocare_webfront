import { Box, Divider, Flex, HStack, Icon } from '@chakra-ui/react';
import { icons } from '../../icons/icons';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { Link } from '../Link';

interface SideBarLinkProps {
	icon: string;
	label: string;
	href: string;
	isActive?: boolean;
	isDrawer?: boolean;
}

export function SideBarLink({
	label,
	icon,
	href,
	isActive,
	isDrawer,
}: SideBarLinkProps) {
	return (
		<Flex
			gap={'2'}
			bg={isActive ? 'customgray.100' : ''}
			w='44'
			h='8'
			p='2'
			py='5'
			rounded={isDrawer ? 'md' : ''}
			direction={'row'}
			alignItems='center'
			shadow={isActive ? 'md' : ''}
		>
			{!!isActive && (
				<Box
					height={'10'}
					border={isDrawer ? '2px' : '8px'}
					borderColor={isDrawer ? 'messenger.100' : 'messenger.default'}
					justifySelf='flex-start'
					ml='-5'
				/>
			)}
			<Icon
				as={
					isDrawer && isActive
						? icons[`filled${capitalizeFirstLetter(icon)}`]
						: icons[icon]
				}
				ml={isDrawer && isActive ? '2' : '0'}
				fontSize='2xl'
				color={isDrawer && !isActive ? 'white' : 'messenger.default'}
			/>
			<Link
				href={href}
				label={label}
				textColor={isDrawer && !isActive ? 'white' : ''}
			/>
		</Flex>
	);
}
