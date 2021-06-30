import QuoteList from "../components/quotes/QuoteList"

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: "Learn React"},
    {id: 'q2', author: 'AVB', text: "Learn Angular"},
    {id: 'q3', author: 'yash', text: "Learn Vue"},
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />

}

export default AllQuotes