import React from 'react';
import './App.css';
import { WorkoutList, Header } from './components';
import { workouts } from './config/data';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps {
  workouts: any;
}

interface AppState {
  value: any;
}

class App extends React.Component<any, any> {
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <Header />
        </div>
        <div className='article'>
          <WorkoutList workouts={workouts} />
        </div>
      </div>
    );
  }
}

export default App;
