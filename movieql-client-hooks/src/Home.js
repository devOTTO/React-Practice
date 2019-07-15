import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import {HOME_PAGE} from "./queries"
import Movie from "./Movie";
import { useQuery } from "react-apollo-hooks";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

//query 컴포넌트에서 중요한것!!!!! children 함수(render prop), 컴포넌트 안에 함수를 넣어야 함
//loaing, data, error
const Home = () => {
    const {data, error, loading} = useQuery(HOME_PAGE)
    return (
        <Container>
            <Helmet>
                <title>Home | MovieQL</title>
            </Helmet>
            {loading && "Loading"}
            {error && "something is wrong"}
            {!loading &&
                data&&
                data.movies&&
                data.movies.map(movie => (
                    <Movie
                    id={movie.id}
                    key={movie.id}
                    poster={movie.medium_cover_image}
                    title={movie.title}
                    rating={movie.rating}
                    />
                ))

            }
           
            
      
    </Container>
    )
}



export default Home