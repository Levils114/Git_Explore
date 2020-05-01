import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from './../../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from "./../../services/api";

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams{
	repository: string;

};

interface Repository{
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	}
	stargazers_count: number
	forks: number;
	open_issues:number;

}

interface Issue{
	id: string;
	title: string;
	html_url: string;
	user: {
		login: string;
	}
}

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();

	const [ repository, setRepository ] = useState<Repository | null >(null);
	const [ issues, setIssues ] = useState<Issue[]>([]);

	useEffect( () => {
		api.get(`repos/${params.repository}`).then( response => {
			console.log(response.data)
			setRepository(response.data);

		} );

		api.get(`repos/${params.repository}/issues`).then( response => {
			console.log(response.data);

			setIssues(response.data);

		} );
	}, [params.repository] );

	return (
		<>
			<Header>
				<Link to="/">
					<FiChevronLeft size={ 16 } />
					Voltar
				</Link>

				<img src={ logoImg } alt="Github Explorer" />
			</Header>



			{ repository && (
				<>
				<RepositoryInfo key={repository.full_name}>
				<header>
					<img src={ repository.owner.avatar_url } alt={ repository.owner.login }/>
					<div>
						<strong>{repository.full_name}</strong>
						<p>{repository.description}</p>
					</div>
				</header>

				<div className="list">
					<ul>
						<li>
							<strong>{ repository.stargazers_count }</strong>
							<span>Stars</span>
						</li>
					</ul>

					<ul>
						<li>
							<strong>{repository.forks}</strong>
							<span>Forks</span>
						</li>
					</ul>

					<ul>
						<li>
							<strong>{repository.open_issues}</strong>
							<span>Issues Abertas</span>
						</li>
					</ul>

					<div className="download">
						<button>
							<a href={`https://github.com/${repository.full_name}/archive/master.zip`}>Download</a>
						</button>
					</div>
				</div>
			</RepositoryInfo>
			</>
				) }





			<Issues>
				{issues.map( issue => (
					<a href={issue.html_url} key={ issue.id }>
						<div>
							<strong>{ issue.title }</strong>
							<p>{ issue.user.login }</p>
						</div>

						<FiChevronRight size={ 20 }/>
					</a>

					))}
			</Issues>

		</>
		);
}

export default Repository;
