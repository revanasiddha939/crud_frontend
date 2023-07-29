import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  EmployeeProfile: any = ['Software Engineer', 'Artificial Intelligence'];
  employee:any={name:'',email:'',designation:'',phoneNumber:''};
  constructor(private actRoute: ActivatedRoute,private router: Router,private http:HttpClient) { }

  ngOnInit(): void {
  	let id = this.actRoute.snapshot.paramMap.get('id');
  	//this.getEmployee(id);
  }
  getEmployee(id:any)
  {
  	this.http.get('http://localhost:3000/api/read/'+id).subscribe((data:any) => {
	        this.employee=data;
	  	});
  }
  onSubmit()
  {
  //if (window.confirm('Are you sure?')) {
  	//let id = this.actRoute.snapshot.paramMap.get('id');
  	//console.log(this.employee);
  	//this.http.put('http://localhost:3000/api/update/'+id,this.employee).subscribe((data:any) => {
	    //    this.router.navigate(['/employees-list']);
	  	//});
	 //}
  }

}
