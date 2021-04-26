import React, { Fragment } from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import Food from './Food';

// import "./Home.css";

// https://yts-proxy.now.sh/list_movies.json

class Home extends React.Component {  
  state = {
    isLoading: true,
    isScroll: false,
    dgList: [],
    exhiLast: []
  }

  getMovies = async () => {
    await axios.get('http://dgfc.or.kr/performance/xml/calenderMonth.asp?year=2021&month=04').then((response) => {
      //화살표 함수로 바인딩.
      const {
        children: [ , , { children: exhibition } ]
      } = new XMLParser().parseFromString(response.data);
      const dgShow = exhibition.splice(1,5);
      // console.log(dgShow);
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
    
    setTimeout(() => {
      this.getMovies()
      }, 1200) // 시간. 2초 후 실행
  }
  
  componentDidUpdate() { 
    const { isScroll } = this.state;
    if( isScroll )  {
      let screen = document.getElementById("news");
      screen.scrollIntoView({ block: "end" });
      // state 변화시 반응.
    }
    //console.log(this.state.isScroll);
  }

  handleMore = () => {
    const { dgList, exhiLast, isScroll } = this.state;
    let exhiMore = exhiLast.splice(1,5);
    let exhiPush = dgList.concat(exhiMore);
    // concat 기존 배열에 추가, state에 push()와 같은 함수는 안됨!
    this.setState({ dgList: exhiPush, isScroll: true });
  }

  render() {
    const { isLoading, dgList } = this.state;    
    return(
      <section  className="container">
      { isLoading
        ? (
          <div className="loader">
          </div>
        ) : (
          <Fragment>
          <div className="movies" id="news">
            { dgList.map((evt, index) => 
              (
                <Food 
                  key={index} 
                  name={evt.children[1].value}
                  start={evt.children[3].value}
                  end={evt.children[4].value}
                  place={evt.children[6].value}
                />
              ) 
            )}
          <button onClick={this.handleMore} className="btn-more">더보기</button>
          </div>         
          
          </Fragment>
        )}
    </section>
    );
  }
}

export default Home;