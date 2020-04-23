import React, { useState, useEffect } from 'react';
import api from 'axios';

import { Textbox, Button } from '../../components';

import {
	Container,
	ContentContainer,
	SearchContainer,
	ResultContainer,
	List,
	Item,
} from './styles';

export default function Home() {
	const [searchText, setSearchText] = useState('');
	const [users, setUsers] = useState([]);

	const getUsers = () => {
		api.get(`https://api.github.com/users`).then((res) => {
			setUsers(res.data);
		});
	};

	const getUsersByLogin = () => {
		api
			.get(`https://api.github.com/search/users?q=${searchText}&sort=followers`)
			.then((res) => {
				setUsers(res.data.items);
			});
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handleSearchTextChange = (e) => {
		setSearchText(e.target.value);
	};

	const handleSearchClick = () => {
		getUsersByLogin();
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter' && !!searchText) {
			handleSearchClick();
		} else {
			getUsers();
		}
	};

	return (
		<Container>
			<h1>Busca de usuários - GitHub</h1>
			<ContentContainer>
				<SearchContainer>
					<Textbox
						placeholder="Buscar usuário..."
						value={searchText}
						onChange={handleSearchTextChange}
						onKeyPress={handleKeyPress}
					/>
					<Button onClick={handleSearchClick}>Pesquisar</Button>
				</SearchContainer>

				<ResultContainer>
					<List>
						{users.map((user) => {
							return (
								<Item key={user.id}>
									<img src={user.avatar_url} alt={user.login} />
									<span>{user.login}</span>
								</Item>
							);
						})}
					</List>
				</ResultContainer>

				<p>Desenvolvido por Raphael Ferreira - Abril 2020</p>
			</ContentContainer>
		</Container>
	);
}
