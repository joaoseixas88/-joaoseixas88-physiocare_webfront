// interface DashboardProps {

import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import SideBar from '../components/Sidebar';

// }

export default function HomeServices() {
	return (
		<Flex>
			<SideBar page='Home Cares' icon='services' />
			<Flex direction='column' w='full' h='100vh'>
				<Header />
				<Main />
			</Flex>
		</Flex>
	);
}
