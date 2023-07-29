import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   Employee:any = [];
   baseUri: string = 'https://crud-hjce.onrender.com/api';
  constructor(private http:HttpClient) {
   }

  ngOnInit(): void {
  		this.readEmployee();
	}
	readEmployee()
  	{
	    this.http.get(this.baseUri).subscribe((data:any) => {
	        this.Employee = data;
	  	});
  	}
  	removeEmployee(id:any)
  	{
  	 if(window.confirm('Are you sure?')) {
  		this.http.delete('https://crud-hjce.onrender.com/api/delete/'+id).subscribe((data:any) => {
	        this.readEmployee();
	  	});
	   }
  	}
}
