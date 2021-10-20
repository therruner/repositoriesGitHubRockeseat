import { ArrowRightOutlined, MessageOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

import '../styles/repositoryItem.scss'
// import { Icon, Tooltip } from 'antd';

interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps) {

    return (
        <li className="repositorios_item-li">
            <h2>{props.repository.name}</h2>
            <span className="meta">{props.repository.description}</span>

            <a href={props.repository.html_url}>

                <ArrowRightOutlined
                    className="messageOutlined"
                    style={{ fontSize: '14px', color: '#rgb(255, 255, 255)' }}
                />

            </a>

        </li>
    )
}