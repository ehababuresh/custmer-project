import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { custmer } from '../interfaces/custmer';

@Injectable({
  providedIn: 'root'
})
export class CustmersService {
  
 
 custmersRef = collection(this.firestore,'custmers');
  sidnavarray: any;


  constructor(private firestore: Firestore) { }

  // add new custmer
addcustmer(custmer: custmer): Promise<any> {
    return addDoc(this.custmersRef, custmer) as Promise<any>;
}
// get all books from db
getcustmers(): Observable<custmer[]> {
  return collectionData(this.custmersRef, { idField: 'id' }) as Observable<custmer[]>;
}


  // update specific custmer
  updatecustmer(newcustmer: custmer): Promise<any> {
    let custmerRef = doc(this.firestore, `custmers/${newcustmer.id}`);
    return setDoc(custmerRef, newcustmer) as Promise<any>;
  }

 

// delete specific custmer
deletecustmer(custmer: custmer): Promise<void> {
  let custmerRef = doc(this.firestore, `custmers/${custmer.id}`);
  return deleteDoc(custmerRef) as Promise<void>;
}
  

//get specific custmer by id
getcustmerById(id: string): Observable<custmer> {
  let custmerRef = doc(this.firestore, `custmers/${id}`);
  return docData(custmerRef, { idField: id }) as Observable<custmer>;
}

}
