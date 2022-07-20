import React from 'react';
import {OfferCard} from '../../types/OfferCard';
import OfferCity from '../offer/OfferCity';
import {TypeOfferList} from '../../const';
import OfferComment from '../offer/offerComment';

type ListOfferProps = {
  typeList: string;
  offers: OfferCard[];
  onListItemHover: (listItemName: string) => void;
  activeOfferCard:string;
  setActiveOfferCard: React.Dispatch<React.SetStateAction<string>>;
};

const getComponentByType = (type:string, keyValueOffer: string, offer: OfferCard, activeOfferCard:string, setActiveOfferCard: React.Dispatch<React.SetStateAction<string>>) => {
  switch (type) {
    case TypeOfferList.CITY:
      return <OfferCity offer={offer} keyValueOffer={keyValueOffer} activeOfferCard={activeOfferCard} setActiveOfferCard={setActiveOfferCard}/>;
    case TypeOfferList.COMMENT:
      return <OfferComment offer={offer} keyValueOffer={keyValueOffer} activeOfferCard={activeOfferCard} setActiveOfferCard={setActiveOfferCard}/>;
  }
};

function ListOffer(props: ListOfferProps): JSX.Element {
  const {typeList, offers, onListItemHover, activeOfferCard, setActiveOfferCard} = props;

  const listItemHoverHandler = (name:string) => {
    onListItemHover(name);
  };

  return (
    <>
      {offers.map((offer, index) => {
        const keyValueOffer = `${index}-${offer}`;
        return (
          <li
            key={keyValueOffer}
            onMouseEnter={()=> {
              listItemHoverHandler(offer.name);
            }}
            style={{listStyleType:'none'}}
          >
            {getComponentByType(typeList, keyValueOffer, offer, activeOfferCard, setActiveOfferCard)}
          </li>
        );
      })}
    </>
  );
}

export default ListOffer;
