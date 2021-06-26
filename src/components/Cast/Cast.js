import { Component } from 'react';
import { getCastById, IMG_PATH } from '../../services/movieAPI';
import s from './Cast.module.css';

const DEFAULT_IMG =
  'https://cdn0.iconfinder.com/data/icons/pinterest-ui-flat/48/Pinterest_UI-18-512.png';

export default class Cast extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    const { movieId } = this.props.match.params;
    try {
      const data = await getCastById(movieId);
      this.setState({ data: data });
    } catch (error) {
      throw error;
    }
  };

  render() {
    return (
      <>
        <ul className={s.container}>
          {this.state.data.map(
            ({ profile_path, id, name, character, gender }) => (
              <li key={id} className={s.card}>
                <img
                  className={s.img}
                  src={
                    profile_path ? `${IMG_PATH}${profile_path}` : DEFAULT_IMG
                  }
                  alt=""
                />
                <h3>{name}</h3>
                <h4>"{character}"</h4>
                <p>({gender === 1 ? 'female' : 'male'})</p>
              </li>
            ),
          )}
        </ul>
      </>
    );
  }
}
