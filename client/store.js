import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
//import the root router
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';
import { compose } from 'redux';

const defaultState = {
    //same as posts:posts
    posts,
    comments
}
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

//To hot/automatic reload reducers
if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}
export default store;