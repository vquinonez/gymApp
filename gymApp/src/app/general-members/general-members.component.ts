import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { IMember } from '../interfaces/IMember';
import { IGyms } from '../interfaces/IGyms';
import { DataManagerService } from '../services/data-manager.service';

import { ITable, ITableItem, ITableRow } from '../interfaces/ITable';

@Component({
  	selector: 'app-general-members',
  	templateUrl: './general-members.component.html',
  	styleUrls: ['./general-members.component.css'],
  	providers: [ 
		RouterModule,
		DataManagerService
 	]
})
export class GeneralMembersComponent implements OnInit {
	public membersList: IMember[];
	public gymsList: IGyms[];

  	constructor(private memberManager: DataManagerService<IMember>, private gymManager: DataManagerService<IGyms>, private router: Router) { }

  	ngOnInit() {
  		if(!this.isLogin())
  		this.router.navigate(['/login']);

	    this.memberManager.getData('gymApp/gymApp/dist/assets/data/members.json').subscribe( res =>{
	      this.membersList = res;
	      this.formatTableList();
	    });

	    this.gymManager.getData('gymApp/gymApp/dist/assets/data/gyms.json').subscribe( res =>{
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

	getGymName( id :string ): string{
		let gymName = '';

		for(let val in this.gymsList){
			if(this.gymsList[val].id == id){
				gymName = this.gymsList[val].gym_name;
				break;
			}
		}

		return gymName;
	}

  	formatTableList(): ITable{
    	let dataSet: ITable = {
      		header: ['Name', 'Gym', 'Register date', 'Difficulty'],
      		rows:[]
    	};

    	if ((this.membersList != undefined) && (this.gymsList != undefined)){
	    	for(let val in this.membersList){	
   				dataSet.rows.push(this.formatTableRow( this.membersList[val].id,  this.membersList[val].name.first + ' ' + this.membersList[val].name.last, this.membersList[val].registered, this.getGymName( this.membersList[val].affilated_gym ),this.membersList[val].difficulty_level ));
	    	}
    	}

    	return dataSet;

  	}

  	formatTableRow( id, name, register, gym, difficulty ): ITableRow{
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
      		header: 'Gym',
      		value: gym,
      		href: 'gyms/' + gym
    	});

    	row.items.push({ 
      		header: 'Register date',
      		value: register
    	});

    	row.items.push({ 
      		header: 'Difficulty',
      		value: difficulty
    	});

    	row.href = 'gyms/' + id;

    	return row;
  	}

}
