import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch'

@Injectable()
export class DataManagerService<T> {

	//Initialize HTTP component
	constructor(private http:Http){}

	//Get Data from path and return an observable object
	getData(dataRequest: any, filterCallBack?: any): Observable<T[]> {

		if(filterCallBack != undefined){
			return this.http.get(dataRequest)
			    .map(this.extractData)
			    .filter(filterCallBack)
			    .catch(this.handleError);
		}else{
		    return this.http.get(dataRequest)
			    .map(this.extractData)
			    .catch(this.handleError);
		}

	}

	//Format Observable response
  	private extractData(res: Response) {
    	let body = res.json();
    	return body || [];
  	}

  	//Format Observable Error
  	private handleError(error: any){
  		console.error(error);
  		return Observable.throw(error);
  	}

}
