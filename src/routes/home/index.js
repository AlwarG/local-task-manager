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
		date: '',
		isAsc: true
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

	changeSortOrder = (isAsc) => {
		console.log('kdkd', isAsc)
		this.setState({ isAsc });
	}

	render(props, { isFinishedSelected, canCloseTaskCreation, searchText, isEdit, editableIndex, date, isAsc }) {
		if (typeof window !== "undefined") {
			let { localStorage } = window;
			let dates = localStorage.getItem('dates');
			dates = JSON.parse(dates);
			dates = dates || [];
			if	(isAsc) {
				dates = dates.sort((a, b) => new Date(a) - new Date(b));
			} else {
				dates = dates.sort((a, b) => new Date(b) - new Date(a));
			}
			
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
							{isAsc ?
							<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6" class={`cursor-pointer ${style.sortIcon}`} onclick={() => this.changeSortOrder(false)}>
								<path d="M11 9H17"/>
								<path d="M11 5H19"/>
								<path d="M11 13H15"/>
								<path d="M10 17L7 20L4 17"/>
								<path d="M7 5V19"/>
							</svg>
							:
							<svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6" class={`cursor-pointer ${style.sortIcon}`} onclick={() => this.changeSortOrder(true)}>
								<path d="M11 16H17"/>
								<path d="M11 20H19"/>
								<path d="M11 12H15"/>
								<path d="M4 8L7 5L10 8"/>
								<path d="M7 20L7 6"/>
							</svg>
							}
						</div>
						<TaskList dates={dates} formattedDates={formattedDates} isFinishedSelected={isFinishedSelected} searchText={searchText} editTask={this.editTask} />
						{canCloseTaskCreation ? "" : <NewTask closeNewTask={this.closeNewTask} isEdit={isEdit} editableIndex={editableIndex} date={date} />}
					</div>
			);
		}
	}
	// componentDidMount() {
	// 	let { localStorage } = window;
	// 	let dates = localStorage.getItem('dates');
	// 	if (dates) {
	// 		// Removing outDated dates
	// 		let todayDate = new Date();
	// 		dates = JSON.parse(dates) || [];
	
	// 		let resDates = dates.filter((date) => {
	// 			let dateObj = new Date(date);
	// 			const diffTime = Math.abs(dateObj - todayDate);
	// 			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	// 			return diffDays < 30;
	// 		});
	// 		localStorage.setItem('dates', JSON.stringify(resDates));

	// 		let outDatedDates = dates.filter((date) => {
	// 			let dateObj = new Date(date);
	// 			const diffTime = Math.abs(dateObj - todayDate);
	// 			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	// 			return diffDays > 30;
	// 		});
	// 		outDatedDates.forEach((date) => {
	// 			localStorage.removeItem(date);
	// 		});
	// 	}
	// }
}

export default Home;
