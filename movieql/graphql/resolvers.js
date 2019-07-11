import {getMovies} from './db'

const resolvers = {
    Query:{
        movies:(_, {rating, limit}) => getMovies(limit, rating),
    }
}
//여기서 DB 갈 수 있음!

export default resolvers