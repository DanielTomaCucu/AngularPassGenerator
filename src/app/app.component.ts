import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
password = '';
incluseLetters = false;
incluseNumbers = false;
incluseSym= false;
length = 0;

onChangeUseLetters(){
this.incluseLetters = !this.incluseLetters;
}
onChangeLength(value: string) {
 
  const parsedValue = parseInt(value);

  if (!isNaN(parsedValue)) {
    this.length = parsedValue;
  }
}
onChangeNumbers(){
  this.incluseNumbers= !this.incluseNumbers;
}
onChangeSym(){
  this.incluseSym = !this.incluseSym;
}
  onButtonClick(){
    const numbers='1234567890';
    const letters="qwertyuiopasdfghjklzxcvbnm";
    const symbols='!@#$%^&*()'
    
    let validChars='';
    if(this.incluseNumbers){
      validChars += numbers;
    }
    if(this.incluseLetters){
      validChars += letters;
    }
    if (this.incluseSym){
      validChars += symbols
    }

let generatedPass ='';
for(let i= 0; i<= this.length; i++){
  const index = Math.floor(Math.random() * validChars.length)
  generatedPass += validChars[index];
}
this.password = generatedPass;
  }


 
  
}
