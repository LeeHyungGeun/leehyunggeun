import dev from './configureStore.dev';
import prod from './configureStore.prod';
let configureStore: any;
if (process.env.NODE_ENV === 'production') {
    configureStore = prod;
} else {
    configureStore = dev;
}

export default configureStore;