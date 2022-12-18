import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddViewCustmerComponent } from '../edit-add-view-custmer/edit-add-view-custmer.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  addNewCustmer() {
    this.modal.open(EditAddViewCustmerComponent,{
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
  }

  

}
