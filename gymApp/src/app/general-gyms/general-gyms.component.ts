import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { IGyms } from '../interfaces/IGyms';
import { DataManagerService } from '../services/data-manager.service';

import { ITable, ITableItem, ITableRow } from '../interfaces/ITable';

@Component({
	selector: 'app-general-gyms',
	templateUrl: './general-gyms.component.html',
	styleUrls: ['./general-gyms.component.css'],
	providers: [ 
		RouterModule,
		DataManagerService
 	]
})

export class GeneralGymsComponent implements OnInit {
  public gymsList: IGyms[];

  //Initialize router
  constructor(private dataManager: DataManagerService<IGyms>,private router: Router) { }

  //Redirect to login if it's not login
  ngOnInit() {
  	if(!this.isLogin())
  		this.router.navigate(['/login']);

    this.dataManager.getData('https://vquinonez.github.io/gymApp/gymApp/dist/assets/data/gyms.json').subscribe( res =>{
      this.gymsList = res;
      this.formatTableList();
    });
  }

  isLogin(): boolean{
    if (localStorage.getItem("user") !== null) {
      return true;
    }else if (sessionStorage.getItem("user") !== null){
      return true;
    }else{
      return false;
    }

  }

  formatTableList(): ITable{
    let dataSet: ITable = {
      header: ['Name', 'Phone', 'Address'],
      rows:[]
    };

    for(let val in this.gymsList){
      dataSet.rows.push(this.formatTableRow( this.gymsList[val].id, this.gymsList[val].gym_name, this.gymsList[val].phone, this.gymsList[val].address ));
    }

    return dataSet;
  }

  formatTableRow( id, name, phone, address ): ITableRow{
    let row: ITableRow = {
      items: []
    },
        item: ITableItem;

    row.items.push({ 
      header: 'Name',
      value: name,
      href: 'gyms/' + name
    });

    row.items.push({ 
      header: 'Phone',
      value: phone
    });

    row.items.push({ 
      header: 'Address',
      value: address
    });

    row.href = 'gyms/' + id;

    return row;
  }

}
