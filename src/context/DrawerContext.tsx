import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react';

interface DrawerContextProviderProps {
	children: ReactNode;
}

type DrawerContextProps = UseDisclosureReturn;

const DrawerContext = createContext({} as DrawerContextProps);

export function DrawerContextProvider({
	children,
}: DrawerContextProviderProps) {
	const disclosure = useDisclosure();
	return (
		<DrawerContext.Provider value={disclosure}>
			{children}
		</DrawerContext.Provider>
	);
}

export const useSideBarDrawer = () => useContext(DrawerContext);
