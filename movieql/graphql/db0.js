export let movies = [
    {
        id: 0,
        name: "devOTTO",
        age: 24,
        gender: "female"
    },
    {
        id: 1,
        name: "yoong",
        age: 24,
        gender: "male"
    },
    {
        id: 2,
        name: "one",
        age: 24,
        gender: "male"
    },
    {
        id: 3,
        name: "two",
        age: 24,
        gender: "female"
    },
    {
        id: 4,
        name: "three",
        age: 24,
        gender: "female"
    },    
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id)
    return filteredMovies[0]
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies
        return true
    }else{
        return false
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie
}