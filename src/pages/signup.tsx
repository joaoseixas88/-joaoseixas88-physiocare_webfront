import {
	Button,
	Divider,
	Flex,
	HStack,
	Image,
	Stack,
	Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { Input } from '../components/Input';

export default function SignUp() {
	return (
		<div>
			<Head>
				<title>PhysioCare - Cadastrar</title>
			</Head>
			<Flex w='100vw' h='100vh' alignItems={'center'} justifyContent='center'>
				<Flex
					bg='white'
					p={['10', '4']}
					flexDir='column'
					w={['80%', '70%', '35%']}
					alignItems={'center'}
					justifyContent={'space-around'}
					rounded={'md'}
					shadow='2xl'
				>
					<Text mb='4' textAlign={'left'} marginTop={['6', '0']}>
						CADASTRAR
					</Text>
					<Stack spacing={'4'}>
						<Input label='Email' type='email' />
						<Input label='Senha' type='password' />
						<Button colorScheme={'messenger'}>CADASTRAR</Button>
						<HStack spacing={'5'}></HStack>
					</Stack>
					<Stack direction='row' w='100%' alignItems={'center'} p={4}>
						<Divider orientation='horizontal' variant={'dashed'} />
						<Text border={'1px'} rounded='base' borderColor={'gray.200'} p='1'>
							ou
						</Text>
						<Divider orientation='horizontal' variant={'dashed'} />
					</Stack>
					<HStack
						spacing={['10', '14']}
						// marginBottom={['5', '10']}
						// marginTop={['4', '5']}
					>
						<Image
							src={'./google.svg'}
							boxSize={['38', '41']}
							onClick={() => alert('Google')}
							cursor='pointer'
						/>
						<Image
							src={'./facebook.svg'}
							boxSize={['38', '41']}
							cursor='pointer'
							onClick={() => alert('Facebook')}
						/>
						<Image
							src={'./linkedin.svg'}
							boxSize={['38', '41']}
							onClick={() => alert('Linkedin')}
							cursor='pointer'
						/>
					</HStack>
					<Text>Ja tem uma conta?</Text>
					<Link href={'/'}>
						<Text
							marginLeft={'2'}
							textDecoration={'underline'}
							cursor='pointer'
						>
							Login
						</Text>
					</Link>
				</Flex>
			</Flex>
		</div>
	);
}
