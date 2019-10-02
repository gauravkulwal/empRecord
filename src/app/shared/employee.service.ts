import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
formData: Employee;
  constructor(public firestore: AngularFirestore) { }
  getList(){
   return this.firestore.collection('sample').snapshotChanges();
  }
}
