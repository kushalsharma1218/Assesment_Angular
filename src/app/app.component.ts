import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndAssesment';
  registerForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;

    form = new FormGroup({
      firstName : new FormControl('' , Validators.required),
      lastName : new FormControl('', Validators.required),
      email : new FormControl('' , Validators.required),
      userName : new FormControl('' , Validators.required),
      password : new FormControl('' , Validators.required),
      confirmPassword : new FormControl('' , Validators.required),
      goverment: new FormControl('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  onSubmit(){
    if(this.registerForm.valid){
      alert('Login Successfull')
    } else {
      alert('User form is not valid!!')
    }
  }
  get FirstName(){
    return this.form.get('firstName');
  }
  get LastName(){
    return this.form.get('lastName');
  }
  get Email(){
      return this.form.get('email');
  }
  get UserName(){
    return this.form.get('userName')
  }
  get Password(){
      return this.form.get('password');
  }
  get ConfirmPassword(){
      return this.form.get('confirmPassword');
  }
  Register()
  {
    alert('Registered ' + this.FirstName.value +'  '+ this.LastName.value);
  }

}

