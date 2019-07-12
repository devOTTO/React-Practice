import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { Query } from "react-apollo"
import {HOME_PAGE} from "./queries"
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

//query 컴포넌트에서 중요한것!!!!! children 함수(render prop), 컴포넌트 안에 함수를 넣어야 함
//loaing, data, error
const Home = () => (
    <Container>
    <Query query = {HOME_PAGE}>
        {({loading, data, error}) => {
        if(loading) return <span>loading</span>
        if(error) return <span>something happened</span>
        return data.movies.map(movie => (
        <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
            />
        ))
    }}
</Query>
</Container>
)

export default Home