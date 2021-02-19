import style from './style.css';
import { Component } from 'preact';

class newTask extends Component {
  state = {
    error: '',
    task: '',
    description: '',
    date: `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().length==1?'0':''}${new Date().getMonth()+1}-${new Date().getDate().toString().length==1?'0':''}${new Date().getDate()}`
  }

  changeValue = (value, target) => {
    let obj = {}
    obj[target] = value;
    this.setState(obj);
  }

  createNewTask = ({ resultObj, closeNewTask, msg }) => {
    let { state } = this;
    let { localStorage } = window;
    let oldData = localStorage.getItem(state.date);

    if (oldData) {
      oldData = JSON.parse(oldData);
      let taskNames = oldData.map(({ task }) => task);

      if (taskNames.includes(state.task)) {
        this.setState({
          error: 'Task Name already exists'
        });
        return;
      }
      oldData.push(resultObj);
      localStorage.setItem(state.date, JSON.stringify(oldData));
      this.addDates();
      closeNewTask(msg || 'Your Task added successfully');
      return;
    }
    localStorage.setItem(state.date, JSON.stringify([resultObj]));
    this.addDates();
    closeNewTask(msg || 'Your Task added successfully');
  }

  createTask = ({ closeNewTask, date, editableIndex, isEdit }) => {
    let { state } = this;
    this.setState({ error: '' });

    if (!state.task) {
      this.setState({
        error: 'Kindly fill the task'
      });
      return;
    }
    if (!state.date || !new Date(state.date).getTime() === NaN) {
      this.setState({
        error: 'Kindly select the date'
      });
      return;
    }

    let resultObj = {
      task: state.task
    }

    if (state.description) {
      resultObj.description = state.description;
    }
    if (isEdit) {
      let { localStorage } = window;
      let tasks = localStorage.getItem(date);
      tasks = JSON.parse(tasks) || [];
      resultObj.isFinished = !!tasks[editableIndex].isFinished;

      if (date === state.date) {
        tasks[editableIndex] = resultObj;
        localStorage.setItem(state.date, JSON.stringify(tasks));
        closeNewTask('Your Task Edited successfully');
        return;
      }
      delete tasks[editableIndex];
      tasks = tasks.filter((task) => task);

      if (tasks.length) {
        localStorage.setItem(date, JSON.stringify(tasks));
      } else {
        localStorage.removeItem(date);
      }
      this.createNewTask({ resultObj, closeNewTask, msg: 'Your Task Edited successfully' });
      return;
    }
    this.createNewTask({ resultObj, closeNewTask });
  }

  addDates = () => {
    let { localStorage } = window;
    let dates = localStorage.getItem('dates');
    let {date} = this.state;

    if (dates) {
      dates = JSON.parse(dates);
      if (!dates.includes(date)) {
        dates.push(date);
        localStorage.setItem('dates', JSON.stringify(dates));
      }
      return;
    }
    localStorage.setItem('dates', JSON.stringify([date]));
  }

  errorBlock = () => {
    if (!this.state.error) {
      return;
    }
    return (
      <article class="message is-danger">
        <div class="message-body p-3">
          {this.state.error}
        </div>
      </article>
    )
  }

  componentDidUpdate({ date: prevDate }) {
    let { date, editableIndex, isEdit }  = this.props;
    if (isEdit && prevDate !== date && date) {
      let tasks = localStorage.getItem(date);
      tasks = (JSON.parse(tasks) || []);
      let { task, description } = tasks[editableIndex] || {};
      if  (task) {
        this.setState({
          task,
          description,
          date
        });
      }
    }
  }

  render(props, state) {
    let { canCloseTaskCreation, closeNewTask, isDirectCreate, isEdit } = props;
    return (
      <div class={`modal ${canCloseTaskCreation ? "": "is-active"}`}>
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{isEdit ? 'Edit' : 'New'} Task</p>
            {isDirectCreate ? '' : <button class="delete" aria-label="close" onclick={() => { closeNewTask() }}></button>}
          </header>
          <section class="modal-card-body">
            {this.errorBlock()}
            <div class="field">
              <label class="label">Task</label>
              <div class="control">
                <input class="input" type="text" placeholder="Type your Task" value={state.task} onchange={({ target }) => this.changeValue(target.value, 'task')} />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea class="textarea" placeholder="Type your description" value={state.description} onchange={({ target }) => this.changeValue(target.value, 'description')} />
              </div>
            </div>
            <div class="field">
              <label class="label">Date</label>
              <div class="control">
                <input type="date" name="dateofbirth" id="dateofbirth" value={state.date} onchange={({ target }) => this.changeValue(target.value, 'date')} />
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-link" onclick={() => { this.createTask(props) }}>{isEdit ? 'Edit' : 'Create'}</button>
            {isDirectCreate ? '': <button class="button is-link is-light is-outlined" onclick={() => { closeNewTask() }}>Cancel</button>}
          </footer>
        </div>
      </div>
    );
  }
};

export default newTask;
