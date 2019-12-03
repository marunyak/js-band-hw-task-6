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
    this.onDeleted = this.onDeleted.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onDeleted(id) {
    const { items } = this.state;
    const list = items.filter((item) => item.id !== id);
    this.setState({ items: list });
  }

  render() {
    const todoData = this.state;
    return (
      <div>
        <Header />
        <Main
          todos={todoData}
          onDeleted={(id) => this.onDeleted(id)}
        />
        <Footer />
        <CreateTask />
      </div>
    );
  }
}
export default TodosPage;