import React from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
import Food from './Food';

// import "./Home.css";

// https://yts-proxy.now.sh/list_movies.json

class Home extends React.Component {  
  state = {
    isLoading: true,
    dgList: [],
  }

  getMovies = async () => {
    await axios.get('http://dgfc.or.kr/performance/xml/calenderMonth.asp?year=2021&month=04').then((response) => {
      // 화살표 함수로 바인딩.
      const {
        children: [ , , { children: exhibition } ]
      } = new XMLParser().parseFromString(response.data);
      const dgShow = exhibition.slice(1,10);
      //dgShow.slice(1, 12);
      this.setState({ dgList: dgShow, isLoading: false });
      //console.log(this.state.dgList);
    });    
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, dgList } = this.state;
    console.log(dgList);
    return(
      <section className="container">
      { isLoading
        ? (
          <div className="loader">
            <span className="loader_text">Loading</span>
          </div>
        ) : (
          <div className="movies">
            { dgList.map((evt, index) => 
              (
                <Food 
                  key={index} 
                  name={evt.children[1].value}
                  place={evt.children[7].value}
                />
              ) 
            )}
          </div>
        )}
    </section>
    );
  }
}

export default Home;