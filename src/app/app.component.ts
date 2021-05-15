import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private form_builder: FormBuilder){}
  public contactTypes = [{name:'Admin'},{name:'Manager'},{name:'Employee'},]
  public documentTypes = [{name:'KRA PIN'},{name:'ID Number'},{name:'Passport Number'},]
  public businessTypes = [{name:'NGO'},{name:'LLC'},{name:'Co-Op'},]
  public businessNature = [{name:'Hawking'},{name:'Retail Shop'},{name:'Service Shop'},]
  public documents: any;
  shareholdersInfoForm = this.form_builder.group({
    first_name: ['', [Validators.pattern("[a-zA-Z ]*")]],
    second_name: ['', [Validators.pattern("[a-zA-Z ]*")]],
    last_name: ['', [Validators.pattern("[a-zA-Z ]*")]],
    email: ['',[Validators.email]],
    full_address: [''],
    documents: this.form_builder.array([
      this.addDocumentFormGroup()
    ])
  });

  businessContactInfoForm = this.form_builder.group({
    contact_type:[''],
    contact_name: ['', [Validators.pattern("[a-zA-Z ]*")]],
    contact_position: [''],
    contact_email: ['',[Validators.email]],
    contact_mobile: [''],
    direct_phone: ['']
  });

  businessDetailsForm = this.form_builder.group({
    business_type:[''],
    organization_name: [''],
    permit_number: [''],
    business_nature: [''],
    physical_location: [''],
    postal_address: [''],
    city: [''],
    kra_pin: ['']
  });

  ngOnInit(){
    this.documents = <FormArray>this.shareholdersInfoForm.get('documents');
  }


  onFileSelected(event: any){

  }
  addDocument(){
    (<FormArray>this.shareholdersInfoForm.get('documents')).push(this.addDocumentFormGroup());
  }
  removeDocument(i:any){
    (<FormArray>this.shareholdersInfoForm.get('documents')).removeAt(i);
  }
  addShareholder(){
    
  }
  addDocumentFormGroup(): FormGroup{
    return this.form_builder.group({
      document_type: [''],
      document_number:['']  
    });
  }


}
