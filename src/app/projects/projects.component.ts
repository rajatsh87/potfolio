import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  allprojects:any[]=[]
  constructor(private projectService:ProjectsService) { }

  ngOnInit(): void {
    this.allprojects=this.projectService.getAll()
    console.log(this.allprojects)
  }

}
