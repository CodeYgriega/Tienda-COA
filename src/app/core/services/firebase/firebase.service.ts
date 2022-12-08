import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';
import { Product } from '../../models/product';
import { ProductCarts } from '../../models/product-carts';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  //PRODUCTS
  addProduct(product: Product){
    const productRef = collection(this.firestore, 'products');
    return addDoc(productRef, product);
  }

  getAllProducts(): Observable<Product[]>{
    const productRef = collection(this.firestore, 'products');
    return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
  }

  updateProduct(id: string, product: any){
    const productDocRef = doc(this.firestore, `products/${id}`);
    return updateDoc(productDocRef, {...product});
  }

  deleteProduct(id: string){
    const productDocRef = doc(this.firestore, `products/${id}`);
    return deleteDoc(productDocRef);
  }

  //CARTS
  addCart(cart: { status_completed: boolean }){
    const cartRef = collection(this.firestore, 'carts');
    return addDoc(cartRef, cart);
  }

  getAllCarts(): Observable<Cart[]>{
    const cartRef = collection(this.firestore, 'carts');
    return collectionData(cartRef, { idField: 'id' }) as Observable<Cart[]>;
  }

  updateCart(id: string, cart: any){
    const cartDocRef = doc(this.firestore, `carts/${id}`);
    return updateDoc(cartDocRef, {...cart}); 
  }

  //PRODUCT_CARTS
  addProductCarts(productCart: ProductCarts){
    const productCartRef = collection(this.firestore, 'product_carts');
    return addDoc(productCartRef, productCart);
  }

  getAllProductCarts(): Observable<ProductCarts[]>{
    const productCartRef = collection(this.firestore, 'product_carts');
    return collectionData(productCartRef, { idField: 'id' }) as Observable<ProductCarts[]>;
  }

  updateProductCarts(id: string, productCarts: any){
    const productCartsDocRef = doc(this.firestore, `product_carts/${id}`);
    return updateDoc(productCartsDocRef, {...productCarts}); 
  }
}
