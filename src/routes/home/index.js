import { Component } from 'preact';
import style from './style.css';
import NewTask from '../../components/new-task';
import TaskList from '../../components/task-list';

class Home extends Component {
	state = {
    canCloseTaskCreation: true,
		isFinishedSelected: false,
		searchText: '',
		isEdit: false,
		editableIndex: '',
		task: {},
		date: ''
  }

	monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	switchStates = (isFinishedSelected) => {
		this.setState({ isFinishedSelected });
	}

	openNewTask = () => {
		this.setState({
			isEdit: false,
			canCloseTaskCreation: false
		})
	}

	editTask = ({ index, date }) => {
		this.setState({
			date,
			editableIndex: index,
			canCloseTaskCreation: false,
			isEdit: true
		})
	}

	closeNewTask = (notificationMsg) => {
    this.setState({
      canCloseTaskCreation: true
    });

		if (notificationMsg) {
			alert(notificationMsg);
		}
  }

	getFormattedDates = (dates) => {
		return dates.map((date) => {
			let dateObj = new Date(date);
			let monthName = this.monthNames[dateObj.getMonth()];
			return `${dateObj.getDate().toString().length==1?'0':''}${dateObj.getDate()} ${monthName} ${dateObj.getFullYear()}`;
		});
	}

	initiateSearch = ({ currentTarget }) => {
		this.setState({
			searchText: currentTarget.value
		});
	}

	render(props, { isFinishedSelected, canCloseTaskCreation, searchText, isEdit, editableIndex, date }) {
		if (typeof window !== "undefined") {
			let { localStorage } = window;
			let dates = localStorage.getItem('dates');
			if (!dates) {
				return (<div><NewTask canCloseTaskCreation={false} closeNewTask={this.closeNewTask} isDirectCreate={true} /></div>);
			}
			dates = JSON.parse(dates);
			dates = dates || [];
			let formattedDates = this.getFormattedDates(dates);

			return  (
					<div>
						<div class={`columns ${style.home} is-align-items-center`}>
							<div class="dropdown is-hoverable column">
								<b class="is-size-1" style={{color: "#0c1be2"}}>LTM</b>
							</div>
							<input class="column input is-rounded is-medium is-three-quarters" type="text" placeholder="Search your task..." value={searchText} onchange={this.initiateSearch} />
							<div class="column has-text-centered">
								<button class="button is-link" onclick={this.openNewTask}>New Task</button>
							</div>
						</div>
						<div class="tabs is-large is-boxed" style="width: 74%; margin: 0px auto;">
							<ul>
								<li class={isFinishedSelected ? '' : 'is-active'} onclick={() => this.switchStates(false)}><a>Unfinished</a></li>
								<li class={isFinishedSelected ? 'is-active': ''} onclick={() => this.switchStates(true)}><a>Finished</a></li>
							</ul>
						</div>
						<TaskList dates={dates} formattedDates={formattedDates} isFinishedSelected={isFinishedSelected} searchText={searchText} editTask={this.editTask} />
						<NewTask canCloseTaskCreation={canCloseTaskCreation} closeNewTask={this.closeNewTask} isEdit={isEdit} editableIndex={editableIndex} date={date} />
					</div>
			);
		}
	}
	componentDidMount() {
		let { localStorage } = window;
		let dates = localStorage.getItem('dates');
		if (dates) {
			// Removing outDated dates
			let todayDate = new Date();
			dates = JSON.parse(dates) || [];
	
			let resDates = dates.filter((date) => {
				let dateObj = new Date(date);
				const diffTime = Math.abs(dateObj - todayDate);
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
				return diffDays < 30;
			});
			localStorage.setItem('dates', JSON.stringify(resDates));

			let outDatedDates = dates.filter((date) => {
				let dateObj = new Date(date);
				const diffTime = Math.abs(dateObj - todayDate);
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
				return diffDays > 30;
			});
			outDatedDates.forEach((date) => {
				localStorage.removeItem(date);
			});
		}
	}
}

export default Home;
