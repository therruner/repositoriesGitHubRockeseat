import { GithubFilled } from "@ant-design/icons";

interface HeaderIProps {
    name: string;
}

export function Header({ name }: HeaderIProps) {

    const goToLinkedin = () => {
        window.open('https://www.linkedin.com/in/marcos-augusto-rodrigues-74263b197/')
    }

    return (
        <>
            <GithubFilled style={{ fontSize: '30px', color: '#f1f1f1' }} />

            <div onClick={goToLinkedin} className="contato-wrapper">
                <h2>{name}</h2>
            </div>

        </>
    )
}