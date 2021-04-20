import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './RouteWrapper';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Comment from '../pages/Comment';
import Skills from '../pages/Skills';
import Information from '../pages/Information';

export default () =>  {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={ Home } />
				<Route path="/about" component={ About } />
				<Route path="/contact" component={ Contact } />
				<Route path="/comments" component={ Comment } />
				<Route path="/skills" component={ Skills } />
				<Route path="/informations" component={ Information } />
			</Switch>
		</BrowserRouter>
	);
}