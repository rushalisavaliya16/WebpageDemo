import React from 'react';

const LookingForBox = (Prop) => {
  return(
    <>
    <div className="col-xl-6 looking-for-box-single">
        <a href="#" className={Prop.class}>
            <div className="looking-icon-box">
                <div className="icon-wrap">
                    <i className="stm-icon-car_search"></i>
                </div>
                <div className="icon-related-text">
                    <h3>{Prop.title}</h3>
                    <div className="icon-content">
                        <p>{Prop.content}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
    </>
  )
}

export default LookingForBox;