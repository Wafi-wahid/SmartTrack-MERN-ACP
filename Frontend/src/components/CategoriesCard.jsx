import React from 'react';

function CategoriesCard() {
  return (
    <div className="card">
      <div className="card-header">
        <span>Categories</span>
        <span className="dropdown-icon">▾</span>
      </div>
      <div className="card-body">
        <ul className="bullet-list">
          <li>Work</li>
          <li>Personal</li>
          <li>Education</li>
        </ul>
      </div>
    </div>
  );
}

export default CategoriesCard;
