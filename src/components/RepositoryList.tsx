import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

interface Repository {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(reponse => reponse.json())
            .then(data => setRepositories(data))
    }, [])
    // Cuidado para não deixar sem o segundo parametro , pode causar um LOOPING 
    // Não Atualizar uma variavél que esteja sendo "monitorada" no useEffect

    return (
        <section className="repository-List">

                <div className="btn-wrapper">
                    <h1>Lista de repositórios</h1>
                </div>

            <ul>
                {repositories.map((repository) => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>

        </section>
    )
}

