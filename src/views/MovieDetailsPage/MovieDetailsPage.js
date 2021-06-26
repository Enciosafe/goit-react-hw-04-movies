import React, {Component, Suspense, lazy} from "react";
import {getMovieById, IMG_PATH} from "../../services/movieAPI";
import {NavLink, Route, Switch} from "react-router-dom";
import s from "./MovieDetailsPage.module.css"
// import Cast from "../../components/Cast/Cast";
// import Reviews from "../../components/Reviews/Reviews";
import routes from "../../routes"


const NO_IMG ='https://www.sion-consulting.com/wp-content/themes/consultix/images/no-image-found-360x250.png';
const CastView = lazy(() => import('../../components/Cast/Cast' /* webpackChunkName: 'cast-page' */));
const ReviewsView = lazy(() => import('../../components/Reviews/Reviews' /* webpackChunkName: 'reviews-page' */));

export default class MovieDetailsPage extends Component {

    state = {
        title: null,
        backdrop_path: null,
        popularity: null,
        overview: null,
        genres: [],
        id: null,
        release_date: null,
    }

    componentDidMount = async () => {
        const {movieId} = this.props.match.params;
        try {
            const data = await getMovieById(movieId);
            this.setState({...data})
        } catch (error) {
            throw (error);
    }}


    render () {
        const {title, backdrop_path, popularity, overview, genres, release_date} = this.state
        return  <>

            <div className={s.movieContainer}>
                <button onClick={this.props.history.goBack}>go back</button>
                <h1 className={s.title}>{title} ({release_date})</h1>
                <div className={s.container}>
                    <div className={s.containerItem}>
                        <img className={s.img} src={backdrop_path
                            ?`${IMG_PATH}${backdrop_path}`
                            :NO_IMG}
                             alt=""/>
                    </div>
                    <div className={s.containerItem}>
                        <span>💊Users Score: ({popularity})</span>
                        <h3>🔆Overview</h3>
                        <p>{overview}</p>
                        <h3>🏴Genres</h3>
                        <ul>
                            {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
                <div className={s.info}>
                    <h2>Additional Information</h2>
                    <ul>
                        <li><NavLink to={`${this.props.match.url}/cast`}
                                     className={s.item}
                                     activeClassName={s.active}>
                            💃Cast</NavLink></li>
                        <li><NavLink to={`${this.props.match.url}/reviews`}
                                     className={s.item}
                                     activeClassName={s.active}>
                            🚽Reviews</NavLink></li>
                    </ul>
                </div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                    <Route exact path={routes.cast} component={CastView} />
                    <Route exact path={routes.reviews}component={ReviewsView} />
                </Switch>
            </Suspense>
        </>
    }
}

