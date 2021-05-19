import { Component, OnInit } from '@angular/core';
import {ConnectService} from 'src/app/services/connect.service'
@Component({
  selector: 'app-searchgrid',
  templateUrl: './searchgrid.component.html',
  styleUrls: ['./searchgrid.component.css']
})
export class SearchgridComponent implements OnInit {

  constructor(private connservice:ConnectService) { }
users:any
  ngOnInit(): void {
  }
  get(){
    this.connservice.getdomains().subscribe(async (res:any)=>{
    this.users=res;
    console.log(this.users[0].domain);
  }
    )
  }

}
