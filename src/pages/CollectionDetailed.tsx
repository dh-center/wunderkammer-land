import React, { useEffect, useState } from "react";
import { CardsAPI } from "../api/cards";
import Pagination from "../components/Pagination";

export type HandlePageClickType = {
  selected: number;
};

type propertyType = {
  propertyId: number;
  name: string;
  isLink: boolean;
  dataType: {
    name: string;
  };
};

type cardPropertyType = {
  id: number;
  data: string;
  propertyId: number;
};

type cardType = {
  id: number;
  isFilled: true;
  name: string;
  organizationId: number;
  preventDefault: boolean;
  userId: number;
  propertiesList: cardPropertyType[];
  createdAt: string;
  updateAt: string;
};

const CollectionDetailed: React.FC = () => {
  const [cardsList, setCardsList] = useState<cardType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredCards, setFilteredCards] = useState<cardType[]>([]);
  const [propertiesList, setPropertiesList] = useState<propertyType[]>([]);

  const itemsPerPage = 10;

  const [currentItems, setCurrentItems] = useState<cardType[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);

  useEffect(() => {
    CardsAPI.getCardsByFirstOrganization().then((res) => setCardsList(res)); // Получение всех карточек
    CardsAPI.getCardsProperties().then((res) => setPropertiesList(res));
  }, []);

  useEffect(() => {
    const filtered = cardsList.filter(function (val: cardType) {
      // Фильтрация карточек
      let propСoincidence = false;
      val.propertiesList.forEach((item: cardPropertyType) => {
        if (item.data.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
          propСoincidence = true;
          return;
        }
      });
      return propСoincidence || val.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
    setFilteredCards(filtered);
  }, [searchValue, cardsList]);

  // library example: https://www.npmjs.com/package/react-paginate
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredCards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredCards.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchValue, filteredCards]);

  // library example: https://www.npmjs.com/package/react-paginate
  const handlePageClick = (event: HandlePageClickType) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCards.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="collection-detailed__wrap">
      <div className="collection-detailed__search">
        <input
          type="text"
          placeholder="Поиск по названию или свойству"
          className="collection-detailed__search-input"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type="button" className="collection-detailed__search-button" onClick={() => setSearchValue("")}>
          X
        </button>
      </div>
      <ul className="collection-detailed__card-list">
        {currentItems.map((item) => (
          <li key={item.id} className="collection-detailed__card-item">
            <h3>{item.name}</h3>
            <ul className="collection-detailed__properties-list">
              {item.propertiesList?.map((prop) => (
                <li key={prop.propertyId} className="collection-detailed__properties-list-item">{`${
                  propertiesList.find(function (el) {
                    return el.propertyId === prop.propertyId;
                  })?.name
                }: ${prop.data}`}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </section>
  );
};

export default CollectionDetailed;
