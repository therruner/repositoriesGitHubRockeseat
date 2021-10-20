import { Header } from './components/Header'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'
import { TemplateHeaderContent } from './templates/TemplateHeaderContent'

export function App() {
    return <TemplateHeaderContent
        header={<Header name={"Linkedin"} />}
        content={<RepositoryList />}
    />

}

