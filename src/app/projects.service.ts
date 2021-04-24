import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects=[
    {
      'name':'protfolio',
      'technologies used':'angular',
      'features':'this is to list all the projects that i haved worked upon',
      'URL':'#'
    },
    {
      'name':'protfolio',
      'technologies used':'angular',
      'features':'this is to list all the projects that i haved worked upon',
      'URL':'#'
    },
    {
      'name':'protfolio',
      'technologies used':'angular',
      'features':'this is to list all the projects that i haved worked upon',
      'URL':'#'
    },
    {
      'name':'protfolio',
      'technologies used':'angular',
      'features':'this is to list all the projects that i haved worked upon',
      'URL':'#'
    },
    {
      'name':'protfolio',
      'technologies used':'angular',
      'features':'this is to list all the projects that i haved worked upon',
      'URL':'#'
    },
    {
      'name':'protfolio',
      'technologies used':'angular',
      'features':'this is to list all the projects that i haved worked upon',
      'URL':'#'
    },
  ]

  constructor() { }

  getAll(){
    return this.projects.slice()
  }
}
