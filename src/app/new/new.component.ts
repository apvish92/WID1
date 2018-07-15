import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name: string ='';
  pass ='';
  username='';
  password='';
  unamePattern = "^[a-zA-Z0-9]*$";
  

  constructor() { }

  ngOnInit() {
  }
  classSelect(){
    if(this.name=="admin123" && this.pass == "admin@12"){
      return{
      greenColor:true,
      redColor:false
      };
     }
    else{
      return{
      greenColor:false,
      redColor:true
      };
    }
  }
 
  submit(){
    if(this.name=="admin123" && this.pass == "admin@12"){
      
      this.username= this.name;
      this.password=this.pass;
    }
    else{
      this.username= this.name;
      this.password=this.pass;
    }

  }
  Resdt(){
    this.name="";
    this.pass="";
    this.username="";
    this.password="";
  }

  disable(){
    if(this.name == "" && this.pass == "" ){
      return true;
    }
  }

}
