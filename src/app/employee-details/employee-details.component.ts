import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  totalNoOfEmployees: number;

  searchBy: any = {
    department: "",
    nameOrEmail: "",
    sortBy: "name(a-z)"
  }
  departmentsArr: any = [];
  sortByArr: any = ["name(a-z)","name(z-a)", "age","email"];
  employeeList : any;
  employeeList1: any;

  constructor() { 
    let employees = [
      {
        name: "Lalat",
        age: 40,
        email: "one@gmail.com",
        departments: ["Computer", "Physics"],
      },
      {
        name: "mubeen",
        age: 10,
        email: "Two@gmail.com",
        departments: ["Computer"],
      },
      {
        name: "Lucky",
        age: 10,
        email: "Three@gmail.com",
        departments: ["Physics", "Chemistry"],
      },
      {
        name: "Ashu",
        age: 60,
        email: "Four@gmail.com",
        departments: ["Chemistry", "Physics"],
      },
      {
        name: "Bikash",
        age: 70,
        email: "Five@gmail.com",
        departments: ["Computer", "Physics", "Chemistry"],
      },
      {
        name: "Employee Six",
        age: 70,
        email: "Six@gmail.com",
        departments: ["Computer", "Physics"],
      },
    ];
    this.totalNoOfEmployees = employees.length;
    this.employeeList = employees;
    this.employeeList.filter((emp: any) => {
       emp.departments.filter((dept: any) => {
         if(!this.departmentsArr.includes(dept))
             this.departmentsArr.push(dept);
      });
    });
    this.employeeList1 = employees;
    
  }

  ngOnInit(): void {
    this.sortBy(this.searchBy.sortBy);
  }

  sortBy(sortBy: string){
    if(sortBy == 'name(a-z)'){
      this.employeeList1.sort((e1: any,e2: any) => e1.name > e2.name ? 1 : -1);
    }else if (sortBy == 'name(z-a)'){
      this.employeeList1.sort((e1: any,e2: any) => e1.name > e2.name ? -1 : 1);
    }else if(sortBy=='age'){
      this.employeeList1.sort((e1: any,e2: any) => e1.age > e2.age ? 1 : -1);
    }else if(sortBy=='email'){
      this.employeeList1.sort((e1: any,e2: any) => e1.email > e2.email ? 1 : -1);
    }
  }

  resetAndReload(): void {
    this.searchBy = {
      department: "",
      nameOrEmail: "",
      sortBy: "name(a-z)"
  
    }
    this.employeeList1 = this.employeeList;
    this.sortBy('name(a-z)');
  }

  searchData(): void {
    if(this.searchBy.department && this.searchBy.nameOrEmail) {
      this.employeeList1 = this.employeeList.filter((emp: any) =>
      emp.departments.includes(this.searchBy.department)
       && (emp.name ==this.searchBy.nameOrEmail || emp.email == this.searchBy.nameOrEmail));
    }else {
      if(this.searchBy.department) {
        this.employeeList1 = this.employeeList.filter((emp: any) =>
         emp.departments.includes(this.searchBy.department));
      }
      if(this.searchBy.nameOrEmail) {
        this.employeeList1 = this.employeeList.filter((emp: any) =>
         emp.name ==this.searchBy.nameOrEmail || emp.email == this.searchBy.nameOrEmail );
      }
    }
      
  }
}
