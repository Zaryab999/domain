import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addChild } from '@igniteui/material-icons-extended';
import {ConnectService} from 'src/app/services/connect.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ConnectService]
})

export class AppComponent implements OnInit {
    registerForm!: FormGroup;
    submitted = false;
    users:any
    constructor(private formBuilder: FormBuilder,private connservice:ConnectService) { }
    domain:string=""
    email:string=""
    smtpaddress:string=""
    password:string=""

    req_of_update=false;
    

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            url: ['', Validators.required],
            smtp: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(3)]]
        });
        this.get();
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    check(){
      this.req_of_update=true;
      this.registerForm = this.formBuilder.group({
        url: [this.Domain, Validators.required],
        smtp: [this.SmtpAddress, Validators.required],
        email: [this.Email, [Validators.required, Validators.email]],
        password: ['', [Validators.nullValidator]]
    });
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }
       
       if(this.req_of_update==true)
          this.update()
       else
          this.add()
       
    }
    Password:any
    Email:any
    Domain:any
    Id:any
    SmtpAddress:any
    changepass(pass:any){
        this.Password= pass.target.value;
    }
    changeemail(email:any){
      this.Email= email.target.value;
    }
    changedomain(domain:any){
      this.Domain= domain.target.value;
    }
    changeid(id:any){
      this.Id= id.target.value;
    }
    changesmtp(smptp:any){
      this.SmtpAddress= smptp.target.value;
    }
    // convenience getter for easy access to form fields
   

    
    add(){
       
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
        this.connservice.add(this.Domain,this.SmtpAddress,this.Email,this.Password).subscribe(async (res: any) => {
          if(res==false)
          alert("Failed To Add")
          else
          {alert(` ${this.Domain} Added`)
          window.location.reload();}
          },(err: any)=>{
            alert('Failed To Add')
            console.log('err',err)
          });
          

    }
    update(){
        this.connservice.update(this.Domain,this.SmtpAddress,this.Email,this.Password,this.Id).subscribe(async (res: any) => {
          
          if(res==false)
            alert("Failed To Update")
            else
            {alert(`   ${this.Domain} Updated`)
            window.location.reload();}
          },(err: any)=>{
            alert('Failed To Update')
            console.log('err',err)
          });
          
          
    }
    delete(Id:any,url:any){
      this.connservice.delete(Id).subscribe(async(res:any)=>{
        if(res==false)
            alert("Failed To Delete")
            else
            {alert(`Domain name : ${url} Deleted`)
            window.location.reload();}
      }
      ,(err: any)=>{
        alert('Failed To Delete')
        console.log('err',err)}
      )
      
      //console.log(this.users[0].domain);
      
      
    
    }
    get(){
      this.connservice.getdomains().subscribe(async (res:any)=>{
      this.users=res;
      //console.log(this.users[0].domain);
      
      
    }
      )
    }
    filldata(domain:any,email:any,smtpaddress:any,password:any,id:any){
      
      this.domain=domain
      this.email=email
      this.smtpaddress=smtpaddress
      this.password=password
      this.Domain=domain
      this.Email=email
      this.SmtpAddress=smtpaddress
      this.Password=password
      this.Id=id
      // this.password=password
      // console.log(domain)
      // console.log(email)
      // console.log(SmtpAddress)
      // console.log(password)
    }
}

