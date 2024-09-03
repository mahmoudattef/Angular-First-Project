import { Component } from '@angular/core';
interface IProduct{
  imgSrc:string;
}
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
products:IProduct[]=[
  {imgSrc:'./assets/img/poert1.png'},
  {imgSrc:'./assets/img/port2.png'},
  {imgSrc:'./assets/img/port3.png'},
  {imgSrc:'./assets/img/poert1.png'},
  {imgSrc:'./assets/img/port2.png'},
  {imgSrc:'./assets/img/port3.png'},
]
isClicked:boolean =false
showModel(src:string){
  this.isClicked = true
  this.imgSrc =  src
   document.body.style.overflow = 'hidden'

  }
closeModel(){
  this.isClicked =false
  document.body.style.overflow = 'auto';
}

imgSrc:string = ""
bgClose(){


  this.closeModel()

}
onImageClick(event: MouseEvent) {
  event.stopPropagation();
}
}
