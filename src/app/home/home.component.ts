import { Component, OnInit } from '@angular/core';
import { faBath,faSink,faToilet,faHome,faTools,faShower,faShare} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faBath=faBath
  faHandsWash=faSink
  faToilet=faToilet
  faHome=faHome
  faTools=faTools
  faWater=faShower
  faShare=faShare
 

  constructor() { }
  imagesUrl=[]

  ngOnInit(): void {
    this.imagesUrl=["assets/images/electrician.jpg","assets/images/equipment.jpg","assets/images/plumber.jpg"]
  }

}
