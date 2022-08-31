import { useEffect } from 'react';

type TitlePageProps = {
    title: string,
    children: JSX.Element,
}

const TitledPage: React.FC<TitlePageProps> = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return children;
};

export default TitledPage;
