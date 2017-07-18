import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, Params } from '@angular/router';

import { IGyms } from '../interfaces/IGyms';
import { IMember } from '../interfaces/IMember';
import { DataManagerService } from '../services/data-manager.service';

@Component({
  	selector: 'app-member-info',
  	templateUrl: './member-info.component.html',
  	styleUrls: ['./member-info.component.css'],
    providers: [ 
		RouterModule,
		DataManagerService
 	]
})
export class MemberInfoComponent implements OnInit {
	memberID = '';
	memberInfo: IMember = {
		id: '',
		name: {
			last: '',
			first: ''
		},
		email: '',
		phone: '',
		address: '',
		registered: '',
		difficulty_level: 0,
		affilated_gym: '',
		profile_img: ''
	};

	public gymsList: IGyms[];

  	constructor(private gymManager: DataManagerService<IGyms>, private memberManager: DataManagerService<IMember>,private router: Router, private activatedRoute: ActivatedRoute) { }

  	ngOnInit() {
  		if(!this.isLogin())
	  		this.router.navigate(['/login']);

	  	this.activatedRoute.params.subscribe((params: Params) => {
			this.memberID = params.id;

		    this.memberManager.getData('https://vquinonez.github.io/gymApp/gymApp/dist/assets/data/members.json')
		    .subscribe( res => {
		    	for( let val of res){
		    		if(val.id == this.memberID){
		    			this.memberInfo = val;
		    			return 0;
		    		}
		    	}
		    });

		    this.gymManager.getData('https://vquinonez.github.io/gymApp/gymApp/dist/assets/data/gyms.json')
		    .subscribe( res => {
		    	this.gymsList = res;
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

}
