import { Component, OnInit, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ITable, ITableItem, ITableRow } from '../interfaces/ITable';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

	private _dataSet = 	new BehaviorSubject<ITable>( { header:[], rows:[]});

	public tableSet: ITable;

  public sortField: string = '';

	@Input() 
	  set dataSet(value) {
        this._dataSet.next(value);
    }

    get dataSet() {
        return this._dataSet.getValue();
    }

  constructor() { }

  	ngOnInit() {
  		this._dataSet
            .subscribe(x => {
            	this.tableSet = x;
            });
  	}

  	generateURL( val = '' ): string{
  		return val;
  	}

    headerExist(val: string): boolean{
      let res: boolean = false;

      for(let head of this.tableSet.header){
        if(head == val){
          res = true;
        }
        break;
      }

      return res;
    }

    getFieldVal ( header: string, item: any ): string{
      let res: string = '';

      for(let field of item){
        if(field.header == header)
          res = field.value;
      }

      return res;
    }

    sortFields( field: string ) {

      this.sortField = field;

    }

}
