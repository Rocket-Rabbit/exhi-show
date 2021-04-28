import React, { Fragment } from 'react';
import Home from './Home.js';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="left-heading">
        <p className="nail-heading">
          <span>대구광역시 공공데이터 활용</span>
        </p>
        <h2>대구광역시<br/>공연일정</h2>
        <div className="dg-loc">
            <span> 대구오페라하우스</span>
            <span> 대구문화예술회관</span>
            <span> 대구코오롱야외음악당</span>
            <span> 대구예술발전소</span>
        </div>
      </div>
      <Home />
    </Fragment>
  );
}

export default App;
