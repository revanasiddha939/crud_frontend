import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
//import { ObjectId } from 'mongoose';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  EmployeeProfile: any = ['Software Engineer', 'Artificial Intelligence'];
  employee:any={name:'',email:'',designation:'',phoneNumber:''};
  id: any;
  constructor(private actRoute: ActivatedRoute,private router:Router,private http:HttpClient) { }
  baseUri: string = 'https://crud-hjce.onrender.com/api/create';
  isEditing = false;
  ngOnInit(): void {
  	this.id = this.actRoute.snapshot.paramMap.get('id');
  	if (this.id) {
		this.getEmployee();
	}
  }

  getEmployee()
  {
  	this.http.get('https://crud-hjce.onrender.com/api/read/'+ this.id).subscribe((data:any) => {
	        this.employee=data;
	        this.isEditing =true;
	  	});
  }

  onSubmit() 
  {
  	//let id = this.actRoute.snapshot.paramMap.get('id');
  	if(this.id)
  	{
  		if (window.confirm('Are you sure?')) {
	  	console.log(this.employee);
	  	this.http.put('https://crud-hjce.onrender.com/update/'+this.id,this.employee).subscribe((data:any) => {
            alert(data.message)
		        this.router.navigate(['/employees-list']);
		  	});
		 }
  	}
  	else
  	{
		this.http.post(this.baseUri,this.employee).subscribe((data:any) =>  {
		  alert(data.message);
		  this.router.navigate(['/employees-list']);
		}, (error:any) => {
		  alert(error.error);
		});
  	}
  }

}
