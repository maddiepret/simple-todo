import React from 'react';
//import css
import './ListItems.css';
//import font to use trash icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItems(props){
    //create variable items and add all the prop items
    const items = props.items;
    //map over these items and return them in a div
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       {/* This is the trash icon used to delete todo item */}
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>})
    return <div>
        {listItems}
    </div>;
  }

  export default ListItems;