import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-sidebar',
  	templateUrl: './sidebar.component.html',
  	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	}

  	logOut(){
  		localStorage.removeItem('user');
  		sessionStorage.removeItem('user');
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
