import React from 'react';

const ChooseUsCol = (Prop) => {
  return(
    <>
    <div class="col-lg-3 col-md-6 col-12 icon-text-box">
        <div class="icon-text-box-wrap">
            <div class="icon-wrap">
                <i className={Prop.iconName}></i>
            </div>
            <div class="icon-text-content">
                <h6 class="icon-text-title">{Prop.boxTitle}</h6>
                <div class="icon-text">
                    <p>{Prop.boxContent}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ChooseUsCol;