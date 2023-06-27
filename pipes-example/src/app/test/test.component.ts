import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

    presentDate = new Date();

    price : number = 20000;

    decimalNum1:number=8.7589623;
    decimalNum2:number=5.43;

    digits : number =100000;
    
}
