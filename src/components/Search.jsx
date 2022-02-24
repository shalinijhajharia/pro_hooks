import axios from "axios"
import React from "react"



const Search = () => {
    const [search, setSearch] = React.useState('')
    const [res, setRes] = React.useState()


    const searchBook = async (name) => {
        const query = name.split(" ").join('+')
        axios.get(`http://openlibrary.org/search.json?q=${query}`)
        .then((res)=>{
          console.log(res.data)
          setRes( res.data.docs)
    
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    React.useEffect(() => {
        if (search !== '')
            searchBook(search)
    }, [search])

    const ui = res?.map(ele =>

        <tr>
            <td>{ele.title}</td>
            <td>{ele.author_name ? ele.author_name : " "}</td>
            <td>{ele.first_publish_year ? ele.first_publish_year : " "}</td>
        </tr>
    )
    return (
        <React.Fragment>
            <center>
            <input type="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="search" />
            <h1>Search Result</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pub. Year</th>
                    </tr>
                </thead>
                <tbody>
                    {ui}
                </tbody>
            </table>
            </center>
        </React.Fragment>
    )
}


export default Search