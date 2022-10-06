import PageLayout from "../components/PageLayout";
import CollectionViewerContainer from "../containers/CollectionViewerContainer";

const CollectionDetailed = () => (
  <PageLayout breadcrumbs={[{ label: "Коллекция", link: "/collection" }]}>
    <CollectionViewerContainer />
  </PageLayout>
);

export default CollectionDetailed;
