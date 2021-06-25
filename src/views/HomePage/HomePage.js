import {Component} from "react";
import {getTrendsMovies} from "../../services/movieAPI"
import s from "./HomePage.module.css"
import {Link} from "react-router-dom";


export default class HomePage extends Component  {
    state = {
        trendingMovies: [],
    }

    componentDidMount() {
        const getData = () => {
            getTrendsMovies().then(response =>
                this.setState({trendingMovies: response.results})
            )
        }
        getData()
    }

    render () {
        const { trendingMovies } = this.state
        console.log()
        return  <>
            <h2>Trending Today</h2>
            <ul>
                {trendingMovies.map(movie =>
                    <li key={movie.id} className={s.liItem}>
                        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </li>)}
            </ul>

        </>

    }
}