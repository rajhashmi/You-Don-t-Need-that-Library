import API from './API.js'

const Store = {
    menu: null,
    cart: []
};

const porxyStore = new Proxy(Store, {
    set(target,property,value){
        target[property] = value;

        if(property=="menu"){
            window.dispatchEvent(new Event("appmenuchange"));
        };
        if(property=="cart"){
            window.dispatchEvent(new Event("appcartchange"));
        }
        return true;
    }
})

export default porxyStore;