import { ReactElement } from 'react';
import '../styles/templateRepositories.scss'

interface TemplateRepository {
    header: ReactElement;
    content: ReactElement;
}

export function TemplateHeaderContent({ header, content }: TemplateRepository) {
    return (
        <div className="Container">

            <body className="interna">
                <header className="header">
                    <nav className="header_nav container"> {header} </nav>
                </header>

                <section className="repositorios">
                    <div className="section-title">
                        <h1>Trilha ReactJS</h1>
                        <p>Ignite</p>
                    </div>

                    <div className="container">

                        <div className="repositorios-wrapper">
                            {content}
                        </div>

                    </div>
                </section>
                <footer>
                    <div>
                        Projeto do curso ignite da rockeseat © 2021 - 2023
                        <br />
                       Aluno Marcos Augusto Rodrigues 
                    </div>

                </footer>
            </body>


        </div>
    )
}

