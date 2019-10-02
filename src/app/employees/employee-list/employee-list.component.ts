import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
datalist: Employee[];
  constructor(public service : EmployeeService,
    public firestore : AngularFirestore) { }

  ngOnInit() {
    this.service.getList().subscribe(actions => {

this.datalist = actions.map(a => {
  const data = a.payload.doc.data() as Employee;
  const id = a.payload.doc.id;
return { id , ...data}
}
)
    })
  }
  onDelete(id: string){
    if(confirm("Are you sure?")){
      this.firestore.doc('sample/' + id).delete();
    }

  }
  onEdit(emp : Employee){
    this.service.formData =Object.assign({},emp);
  }

}
