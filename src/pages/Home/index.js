import React from 'react';
import { useHistory } from 'react-router-dom';

import { FaHammer, FaArrowRight } from 'react-icons/fa';

import { Container } from './styles';

import { Button } from '../../components';

export default function Home() {
	const history = useHistory();

	const handleButtonClick = () => {
		history.push('/users');
	};

	return (
		<Container>
			<h1>Página Inicial</h1>

			<h2>
				<FaHammer /> Em construção...
			</h2>

			<Button onClick={handleButtonClick}>
				<span>Ir para usuários</span>
				<FaArrowRight />
			</Button>
		</Container>
	);
}
