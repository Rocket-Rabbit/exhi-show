import React from 'react';
import axios from 'axios';
import XMLParser from 'react-xml-parser';
// import Movie from './Movie';
// import "./Home.css";

// https://yts-proxy.now.sh/list_movies.json

class Home extends React.Component {  
  state = {
    isLoading: true,
    store: [],
  }

  getMovies = async () => {
    const movies = await axios.get('http://dgfc.or.kr/performance/xml/calenderMonth.asp?year=2021&month=04')
    .then(function (response) {
      const dgData = new XMLParser().parseFromString(response.data);
      const dgShow = dgData.children[2].children.slice(1,12); 
      //dgShow.slice(1, 12);
      console.log(dgShow);
    });
    //this.setState({ store: movies, isLoading: false });
    // movies : name과 value가 동일한 이름일 때 단축속성 사용 가능, (= movies: movies)
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, store } = this.state;
    // state의 상태 변화를 감지하고, 감지되는 순간 다시 render() 실행.
    return(
       <p>Hi~</p>
    );
  }
}

export default Home;

/* 
 <section className="container">
          { isLoading 
            ? (
              <div className="loader">
                <span className="loader_text">Loading</span>
              </div>
            ) : (
          // console.log(movie);
          // movies에는 api로 불러온 movies배열
          // import된 Movie로 값을 넘겨주고 컴포넌트 반환 
              <div className="movies">
              { store.map(movie => (
                <Movie
                  key={movie.id}
                  //id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  posterLg={movie.large_cover_image}
                  genres={movie.genres}//장르(배열)
                  back={movie.background_image}
                />
              )) }
            </div>
            )}
        </section>
        */