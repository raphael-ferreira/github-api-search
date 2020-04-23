import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainProvider } from './store/context';

import { Header } from './components';
import { Home, Users, UserDetail } from './pages';

function App() {
	return (
		<div className="App">
			<Header />
			<MainProvider>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/users" component={Users} />
						<Route path="/user/:login" component={UserDetail} />

						<Route path="*" component={Home} />
					</Switch>
				</Router>
			</MainProvider>
		</div>
	);
}

export default App;
