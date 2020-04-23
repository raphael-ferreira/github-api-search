import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FaLink, FaArrowLeft } from 'react-icons/fa';

import api from 'axios';

import { Button } from '../../components';

import {
	Container,
	Content,
	User,
	UserInfo,
	Field,
	Value,
	Result,
	RepoInfo,
	List,
	Item,
	Link,
} from './styles';

import { MainContext } from '../../store/context';

function getCounts(arr) {
	const a = [];
	const b = [];

	let prev;

	arr.sort();
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] !== prev) {
			a.push(arr[i]);
			b.push(1);
		} else {
			b[b.length - 1] += 1;
		}

		prev = arr[i];
	}

	const result = a.map((e, i) => `${e} (${b[i]})`).join(', ');

	return result;
}

export default function UserDetail() {
	const history = useHistory();
	const { state } = useContext(MainContext);

	const [repositories, setRepositories] = useState([]);
	const [totalSize, setTotalSize] = useState('');
	const [totalLanguages, setTotalLanguages] = useState('');
	const [totalIssues, setTotalIssues] = useState('');

	useEffect(() => {
		if (!state.user) {
			history.push('/users');
		} else {
			api
				.get(state.user && state.user.repos_url)
				.then((res) => {
					setRepositories(res.data);

					return res.data;
				})
				.then((data) => {
					setTotalSize(data.map((e) => e.size).reduce((a, b) => a + b));
					setTotalIssues(
						data.map((e) => e.open_issues).reduce((a, b) => a + b)
					);
					setTotalLanguages(getCounts(data.map((e) => e.language)));
				});
		}
	}, [history, state]);

	return (
		<Container>
			<h1>Detalhes do Usuário</h1>

			<Content>
				<User>
					<img
						src={state.user && state.user.avatar_url}
						alt={state.user && state.user.login}
					/>

					<h2>{state.user && state.user.name}</h2>
					<h3>{state.user && state.user.login}</h3>

					<UserInfo>
						<Field>
							Bio: <Value>{state.user && state.user.bio}</Value>
						</Field>
						<Field>
							Localidade: <Value>{state.user && state.user.location}</Value>
						</Field>
						<Field>
							Seguidores: <Value>{state.user && state.user.followers}</Value>
						</Field>
						<Field>
							Seguindo: <Value>{state.user && state.user.following}</Value>
						</Field>
					</UserInfo>

					<Link href={state.user && state.user.html_url}>
						<span>Ir para página</span> <FaLink />
					</Link>
				</User>

				<Result>
					<RepoInfo>
						<Field>
							Tamanho total: <Value>{totalSize} bytes</Value>
						</Field>
						<Field>
							Linguagens: <Value>{totalLanguages}</Value>
						</Field>
						<Field>
							Issues abertos: <Value>{totalIssues}</Value>
						</Field>
					</RepoInfo>

					<List>
						<h2>Repositórios</h2>
						{repositories.map((repo) => {
							return (
								<Item key={repo.id}>
									<p>
										<strong>{repo.name}</strong>
									</p>
									<p>{repo.full_name}</p>
									<p>
										<span>
											Tamanho: <strong>{`${repo.size} bytes`} </strong>
										</span>
										<span>
											| Linguagem: <strong>{repo.language} </strong>
										</span>
										<span>
											| Issues abertos:
											<strong> {repo.open_issues} </strong>
										</span>
									</p>
								</Item>
							);
						})}
					</List>
				</Result>
			</Content>

			<Button onClick={() => history.push('/users')}>
				<FaArrowLeft />
				<span>Voltar</span>
			</Button>
		</Container>
	);
}
