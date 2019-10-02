import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
departmentdata = ['Packaging', 'Managing','Developer'];
  constructor(public employeeService: EmployeeService,
              public firestore: AngularFirestore) { }

  ngOnInit() {
    this.resetFrom();
  }
resetFrom(form?: NgForm) {
  if(form != null){
    form.resetForm();
  }

  this.employeeService.formData = {
 id: null,
  fullName: '',
  email: '',
  mobile: '',
  gender: '',
  department: '',
  date: '',

};
}
onsubmit(form: NgForm){

  const data =Object.assign({}, form.value) ;
  delete data.id;
  if( form.value.id == null){
    this.firestore.collection('sample').add(data);

  }
  else {
    this.firestore.doc('sample/' +form.value.id).update(data);
  }

  this.resetFrom();

}
}
