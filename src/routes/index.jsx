import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouteWrapper';

import Home from '../pages/Home';
import About from '../pages/About';

export default () =>  {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/about" component={ About } />
			</Switch>
		</BrowserRouter>
	);
}