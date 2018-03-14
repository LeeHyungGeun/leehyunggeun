import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import {
	Provider
} from 'react-redux';
import configureStore from './store/configureStore';

class App extends React.Component {
	render() {
		const store = configureStore();
		return (
			<Provider store={store}>
				<BrowserRouter children={routes} />
			</Provider>
		);
	}
}

export default App;