import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddViewCustmerComponent } from '../edit-add-view-custmer/edit-add-view-custmer.component';
import { CustmersService } from 'src/app/services/custmers.service';
import { custmer } from 'src/app/interfaces/custmer';




@Component({
  selector: 'app-show-custmers',
  templateUrl: './show-custmers.component.html',
  styleUrls: ['./show-custmers.component.css']
})
export class ShowCustmersComponent implements OnInit {

  Custmers: custmer[] = [];
  firstname: string = "";
   lastname: string = "";
   Phone:  string = "";



  constructor(private cs: CustmersService, private modal: NgbModal ) {}
    
  

 ngOnInit():void {
   this.cs.getcustmers().subscribe ({
    next: (CustmersData: custmer[]) => (this.Custmers = CustmersData),
  });
}


deletecustmer(custmer: custmer):void {
if (confirm('are you sure?')){
  this.cs
  .deletecustmer(custmer)
  .then(() => console.log('custmer was deleted'))
  .catch((err) => console.log(err));
}
}


updatecustmer( custmer: custmer) {
  let ModalRef = this.modal.open(EditAddViewCustmerComponent,{
    size: 'lg',
    centered: true,
    windowClass: 'dark-modal',
  });
  ModalRef.componentInstance.id = custmer.id;
  
}


 
detailscustmer( custmer: custmer) {
  let ModalRef = this.modal.open(EditAddViewCustmerComponent,{
    size: 'lg',
    centered: true,
    windowClass: 'dark-modal',
  });
  ModalRef.componentInstance.id = custmer.id;
  ModalRef.componentInstance.viewMode = true;
}



}
  


