import { Component, Fragment } from 'preact';
import style from './style.css';

class TaskList extends Component {
  getDBTasks(date) {
    let { localStorage } = window;
    let tasks = localStorage.getItem(date);
    return (JSON.parse(tasks) || []);
  }

  getTaskArr = (date, isFinishedSelected, searchText) => {
    let tasks = this.getDBTasks(date);
    let resTasks = tasks.map((task, index) => {
      let myTask = JSON.parse(JSON.stringify(task));
      myTask.originalIndex = index;
      return myTask;
    });
  
    if  (isFinishedSelected) {
      resTasks = resTasks.filter(({ isFinished }) => isFinished);
    } else {
      resTasks = resTasks.filter(({ isFinished }) => !isFinished);
    }

    if  (searchText) {
      return resTasks.filter(({ task, description }) => task.includes(searchText) || description.includes(searchText));
    }
    return resTasks;
  }

  dateSection = (date, formattedDate, isFinishedSelected, searchText) => {
      let tasks = this.getTaskArr(date, isFinishedSelected, searchText);
      if (tasks.length) {
        return (<h1 class={`is-size-5 ${style.dateHeading} mb-4`}>{formattedDate}</h1>);
      }
      return '';
  }

  markFinished = (e, { date, index, isFinishedSelected, searchText }) => {
    e.stopPropagation();
    let tasks = this.getTaskArr(date, isFinishedSelected, searchText);
    let { originalIndex } = tasks[index];
    let DBTasks = this.getDBTasks(date);
    let { localStorage } = window;
    DBTasks[originalIndex].isFinished = !isFinishedSelected;
    localStorage.setItem(date, JSON.stringify(DBTasks));
    let msg = isFinishedSelected ? 'Your Task is marked as Unfinished' : 'Your Task is marked as finished';
    alert(msg);
    window.location.reload();
  }

  deleteTask = (e, { date, index, isFinishedSelected }) => {
    e.stopPropagation();
    let tasks = this.getTaskArr(date, isFinishedSelected);
    let { originalIndex } = tasks[index];
    let DBTasks = this.getDBTasks(date);
    delete DBTasks[originalIndex];
    DBTasks = DBTasks.filter((task) => task);
    let { localStorage } = window;
    if (DBTasks.length) {
      localStorage.setItem(date, JSON.stringify(DBTasks));
    } else {
      localStorage.removeItem(date);
    }
    alert('Your task is deleted Successfully');
    window.location.reload();
  }

  editTask = (e, { date, index, isFinishedSelected, editTask }) => {
    e.stopPropagation();
    let tasks = this.getTaskArr(date, isFinishedSelected);
    let { originalIndex } = tasks[index];
    editTask({ index: originalIndex, date });
  }

  getThumbsIcon = ({ index, date, isFinishedSelected, searchText }) => {
    if (isFinishedSelected) {
      return (
        <div class={style.tooltip}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" class={style.deleteSvg} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onclick={(e) => this.markFinished(e, { index, date, isFinishedSelected, searchText })}>
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
          </svg>
          <span class={style.tooltiptext}>Mark as Unfinished</span>
        </div>
      )
    }
    return (
      <div class={style.tooltip}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" class={`${style.finishedSvg}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" onclick={(e) => this.markFinished(e, { index, date, isFinishedSelected, searchText })}>
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
        </svg>
        <span class={style.tooltiptext}>Mark as finished</span>
      </div>
    )
  }

  getTasks = (date, isFinishedSelected, searchText, editTask) => {
    let tasks = this.getTaskArr(date, isFinishedSelected, searchText);

    return tasks.map(({ task, description}, index) => {
      return(
        <Fragment>
          <button class={`${style.accordion} notification is-link is-light columns is-align-items-center m-0 is-size-4`} onclick={this.toggleSlide}>
            <div class={`column is-four-fifths p-0 ${style.overflowAnyware}`}>{task}</div>
            <div class="column has-text-right p-0">
              {this.getThumbsIcon({ index, date, isFinishedSelected, searchText })}
              <div class={style.tooltip}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2" onclick={(e) => this.editTask(e, { index, date, isFinishedSelected, searchText, editTask })}>
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                <span class={style.tooltiptext}>Edit</span>
              </div>
              <div class={style.tooltip}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={`ml-2 ${style.deleteSvg}`} onclick={(e) => this.deleteTask(e, { index, date, isFinishedSelected, searchText })}>
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  <line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
                </svg>
                <span class={style.tooltiptext}>Delete</span>
              </div>
            </div>
          </button>
          <div class={`${style.panel}`}>{description}</div>
        </Fragment>
      )
    })
  }

  toggleSlide({ currentTarget }) {
    currentTarget.classList.toggle(style.active);
    let { nextElementSibling: panel } = currentTarget;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  }

  render({ dates, formattedDates, isFinishedSelected, searchText, editTask }) {
    return (
      <div style={{width: '74%', margin: '0 auto'}}>
        {formattedDates.map((date, index) => {
          return (
            <div>
              {this.dateSection(dates[index], date, isFinishedSelected, searchText)}
              {this.getTasks(dates[index], isFinishedSelected, searchText, editTask)}
            </div>
          );
        })}
      </div>
    )
  }
}

export default TaskList;