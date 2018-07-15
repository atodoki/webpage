import { Component, OnInit } from '@angular/core';
import { Song } from './flute.models';

@Component({
  selector: 'app-flute',
  templateUrl: './flute.component.html',
  styleUrls: ['./flute.component.css']
})
export class FluteComponent implements OnInit {

  songList: Song[];

  constructor() { }

  ngOnInit() {
    this.songList = [
      {
        title: 'Flute Sonata in E minor, BWV 1034',
        subtitle: '',
        composer: 'Johann Sebastian Bach',
        movements: [
          'Adagio ma non tanto',
          'Allegro',
          'Andante',
          'Allegro'
        ]
      },
      {
        title: 'Flute Concertino, Op. 107',
        subtitle: '',
        composer: 'Cécile Chaminade',
        movements: []
      },
      {
        title: '"The Great Train Race"',
        subtitle: '\'The Flute As You Don\'t Usually Hear it!\' for solo flute',
        composer: 'Ian Clarke',
        movements: []
      },
      {
        title: 'London Trio No. 1 in C Major',
        subtitle: '',
        composer: 'Franz Joseph Haydn',
        movements: [
          'Allegro moderator',
          'Andante',
          'Finale: Vivace'
        ]
      },
      {
        title: 'Sonata Flute and Piano',
        subtitle: '',
        composer: 'Jindřich Feld',
        movements: [
          'All giocoso',
          'Grave',
          'All Vivace'
        ]
      },
    ];
  }
}
