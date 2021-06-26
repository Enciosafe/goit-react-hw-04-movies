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
        return  <>
            <h2>Trending Today</h2>
            <ul>
                {trendingMovies.map(({id, title}) =>
                    <li key={id} className={s.liItem}>
                        <Link to={`/movie/${id}`}>{title}</Link>
                    </li>)}
            </ul>

        </>

    }
}