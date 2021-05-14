import { Component } from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private form_builder: FormBuilder){}
  public contactTypes = [{name:'Admin'},{name:'Manager'},{name:'Employee'},]
  public documentTypes = [{name:'KRA PIN'},{name:'ID Number'},{name:'Passport Number'},]
  userForm = this.form_builder.group({
    first_name: ['', [Validators.pattern("[a-zA-Z ]*")]],
    second_name: ['', [Validators.pattern("[a-zA-Z ]*")]],
    last_name: ['', [Validators.pattern("[a-zA-Z ]*")]],
    email: ['',[Validators.email]],
    full_address: [''],
    document_type: [''],
    document_number:['']
  });

  businessContactInfoForm = this.form_builder.group({
    contact_type:[''],
    contact_name: ['', [Validators.pattern("[a-zA-Z ]*")]],
    contact_position: [''],
    contact_email: ['',[Validators.email]],
    contact_mobile: [''],
    direct_phone: ['']
  });


  onFileSelected(event: any){

  }
  addDocument(){

  }
  addShareholder(){
    
  }

}
