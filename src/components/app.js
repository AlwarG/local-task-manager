import { h } from 'preact';
import { Router } from 'preact-router';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import { createHashHistory } from 'history';

const App = () => (
	<div id="app">
		<Router history={createHashHistory()}>
			<Home path='/' />
		</Router>
	</div>
)

export default App;
