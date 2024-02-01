import React from "react";
import FadeLoader from 'react-spinners/FadeLoader'
import './loading.scss'

const Loading = () => {

  return (
    <div className="loading-container">
      <div className="loading">
        <FadeLoader color="#36d7b7" height={18} margin={2} radius={14} width={4} />
      </div>
    </div>
  );
};

export default Loading;
