import { Component, OnInit } from '@angular/core';
import {mockApiServer} from '../services/mockapiserver.service';// import our service 
import {Accounts} from '../services/classes/accounts'

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})


export class AccountsComponent implements OnInit {
    public isDisabled;
    totalValue;

    //Inject our service 
  constructor(private _mockApiServer : mockApiServer){}

  lstaccounts: Accounts[];
 
  ngOnInit(){

    //Calling our _mockApiServer API
    this._mockApiServer.getaccounts()
    .subscribe
    (
      data =>{
        //Putting Data on our empty Array
        this.lstaccounts = data;
        //Calclulating total
        this.totalValue = data.filter((item) =>item.balance)
          .map((item) => +item.balance)
          .reduce((sum, current) => sum + current);
      }
    )
  }

  withdrawal(){
    alert("Success");
  }
}
