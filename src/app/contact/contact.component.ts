import { Component, OnInit } from '@angular/core';
import{ FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  profileform=this.fb.group({
    fname:[''],
    lname:[''],
    email:[''],
    address:this.fb.group({
      street:[''],
      city:[''],
      state:['']
    })
  })

  ngOnInit(): void {
  }

}
