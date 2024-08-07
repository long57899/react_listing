import './Listing.css'
import data from '../data/etsy.json'

type TypeItem = {
    listing_id: number;
    url: string;
    MainImage: {
        url_570xN: string;
    };
    title: string;
    currency_code: string;
    price: string;
    quantity: number;
}

type TypeProps = {
    items: TypeItem[];
}

export const dataArray: TypeItem[] = []

for (let i of data) {
  if (!i.url){
    continue
  }
  dataArray.push(i)
}

export default function Listing({ items }: TypeProps) {

    const maxTitle = (str: string, maxlength: number): string => {
        return (str.length >= maxlength) ? str.slice(0, maxlength-1)+'...' : str;
    }
  
    const iconPrice = (currency_code: string, price: string): string => {
        return currency_code === 'USD' ? `$${price}` : (
            currency_code === 'EUR' ? `€${price}` : (
                `${price} ${currency_code}`))
    }
  
    const remainderQuantity = (quantity: number): string => {
        return quantity <= 10 ? "level-low" : (
            quantity <= 20 ? "level-medium" : "level-high")
    }
  
    const itemsMap = items.map( item => (
          
      <div className="item" key={item.listing_id}>
          <div className="item-image">
          <a href={item.url}>
              <img alt={item.title} src={item.MainImage.url_570xN}/>
          </a>
      </div>
          <div className="item-details">
              <p className="item-title">{item.title && maxTitle(item.title,50)}</p>
              <p className="item-price">{item.price && iconPrice(item.currency_code, item.price)}</p>
              <p className={`${"item-quantity"} ${remainderQuantity(item.quantity)}`}>{item.quantity} left</p>
          </div>
      </div>
      )
    );
  
    return (

      <div className="item-list">{itemsMap}</div>

    )
}