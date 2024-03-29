import React from 'react';
import './Loans.css';
import { loans } from '../data';
import { iconsImgs } from '../assets/images';

const Loans = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Loans & Grants Available</h3>
        {/* <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button> */}
      </div>
      <div className="grid-c5-content">
        <div className="grid-items">
          {loans.map((loan) => (
            <div
              className="grid-item cursor-pointer hover:bg-primary-light rounded-sm p-2 ease-in duration-150 hover:scale-95"
              key={loan.id}
            >
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.alert} />
                </div>
                <p className="text text-silver-v1">
                  {loan.title} <span>{loan.due_date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1 text-sm">
                  {loan.amount} WRB
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loans;
