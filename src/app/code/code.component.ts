import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  githubUser: Observable<{avatar_url: string}>;
  githubRepoList: Observable<{name: string, html_url: string}[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.githubUser = this.http.get<{avatar_url: string}>('https://api.github.com/users/atodoki');
    this.githubRepoList = this.http.get<
      {
        name: string,
        html_url: string,
        description: string,
        language: string,
        updated_at: string
      }[]
      >('https://api.github.com/users/atodoki/repos');
  }

}
