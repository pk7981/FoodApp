import React from 'react'
import "./Products.css";
const Products = ({data}) => {
  return (
      <div className='menu'>
         
        <div className='all-items'>
        {data.map((data,i) =>
            <div className='items' key={i}>
                <img src={data.recipe.image} alt="Card image cap" />
                <div className='items-list'>
                    <h5>{data.recipe.label}</h5>
                    <p >Total Amount of Calories : {Math.round(data.recipe.calories)}</p>
                    <button>Buy</button>
                </div>
            </div>
            )}
        </div>    
      </div>
  )
}
 
export default Products