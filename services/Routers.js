const Router = {
    init: () =>{
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', event => {
                event.preventDefault();
                 const url = event.target.getAttribute('href');
                 console.log(url)
                 Router.go(url);
            })
        });

        window.addEventListener('popstate', event => {
            Router.go(event.state.route, false);
        })
        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        if (addToHistory) {
            history.pushState({ route }, '', route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("menus-page");
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                break;
            default:
                if (route.startsWith("/product-")) {                
                    pageElement = document.createElement("details-page");
                    pageElement.dataset.productId = route.substring(route.lastIndexOf("-")+1);
                }
                break;   
        }
        if (pageElement) {
            document.querySelector("main").innerHTML = "";
            document.querySelector("main").appendChild(pageElement);
        }
    
        window.scrollX = 0;
    }
    
};

export default Router;