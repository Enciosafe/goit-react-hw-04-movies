import {Component} from "react";
import {getReviewsById} from "../../services/movieAPI";


export default class Reviews extends Component {

    state = {
        data: [],
    }

    componentDidMount = async () => {
        const {movieId} = this.props.match.params;
        try {
            const data = await getReviewsById(movieId);
            this.setState({data: data})
        } catch (error) {
            throw (error);
        }}

    render () {
        const {data} = this.state
        return <>
            {data.length !== 0
                ?<h1>REVIEWS</h1>
                :<h2>NOT REVIEWS YET 😐</h2>}
            <ul>
                {data.map((review) =>
                    <li key={review.id}><div>
                        <h3>🗣Author: ({review.author})</h3>
                        <p>👉{review.content}</p>
                    </div></li>
                )}
            </ul>

        </>
    }
}