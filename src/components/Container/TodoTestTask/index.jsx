import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import Spinner from '../../statless/Spinner';
import Button from '../../statless/Button';

import style from './style.scss';

import {
  itemsFetchData,
  postTodoItems,
  saveInputValue,
} from '../../../redux/actions';

class TodoTestTask extends React.Component {
  static propTypes = {
    itemsFetchData: PropTypes.func.isRequired,
    postTodoItems: PropTypes.func.isRequired,
    saveInputValue: PropTypes.func.isRequired,
    todos: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.object),
      todoValue: PropTypes.object,
    }),
  };

  static defaultProps = {
    todos: {},
  }

  componentDidMount() {
    this.props.itemsFetchData();
  }

  handleClick(data) {
    this.props.postTodoItems(data);
  }

  saveValue(e, data) {
    const { todos, saveInputValue } = this.props;
    const payload = {
      ...todos.todoValue,
      [data]: e.target.value,
    };
    saveInputValue(payload);
  }

  renderTasts = items => (
    <React.Fragment>
      {items.map(item => <TodoItem key={item._id} data={item} />)}
    </React.Fragment>
  )

  render() {
    const { todos } = this.props;
    const activeTasks = todos.items && todos.items.filter(item => item.complate);
    const unsolvedTasks = todos.items && todos.items.filter(item => !item.complate);
    return (
      <div className={style.todoTestTask}>
        <h1 className={style.title}>{moment().format('MMMM Do YYYY')}</h1>
        <div className={style.content}>
          <TodoForm
            title="Create message:"
            onChange={(e, data) => this.saveValue(e, data)}
            onClick={() => this.handleClick(todos.todoValue)}
            titleValue={todos.todoValue.title}
            textValue={todos.todoValue.text}
          />
          {
            todos && todos.items ?
              <div className={style.container}>
                <h2 className={style.title}>Tasks:</h2>
                <h3>Unsolved tasks:</h3>
                { unsolvedTasks.length !== 0 ? this.renderTasts(unsolvedTasks) : 'No such items' }
                <h3>Complate tasks:</h3>
                { activeTasks.length !== 0 ? this.renderTasts(activeTasks) : 'No such  Items'}
              </div>
              : <Spinner />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoList,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    itemsFetchData,
    postTodoItems,
    saveInputValue,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoTestTask);

// <div className={style.formContainer}>
//             <h2 className={style.title}>Create message:</h2>
//             <span>Title:</span>
//             <input className={style.titleValue} type="text" onChange={e => this.saveValue(e, 'title')} />
//             <span>Text:</span>
//             <textarea className={style.textValue} type="text" onChange={e => this.saveValue(e, 'text')} />
//             <div className={style.buttonContainer}>
//               <Button accept="true" onClick={() => this.handleClick(todos.todoValue)}>Accept</Button>
//             </div>
//           </div>
