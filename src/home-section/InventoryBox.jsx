import React from 'react';
import InventoryBoxData from './InventoryBoxData';

const InventoryBox = (Prop) => {
  return(
    <>
    <div className="col-xl-3 col-6 boxes-single">
        <a href="inventory-listing.html">
            <div className="inventory-box-content">
                <div className="inventory-type-icon">
                        <img src={Prop.imageSrc} alt="Inventory Car Icon" />
                </div>
                <div className="inventory-text">
                        <h6>{Prop.name}</h6>
                        <h1 className="inventory-number">{Prop.inventoryNumber}</h1>
                </div>
            </div>
        </a>
                                    
    </div>
    </>
  )
}

export default InventoryBox;
