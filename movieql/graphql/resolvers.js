const people = [
    {
        name: "devOTTO",
        age: 24,
        gender: "female"
    },
    {
        name: "yoong",
        age: 24,
        gender: "male"
    },
    {
        name: "one",
        age: 24,
        gender: "male"
    },
    {
        name: "two",
        age: 24,
        gender: "female"
    },
    {
        name: "three",
        age: 24,
        gender: "female"
    },    
]

const resolvers = {
    Query:{
        people:() => people,
    }
}
//여기서 DB 갈 수 있음!

export default resolvers