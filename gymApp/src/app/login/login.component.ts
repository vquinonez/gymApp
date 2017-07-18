import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';


import { IUser } from '../interfaces/IUser';
import { DataManagerService } from '../services/data-manager.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [ 
	  	RouterModule,
		DataManagerService
 	]
})
export class LoginComponent implements OnInit {
	//Full user List
	usersList: IUser[];

	//Initialize datManager and router objects
 	constructor(private dataManager: DataManagerService<IUser>, private router: Router) { }

  	ngOnInit() {

      if(this.isLogin()){
        this.router.navigate(['/gyms']);
      }

  		//Get Data from JSON and assign it to IUser Array
  		this.dataManager.getData('gymApp/gymApp/dist/assets/data/users.json').subscribe( res =>{
  			this.usersList = res;
  		});
  	}

  	//Compare Data with users 
  	onClickLogin(e: any): void{
  		let user = (<HTMLInputElement>document.getElementById('user-name')).value,
  			pass = (<HTMLInputElement>document.getElementById('user-pass')).value;


  		this.usersList.forEach((value)=>{

  			if ( (value.user_name == user) && (value.pass == Md5.hashStr(pass)) ){
  				this.createCookie(value);
  				return false;
  			}
  		});
  	}

  	//Creates session and redirect to Gyms component
  	createCookie(user): string{
  		let remember = (<HTMLInputElement>document.getElementById('remember')).checked;


  		if(remember){
	      	localStorage.setItem('user',JSON.stringify(user));
	    }else{
	      	sessionStorage.setItem('user',JSON.stringify(user));
	    }

	    this.router.navigate(['/gyms']);

  		return JSON.stringify(user);
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

}
