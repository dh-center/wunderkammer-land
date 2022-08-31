import { useEffect } from 'react';

const TitledPage = ({ title, children }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return children;
};

export default TitledPage;
