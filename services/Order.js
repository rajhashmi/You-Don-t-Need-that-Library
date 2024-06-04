import { getProductById } from "./Mennu.js";

export async function addToCart(id){
    const product = await getProductById(id);
    const result = app.store.cart.filter(e => {
        e.product.id == id
    });
    if(result.length == 1){
        // already in cart update it

        app.store.cart =   app.store.cart .map(
            p=>  p.product.id== id
            ?{...p, quantity: p.quantity+1}
            :p
        );
    }else{
        app.store.cart = [...app.store.cart,{product, quantity: 1}];
    }
};

export function removefromCart(id){
    app.store.cart =  app.store.cart.filter( el => el.product.id!=id);
}