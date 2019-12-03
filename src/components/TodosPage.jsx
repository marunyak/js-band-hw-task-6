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
      // eslint-disable-next-line react/no-unused-state
      filter: {
        search: '',
        open: 'all',
        priority: 'all'
      }
    };
    this.onDeleted = this.onDeleted.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onEdit = this.onEdit.bind(this);
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

  onDone(id) {
    const { items } = this.state;
    const list = items.filter((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({ items: list });
  }

  onSave() {
    const inputTitle = document.querySelector('.create-task-form input[name="title"]');
    const inputDesc = document.querySelector('.create-task-form textarea[name="description"]');
    const inputPrior = document.querySelector('.create-task-form select[name="priority"]');
    const createTask = document.querySelector('.create-task-form');
    const titleTask = inputTitle.value;
    const descriptionTask = inputDesc.value;
    const priorityTask = inputPrior.value;
    inputTitle.value = null;
    inputDesc.value = null;
    inputPrior.value = 'high';

    if (createTask.getAttribute('task-id') && createTask.getAttribute('task-done')) {
      const isdone = createTask.getAttribute('task-done') !== 'false';
      const id = createTask.getAttribute('task-id');
      const { items } = this.state;
      const list = items.map((item) => {
        if (item.id === id) {
          item = {
            id, title: titleTask, description: descriptionTask, priority: priorityTask, done: isdone
          };
        }
        return item;
      });
      this.setState({ items: list });
      createTask.removeAttribute('task-id');
      createTask.removeAttribute('task-done');
    } else {
      const element = {
        id: Date.now().toString(),
        title: titleTask,
        description: descriptionTask,
        priority: priorityTask,
        done: false
      };
      this.setState((state) => state.items.push(element));
    }
  }

  onEdit(e) {
    const { items } = this.state;
    const elem = e.target;
    const editTaskParent = elem.parentElement
      .parentElement
      .parentElement
      .parentElement;
    const id = editTaskParent.getAttribute('data');
    const tempItem = items.find((item) => item.id === id);
    const inputTitle = document.querySelector('.create-task-form input[name="title"]');
    const inputDesc = document.querySelector('.create-task-form textarea[name="description"]');
    const inputPrior = document.querySelector('.create-task-form select[name="priority"]');
    const createTask = document.querySelector('.create-task-form');
    const isdone = editTaskParent.classList.contains('task-done');
    createTask.setAttribute('task-id', id);
    createTask.setAttribute('task-done', isdone);
    inputTitle.value = tempItem.title;
    inputDesc.value = tempItem.description;
    inputPrior.value = tempItem.priority;
  }

  render() {
    const todoData = this.state;
    return (
      <div>
        <Header />
        <Main
          todos={todoData}
          onDeleted={(id) => this.onDeleted(id)}
          onDone={(id) => this.onDone(id)}
          onEdit={(e) => this.onEdit(e)}
        />
        <Footer />
        <CreateTask onSave={() => this.onSave()} />
      </div>
    );
  }
}
export default TodosPage;
