import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'a4a3c529bbe744f89f9375b3e8651aeb', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
