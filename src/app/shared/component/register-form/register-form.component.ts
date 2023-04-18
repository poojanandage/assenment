import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm! : FormGroup;
  flag : boolean = true;
  constructor(private fb : FormBuilder,
              private dataService : DataserviceService,
              private router : Router,
              private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.allControls()
    this.onEdit()
  }

  allControls(){
    this.registerForm= this.fb.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      phone : ['',Validators.required],
      city : ['',Validators.required],
     
    })
  }

  onsubmitted(){
    console.log(this.registerForm.value);
    this.dataService.postdata(this.registerForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['list'])
      
    })
    
  }
  onEdit(){
    this.route.params.subscribe((param : Params)=>{
      console.log(param);
      let setId = param['id']
      sessionStorage.setItem('id',setId)
      this.dataService.getsingledata(setId).subscribe((res)=>{
        console.log(res);
       this.registerForm.setValue({
        name : res.name,
        email : res.email,
        phone : res.phone,
        city : res.city
       })
       this.flag = false
        
      })
      
    })
  }

  onUpdateBtn(){
    let getId = +(sessionStorage.getItem('id')!)
    this.dataService.updatedata(this.registerForm.value,getId).subscribe(res=>{
      console.log(res);
      this.router.navigate(['list'])
    })
  }

}
