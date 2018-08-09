import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Delete from '../../../../images/svg/delete';
import Pencil from '../../../../images/svg/pencil';
import {
  deleteTodoItem,
  makeAnItemActive,
  saveInputValue,
  clearInputValue,
} from '../../../../redux/actions';
import Checkbox from '../../../statless/Checkbox';
import Modal from '../../../Modal';
import TodoForm from '../TodoForm';

import style from './style.scss';

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  deleteTask(e, id) {
    e.stopPropagation();
    const { deleteTodoItem } = this.props;
    deleteTodoItem(id);
  }

  checkActive(e, data) {
    e.stopPropagation();
    const { makeAnItemActive } = this.props;
    const payload = {
      ...data,
      active: e.target.checked,
    };
    makeAnItemActive(payload);
  }

  updateItem(e, data) {
    e.stopPropagation();
    const { saveInputValue, todos } = this.props;
    this.setState({
      modal: true,
    });
    const payload = {
      ...todos.todoList.todoValue,
      title: data.title,
      text: data.text,
    };
    saveInputValue(payload);
  }

  checkComplete(data) {
    const { makeAnItemActive } = this.props;
    let payload = { ...data };
    if (data.complate) {
      payload = {
        ...data,
        complate: false,
      };
    } else {
      payload = {
        ...data,
        complate: true,
      };
    }
    makeAnItemActive(payload);
  }

  closeModal(e) {
    e.stopPropagation();
    const { saveInputValue, todos } = this.props;
    const payload = {
      ...todos.todoList.todoValue,
      title: '',
      text: '',
    };
    saveInputValue(payload);
    this.setState({
      modal: false,
    });
  }

  saveInputChange(e, value) {
    const { saveInputValue, todos } = this.props;
    const payload = {
      ...todos.todoList.todoValue,
      [value]: e.target.value,
    };

    saveInputValue(payload);
  }

  acceptInputChanges(id, data) {
    const { makeAnItemActive, clearInputValue } = this.props;
    const payload = {
      _id: id,
      ...data,
    };
    this.setState({
      modal: false,
    });

    clearInputValue();
    makeAnItemActive(payload);
  }

  render() {
    const { data, todos } = this.props;
    return (
      <div
        className={data.complate ? style.todoItemComplate : style.todoItem}
        onClick={() => this.checkComplete(data)}
      >
        {
          this.state.modal &&
          <Modal onClick={e => this.closeModal(e)}>
            <div className={style.modalContent}>
              <TodoForm
                title="Update Task"
                onChange={(e, value) => this.saveInputChange(e, value)}
                onClick={() => this.acceptInputChanges(data._id, todos.todoList.todoValue)}
                titleValue={todos.todoList.todoValue.title}
                textValue={todos.todoList.todoValue.text}
              />
            </div>
          </Modal>
        }
        <div className={style.content}>
          <div className={style.header}>
            <h3>
              {data.title}
            </h3>
            <span>{data.createdAt}</span>
          </div>
          <p>{data.text}</p>
        </div>
        <div className={style.foot}>
          {
            !data.complate ?
              <Checkbox
                dataId={data._id}
                onChange={e => this.checkActive(e, data)}
                text={data.active ? 'Active' : 'Click here to make the task active'}
                checked={data.active}
              /> : <div />
          }
          <div>
            <button onClick={e => this.updateItem(e, data)} className={style.updateButton}>
              <Pencil />
            </button>
            <button
              className={style.deleteButton}
              onClick={e => this.deleteTask(e, data._id)}
            >
              <Delete />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    deleteTodoItem,
    makeAnItemActive,
    saveInputValue,
    clearInputValue,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
