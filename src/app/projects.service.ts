import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects=[
    {
      'name':'Protfolio',
      'technologies':['angular','nodeJs'],
      'discription':'usage of Angular material and NodeJs for triggering emails',
      'URL':'https://rajatsahu-portfolio.netlify.app',
      'image':'../../assets/images/portfolio.png'
    },
    {
      'name':'Rrecipe Book',
      'technologies':['angular','firebase'],
      'discription':'To implement all angular concepts i learn in Forms, Routes, Authentication and Data Mangement',
      'URL':'https://app-recipe-store.herokuapp.com/',
      'image':'../../assets/images/recipe.png'
    },
    {
      'name':'shop-prototype',
      'technologies':['angular','firebase'],
      'discription':'aim to develop and create portal that could be used in a real life senario',
      'URL':'https://shubham-vastralaye.netlify.app',
      'image':'../../assets/images/shop.png'
    },
  ]

  constructor() { }

  getAll(){
    return this.projects.slice()
  }
}
