import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../service/dataservice.service';
import { Idata } from '../../model/data.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
dataArr : Idata[]= []
  constructor(private  dataservice: DataserviceService) { }

  ngOnInit(): void {
    this.dataservice.getAlldata().subscribe((res)=>{
      this.dataArr = res
    })
  }

  onDelete(id : number){
this.dataservice.deletedata(id).subscribe(res=>{
  this.dataArr = this.dataArr.filter((ele)=>ele.id !== id)
})
  }

}
