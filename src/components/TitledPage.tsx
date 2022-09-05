import { useEffect } from "react";

type TitlePageProps = {
  title: string;
  children: JSX.Element;
};

const TitledPage = ({ title, children }: TitlePageProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return children;
};

export default TitledPage;
