import React, { Fragment } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import Food from './Food';

// import "./Home.css";

// https://yts-proxy.now.sh/list_movies.json

class Home extends React.Component {  
  state = {
    isLoading: true,
    dgList: [],
    exhiLast: []
  }

  getMovies = async () => {
    await axios.get('http://dgfc.or.kr/performance/xml/calenderMonth.asp?year=2021&month=04').then((response) => {
      //화살표 함수로 바인딩.
      const {
        children: [ , , { children: exhibition } ]
      } = new XMLParser().parseFromString(response.data);
      const dgShow = exhibition.splice(1,6);
      this.setState(
          { 
            exhiLast: exhibition, // 남은 원본
            dgList: dgShow, //추출, 추출 후 원본은 남은 값이 저장됨.
            isLoading: false, 
          }
        );
    });    
  }

  componentDidMount() {
    this.getMovies();
  }

  handleMore = () => {
    const { dgList, exhiLast } = this.state;
    const exhiMore = exhiLast.splice(1,6);
    const exhiPush = dgList.concat(exhiMore);
    // concat 기존 배열에 추가, state에 push() 와 같은 함수는 안됨!
    this.setState({ dgList: exhiPush });
    console.log(exhiPush);
  }

  render() {
    const { isLoading, dgList, exhiLast } = this.state;    
    return(
      <section className="container">
      { isLoading
        ? (
          <div className="loader">
            <span className="loader_text">Loading</span>
          </div>
        ) : (
          <Fragment>
          {<div className="movies">
            { dgList.map((evt, index) => 
              (
                <Food 
                  key={index} 
                  name={evt.children[1].value}
                  place={evt.children[6].value}
                  numb={index}
                />
              ) 
            )}
          </div>}
          <button onClick={this.handleMore}>더보기</button>
          </Fragment>
        )}
    </section>
    );
  }
}

export default Home;