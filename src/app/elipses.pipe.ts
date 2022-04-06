import { Pipe, PipeTransform } from "@angular/core";
import { Transform } from 'stream';
import { text } from '../../node_modules/@types/express';

@Pipe({
    name:'elipses'
})

export class EPipe implements PipeTransform{
    constructor(){}
    transform(text:string,length:number=20,suffix:string='...'):string
    {
if(text.length>length)
{
    let truncated:string = text.substring(0,length).trim()+suffix;
    return truncated;
}
return text;
    }

}