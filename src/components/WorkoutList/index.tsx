import { Component, Requireable, useState } from 'react';
// import Form from 'react-bootstrap/Form';
import Item from '../Item';
import PropTypes from 'prop-types';
// import Workout from '../../config/workout.interface';
import { workouts } from '../../config/data';

export default class WorkoutList extends Component<any> {
  static propTypes: {
    nome: Requireable<string>;
    selectedWorkgroup: React.ReactNode;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      // workouts: props.workout,
      // selectedWorkgroup: '',
    };
  }

  // optionsList = ['Peitoral e Tríceps', 'Costas e Bíceps', 'Ombros, Tríceps e Abdómen'];
  // options = this.optionsList.map((item) => {
  //   return (
  //     <option key={item} value={item}>
  //       {item}
  //     </option>
  //   );
  // });
  // handleWorkgroup() {
  //   const { selectedWorkgroup } = this.state;
  //   const { workouts } = this.props;
  //   const filteredWorkouts = workouts.filter((nome: string) =>
  //     nome.toLowerCase().includes(selectedWorkgroup)
  //   );
  //   this.setState({ workouts: filteredWorkouts });
  // }
  render() {
    return (
      <div className='list'>
        {/* <Form>
          <Form.Group controlId='exampleForm.SelectCustom'>
            <Form.Label>Treino</Form.Label>
            <Form.Control as='select' onChange={this.handleWorkgroup}>
              {this.options}
            </Form.Control>
          </Form.Group>
        </Form> */}
        {workouts.map((workout) => (
          <Item key={workout.id} workout={workout} />
        ))}
      </div>
    );
  }
}

// WorkoutList.propTypes = { nome: PropTypes.string };
