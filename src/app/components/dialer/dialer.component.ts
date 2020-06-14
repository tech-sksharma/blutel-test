import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialer',
  templateUrl: './dialer.component.html',
  styleUrls: ['./dialer.component.css']
})
export class DialerComponent implements OnInit {

  constructor() { }

  isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)){
      return false;
    }
    return true;
  }

  ngOnInit(): void {
  }

}
