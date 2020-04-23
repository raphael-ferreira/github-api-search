import React from 'react';

import { Container, List, ListItem, Link } from './styles';

export default function Header() {
	return (
		<Container>
			<List>
				<ListItem>
					<Link href="/home">Página Inicial</Link>
				</ListItem>
				<ListItem>
					<Link href="/users">Usuários</Link>
				</ListItem>
			</List>
		</Container>
	);
}
