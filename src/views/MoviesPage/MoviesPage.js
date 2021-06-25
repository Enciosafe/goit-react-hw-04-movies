import {PureComponent} from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import {getSearchMovies} from "../../services/movieAPI";
import s from "../HomePage/HomePage.module.css";
import {Link} from "react-router-dom";


export default class MoviesPage extends PureComponent {

    state = {
        queryWord: '',
        data: [],
    }

    handleChange = e => {
        const {value} = e.currentTarget
        this.setState({queryWord: value})
    }

    searchMovies = async () => {
        const {queryWord} = this.state
        try {
            const data = await getSearchMovies(queryWord);
            this.setState({data: data})
        } catch (error) {
            throw(error);
        }
    }

    onSearch = e => {
        const { queryWord } = this.state
        e.preventDefault()
        this.setState({[queryWord]: e.currentTarget.value})
        this.searchMovies()
    }



    render () {
        const {data} = this.state
        return <>

            <h2>MoviesPage</h2>
            <SearchBar handleChange={this.handleChange}
                       onSearch={this.onSearch}
                       state={this.state}/>
            {data.results
                ?<><h2>RESULTS</h2>
                    <ul>
                        {data.results.map(movie =>
                            <li key={movie.id} className={s.liItem}>
                                <Link to={`${this.props.match.url}/${movie.id}`}>{movie.title}</Link>
                            </li>)}
                    </ul>
                </>
                :null}
        </>
    }
}