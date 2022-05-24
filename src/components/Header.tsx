import {
	Box,
	DrawerCloseButton,
	Flex,
	HStack,
	Icon,
	IconButton,
	Text,
	useBreakpointValue,
} from '@chakra-ui/react';
import { useSideBarDrawer } from '../context/DrawerContext';
import { icons } from '../icons/icons';

// interface HeaderProps {}

export function Header() {
	const { onOpen } = useSideBarDrawer();
	const isWideVersion = useBreakpointValue({
		base: false,
		md: true,
		lg: true,
	});
	return (
		<Flex
			as='header'
			bg={'messenger.default'}
			w='full'
			color='white'
			h='150px'
			pt='2'
			justifyContent={'space-between'}
			px={['1rem', '1rem', '0']}
		>
			<Box>
				{!isWideVersion && (
					<IconButton
						icon={<Icon as={icons.hamburger} fontSize='24' />}
						aria-label='hamburger'
						bg='none'
						variant='unstyled'
						onClick={onOpen}
					/>
				)}
			</Box>
			<Flex alignItems={'center'} h='2.7rem' marginRight={['0', '0', '1.2rem']}>
				<Text>LOGOUT</Text>

				<IconButton
					icon={<Icon as={icons.logout} fontSize='24' />}
					aria-label='hamburger'
					bg='none'
					variant={'unstyled'}
					display='flex'
				/>
			</Flex>
		</Flex>
	);
}
