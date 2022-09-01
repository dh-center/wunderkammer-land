import React, { useMemo, useState } from "react";
import { cardPropertyType, cardType } from "../containers/CollectionViewerContainer";
import ClientPagination from "./ClientPagination";

const PAGE_SIZE: number = 10;

interface CardItemProps {
  id: number;
  name: string;
  propertiesList: cardPropertyType[];
}

interface ColleactionViewerProps {
  cards: cardType[];
  isLoading: boolean;
}

const simpleSearch = (str: string, lowerCaseSearch: string) => str.toLowerCase().indexOf(lowerCaseSearch) !== -1;
const CardItem: React.FC<CardItemProps> = ({ id, name, propertiesList }) => (
  <li key={id} className="collection-detailed__card-item">
    <h3>{name}</h3>
    <ul className="collection-detailed__properties-list">
      {propertiesList?.map(({ propertyName, data, propertyId }) => (
        <li key={propertyId} className="collection-detailed__properties-list-item">{`${propertyName}: ${data}`}</li>
      ))}
    </ul>
  </li>
);

const CollectionViewer: React.FC<ColleactionViewerProps> = ({ cards, isLoading }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const filtered = useMemo(
    () =>
      cards.filter(
        ({ name, propertiesList }) =>
          simpleSearch(name.toLowerCase(), searchValue) || propertiesList.some(({ data }) => simpleSearch(data, searchValue))
      ),
    [cards, searchValue]
  );

  return (
    <section className="collection-detailed__wrap">
      <div className="collection-detailed__search">
        <input
          type="search"
          placeholder="Поиск по названию или свойству"
          className="collection-detailed__search-input"
          defaultValue={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value.toLocaleLowerCase());
          }}
        />
      </div>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <ClientPagination
          pageSize={PAGE_SIZE}
          items={filtered}
          render={(paginated: cardType[]) => {
            return (
              <ul className="collection-detailed__card-list">
                {paginated.map(({ id, name, propertiesList }) => (
                  <CardItem key={id} id={id} name={name} propertiesList={propertiesList} />
                ))}
              </ul>
            );
          }}
        />
      )}
    </section>
  );
};

export default CollectionViewer;
