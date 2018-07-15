import { Component, OnInit } from '@angular/core';
import { SocialMediaLink, Experience, Education } from './home.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  socialMediaList: SocialMediaLink[];
  experienceList: Experience[];
  educationList: Education[];

  constructor() { }

  ngOnInit() {
    this.socialMediaList = [
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/ariel-todoki-056376141/',
        imgUrl: 'https://www.linkedin.com/favicon.ico',
      },
      {
        name: 'Github',
        link: 'https://www.github.com/atodoki/',
        imgUrl: 'https://github.com/favicon.ico',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/atodoki/',
        imgUrl: 'https://www.facebook.com/favicon.ico',
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/arietoki/',
        imgUrl: 'https://www.instagram.com/favicon.ico',
      },
      {
        name: 'Youtube',
        link: 'https://www.youtube.com/user/arietoki',
        imgUrl: 'https://www.youtube.com/favicon.ico',
      },
      {
        name: 'Pinterest',
        link: 'https://www.pinterest.com/arietoki/',
        imgUrl: 'https://www.pinterest.com/favicon.ico',
      },
      {
        name: 'Blogspot',
        link: 'https://arietoki.blogspot.com/',
        imgUrl: 'https://www.blogger.com/favicon.ico',
      },
      {
        name: 'Twitter',
        link: 'https://www.twitter.com/arie_toki/',
        imgUrl: 'https://www.twitter.com/favicon.ico',
      },
      {
        name: 'Tumblr',
        link: 'https://arietoki.tumblr.com/',
        imgUrl: 'https://assets.tumblr.com/images/favicons/favicon.ico',
      }
    ];
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
        name: 'University of Washington',
        startDate: new Date(2018, 8),
        endDate: null,
        location: 'Tacoma, Washington',
        degree: 'Master of Science, Computer Science and Systems'
      },
      {
        name: 'Willamette University',
        startDate: new Date(2014, 8),
        endDate: new Date(2018, 5),
        location: 'Salem, Oregon',
        degree: 'Bachelor of Arts, Computer Science and Music Performance, Minor in Math'
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
