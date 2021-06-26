import { Component } from 'react';
import { getReviewsById } from '../../services/movieAPI';

export default class Reviews extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    const { movieId } = this.props.match.params;
    try {
      const data = await getReviewsById(movieId);
      this.setState({ data: data });
    } catch (error) {
      throw error;
    }
  };

  render(state1 = this.state) {
    const { data } = state1;
    return (
      <>
        {data.length !== 0 ? <h1>REVIEWS</h1> : <h2>NOT REVIEWS YET 😐</h2>}
        <ul>
          {data.map(({ id, author, content }) => (
            <li key={id}>
              <div>
                <h3>🗣Author: ({author})</h3>
                <p>👉{content}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
