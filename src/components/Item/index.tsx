import { Component, Requireable } from 'react';
import { Card, Button, Accordion } from 'react-bootstrap';
import Workout from '../../config/workout.interface';
import PropTypes from 'prop-types';

export default class Item extends Component<any> {
  static propTypes: {
    nome: Requireable<string>;
    workout: Requireable<object>;
  };
  render() {
    const {
      workout: { imagem, nome, exercicio, series, repeticoes, carga, foco, video },
    } = this.props;
    console.log(this.props.workout);
    return (
      <div className='card'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <img width='360' alt={imagem.alt} src='../../assets/abd-edge.jpg' />
            <Card.Title>{nome}</Card.Title>
            <Card.Title>{exercicio}</Card.Title>
            <Card.Text>{series}</Card.Text>
            <Card.Text>{repeticoes}</Card.Text>
            <Card.Text>{carga}</Card.Text>
            <Card.Text>{foco}</Card.Text>
          </Card.Body>
          {video}
        </Card>
      </div>
    );
  }
}

Item.propTypes = { nome: PropTypes.string, workout: PropTypes.object };
