import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldsFilter'
})
export class FieldsFilterPipe implements PipeTransform {

  	transform(value: any, args?: any): any {
	    value = value.sort((a,b) =>{

	        if( this.getFieldVal(args,a.items) > this.getFieldVal(args,b.items) )
	            return 1;
	        else if(this.getFieldVal(args,a.items) < this.getFieldVal(args,b.items))
	        	return -1;
	          
	    	return 0;
	    });
    	console.log(value);
    	return value;
  	}

    getFieldVal ( header: string, item: any ): string{
      let res: string = '';

      for(let field of item){
        if(field.header == header)
          res = field.value;
      }

      return res;
    }

}
