import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import api from 'axios';

import { MainContext } from '../../store/context';

import { Textbox, Button } from '../../components';

import {
	Container,
	ContentContainer,
	SearchContainer,
	ResultContainer,
	List,
	Item,
} from './styles';

export default function Users() {
	const history = useHistory();
	const { dispatch } = useContext(MainContext);

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

	const handleUserClick = (user) => {
		api
			.get(`https://api.github.com/users/${user.login}`)
			.then((res) => {
				dispatch({ type: 'SET_USER', user: res.data });

				return res.data;
			})
			.then(() => {
				history.push(`/user/${user.login}`);
			});
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
					<Button onClick={handleSearchClick}>
						<FaSearch />
						<span>Pesquisar</span>
					</Button>
				</SearchContainer>

				<ResultContainer>
					<List>
						{users.map((user) => {
							return (
								<Item key={user.id} onClick={() => handleUserClick(user)}>
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
