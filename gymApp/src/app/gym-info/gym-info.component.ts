import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, Params } from '@angular/router';

import { IGyms } from '../interfaces/IGyms';
import { IMember } from '../interfaces/IMember';
import { DataManagerService } from '../services/data-manager.service';

import { ITable, ITableItem, ITableRow } from '../interfaces/ITable';

@Component({
  selector: 'app-gym-info',
  templateUrl: './gym-info.component.html',
  styleUrls: ['./gym-info.component.css'],
  providers: [ 
		RouterModule,
		DataManagerService
 	]
})
export class GymInfoComponent implements OnInit {

	gymName = '';
	gymInfo: IGyms = {
		id: '',
		gym_name: '',
		address: '',
		phone: '',
		email: '',
		description: ''
	};

	public membersLists: IMember[];

  	constructor(private gymManager: DataManagerService<IGyms>, private memberManager: DataManagerService<IMember>,private router: Router, private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
	  	if(!this.isLogin())
	  		this.router.navigate(['/login']);

		this.activatedRoute.params.subscribe((params: Params) => {
			this.gymName = params.name;

		    this.gymManager.getData('https://vquinonez.github.io/gymApp/gymApp/dist/assets/data/gyms.json')
		    .subscribe( res => {
		    	for( let val of res){
		    		if(val.gym_name == this.gymName){
		    			this.gymInfo = val;
		    			return 0;
		    		}
		    	}
		    });

		    this.memberManager.getData('https://vquinonez.github.io/gymApp/gymApp/dist/assets/data/members.json')
		    .subscribe( res => {
		    	this.membersLists = res;
      			this.formatTableList();
		    });

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

	membersInGym( id:  string): number{
		let count: number = 0;

		if(this.membersLists != undefined){
			for(let elem of this.membersLists){
				if(elem.affilated_gym == id)
					count ++;
			}
		}

		return count;
	}

	formatTableList(): ITable{
	    let dataSet: ITable = {
	      header: ['Name', 'Phone', 'Register date', 'Difficulty'],
	      rows:[]
	    };

	    for(let val in this.membersLists){
	    	if( this.membersLists[val].affilated_gym === this.gymInfo.id )
	      		dataSet.rows.push(this.formatTableRow(this.membersLists[val].id, this.membersLists[val].name.first + ' ' + this.membersLists[val].name.last, this.membersLists[val].phone, this.membersLists[val].difficulty_level, this.membersLists[val].registered ));
	    }

	    return dataSet;
	}

	formatTableRow( id, name, phone, difficulty, register ): ITableRow{
	    let row: ITableRow = {
	      items: []
	    },
	        item: ITableItem;

	   row.items.push({ 
	      header: 'Name',
	      value: name,
	      href: 'members/' + id
	    });

	    row.items.push({ 
	      header: 'Phone',
	      value: phone
	    });

	    row.items.push({ 
	      header: 'Register date',
	      value: register
	    });

	    row.items.push({ 
	      header: 'Difficulty',
	      value: difficulty
	    });

	    row.href = 'members/' + id;
	    
	    return row;
	}

}
