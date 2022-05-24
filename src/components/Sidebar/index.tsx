import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	useBreakpointValue,
} from '@chakra-ui/react';
import { useSideBarDrawer } from '../../context/DrawerContext';
import { SideBarNav } from './SideBarNav';

interface SideBarProps {
	page: string;
	icon: string;
}

export default function SideBar({ icon, page }: SideBarProps) {
	const { isOpen, onClose } = useSideBarDrawer();
	const isWideVersion = useBreakpointValue({
		base: true,
		md: false,
		lg: false,
	});
	if (isWideVersion) {
		return (
			<Drawer isOpen={isOpen} onClose={onClose} placement='left' size='xs'>
				<DrawerOverlay>
					<DrawerContent bg='messenger.default' p='4'>
						<DrawerCloseButton mt='6' color='white' />
						<DrawerHeader color='white'>
							<Box>{page}</Box>
						</DrawerHeader>
						<DrawerBody>
							<Flex w='100px'>
								<SideBarNav page={page} isDrawer />
							</Flex>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		);
	}

	return <Flex as='aside'>{!isWideVersion && <SideBarNav page={page} />}</Flex>;
}
