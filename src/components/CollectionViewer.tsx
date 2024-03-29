import { useMemo, useState } from "react";
import { CardData } from "../api/cards";
import usePagination from "../hooks/usePagination";
import PropertiesParser from "./PropertiesParser";

const PAGE_SIZE = 10;

type CardItemProps = {
  id: number;
  name: string;
  propertiesList: CardData["propertiesList"];
};

type organizationState = {
  id: number;
  name: string;
};

type Props = {
  cards: CardData[];
  organizations: organizationState[];
  isLoading: boolean;
  setFilterValue: (id: number) => void;
};

const simpleSearch = (str: string, lowerCaseSearch: string) => str.toLowerCase().indexOf(lowerCaseSearch) !== -1;
const CardItem = ({ id, name, propertiesList }: CardItemProps) => {
  return (
    <li key={id} className="collection-detailed__card-item">
      <h3>{name}</h3>
      <ul className="collection-detailed__properties-list">
        {propertiesList?.map((property) => {
          return (
            <li key={property.propertyId} className="collection-detailed__properties-list-item">
              <PropertiesParser property={property} />
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const CollectionViewer = ({ cards, isLoading, organizations, setFilterValue }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const filtered = useMemo(
    () =>
      cards.filter(
        ({ name, propertiesList }) =>
          simpleSearch(name.toLowerCase(), searchValue) || propertiesList.some(({ data }) => simpleSearch(data, searchValue))
      ),
    [cards, searchValue]
  );

  const { page, pagination } = usePagination(filtered, PAGE_SIZE);

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
      <select className="collection-detailed__filter" onChange={(e) => setFilterValue(Number(e.target.value))}>
        <option value={0}>Все организации</option>
        {organizations.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <ul className="collection-detailed__card-list">
            {page.map(({ id, name, propertiesList }) => (
              <CardItem key={id} id={id} name={name} propertiesList={propertiesList} />
            ))}
          </ul>
          {pagination}
        </>
      )}
    </section>
  );
};

export default CollectionViewer;
