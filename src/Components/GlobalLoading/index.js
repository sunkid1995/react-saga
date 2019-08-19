import React from 'react';

// css
import './index.css';

// Icon
import LoadingIcon from '../../Assets/Images/loading.gif';

const GlobalLoading = () => {
  return (
    <React.Fragment>
      <div className="loading-component">
        <img src={LoadingIcon} alt="loading" className="icon" />
      </div>
    </React.Fragment>
  );
}

export default GlobalLoading;
