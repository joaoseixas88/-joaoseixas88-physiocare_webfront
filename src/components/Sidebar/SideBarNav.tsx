import {
	Avatar,
	Box,
	Button,
	Divider,
	Flex,
	HStack,
	Icon,
	Text,
	VStack,
} from '@chakra-ui/react';
import {} from '@chakra-ui/icons';
import { icons } from '../../icons/icons';
import { Link } from '../Link';
import { SideBarLink } from './SideBarLink';

interface SideBarNavProps {
	page: string;
	isDrawer?: boolean;
}

export function SideBarNav({ page, isDrawer }: SideBarNavProps) {
	return (
		<Flex
			w='44'
			bg={isDrawer ? 'custromgray.50' : 'messenger.default'}
			direction='column'
		>
			<Flex direction='column' h='150px'>
				<Text
					fontWeight={'bold'}
					color='white'
					justifyContent={'left'}
					textAlign={'left'}
					ml='5'
					pt='2'
				>
					{!isDrawer && page}
				</Text>
				<VStack mt='2'>
					<Avatar size={isDrawer ? 'xl' : 'lg'} />
				</VStack>
				<Flex alignItems={'center'} direction='column' m={isDrawer ? '5' : '3'}>
					<Divider />
					<Divider orientation='vertical' height={'5'} mt='1' />
				</Flex>
			</Flex>
			<Flex
				h='100vh'
				bg={isDrawer ? 'messenger.default' : 'customgray.50'}
				pt={isDrawer ? '5' : '1'}
			>
				<VStack spacing={'5'} alignItems='flex-start'>
					<SideBarLink
						href='dashboard'
						icon='money'
						label='Produtividade'
						isActive={page === 'Produtividade'}
						isDrawer={isDrawer}
					/>
					<SideBarLink
						href='patients'
						icon='people'
						label='Pacientes'
						isActive={page === 'Pacientes'}
						isDrawer={isDrawer}
					/>
					<SideBarLink
						href='schedule'
						icon='schedule'
						label='Agenda'
						isActive={page === 'Agenda'}
						isDrawer={isDrawer}
					/>
					<SideBarLink
						href='homeservices'
						icon='services'
						label='Home Cares'
						isActive={page === 'Home Cares'}
						isDrawer={isDrawer}
					/>
					<SideBarLink
						href='visits'
						icon='visit'
						label='Atendimentos'
						isActive={page === 'Atendimentos'}
						isDrawer={isDrawer}
					/>
				</VStack>
			</Flex>
		</Flex>
	);
}
