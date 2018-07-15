import { Component, OnInit } from '@angular/core';
import { Experience, Education } from './home.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  experienceList: Experience[];
  educationList: Education[];

  constructor() { }

  ngOnInit() {
    this.experienceList = [
      {
        title: 'Computer Science Tutor',
        company: 'Willamette University',
        startDate: new Date(2017, 9),
        endDate: new Date(2018, 5),
        location: 'Salem, Oregon',
        description: 'Individual tutor and lab assistant for the Introduction to Programming and Data Structures class.'
                    + '  Guide and teach students concepts learned in class, help with lab assignments and debug code.'
      },
      {
        title: 'Band Staff',
        company: 'Willamette University',
        startDate: new Date(2017, 8),
        endDate: new Date(2018, 5),
        location: 'Salem, Oregon',
        description: 'Set up for band rehearsals and concerts, make copies of music, organize the music library and office,'
                    + ' lead the locker and instrument rental process, and assist the band director with various tasks.'
      },
      {
        title: 'Intern',
        company: 'Integrity Applications Incorporated',
        startDate: new Date(2017, 6),
        endDate: new Date(2017, 8),
        location: 'Kihei, Hawaii',
        description: ''
      }
    ];

    this.educationList = [
      {
        name: 'Willamete University',
        startDate: new Date(2014, 8),
        endDate: new Date(2018, 5),
        location: 'Salem, Oregon',
        degree: 'Bachelor of Arts - BA, Computer Science and Music Performance, Minor in Math'
      },
      {
        name: 'Kalani High School',
        startDate: new Date(2010, 8),
        endDate: new Date(2014, 6),
        location: 'Honolulu, Hawaii',
        degree: ''
      }
    ];
  }

}
