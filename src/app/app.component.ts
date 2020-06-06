import { Component, OnInit } from '@angular/core';
import { Gantt } from 'node_modules/frappe-gantt';
//import * as Gantt from 'frappe-gantt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ganttpoc';
  tasks = [
    {
      start: '2020-10-01',
      end: '2020-10-08',
      name: 'Redesign website',
      id: "Task 0",
      progress: 20
    },
    {
      start: '2020-10-03',
      end: '2020-10-06',
      name: 'Write new content',
      id: "Task 1",
      progress: 5,
      dependencies: 'Task 0'
    },
    {
      start: '2020-10-04',
      end: '2020-10-08',
      name: 'Apply new styles',
      id: "Task 2",
      progress: 10,
      dependencies: 'Task 1'
    },
    {
      start: '2020-10-08',
      end: '2020-10-09',
      name: 'Review',
      id: "Task 3",
      progress: 5,
      dependencies: 'Task 2'
    },
    {
      start: '2020-10-08',
      end: '2020-10-10',
      name: 'Deploy',
      id: "Task 4",
      progress: 0,
      dependencies: 'Task 2'
    },
    {
      start: '2020-10-11',
      end: '2020-10-11',
      name: 'Go Live!',
      id: "Task 5",
      progress: 0,
      dependencies: 'Task 4',
      custom_class: 'bar-milestone'
    },
    {
      start: '2020-01-05',
      end: '2020-10-12',
      name: 'Long term task',
      id: "Task 6",
      progress: 0
    }
  
  ]
  gantt;
  ngOnInit(){
    this.gantt = new Gantt('#gantt', this.tasks);
    
  }
  
}
