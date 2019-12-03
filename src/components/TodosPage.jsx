import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import CreateTask from './CreateTask';

class TodosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filter: {
        search: '',
        open: 'all',
        priority: 'all'
      }
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const todoData = this.state;
    return (
      <div>
        <Header />
        <Main
          todos={todoData}

        />
        <Footer />
        <CreateTask />
      </div>
    );
  }
}
export default TodosPage;
