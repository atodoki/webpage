import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeService } from './code.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  githubUserImageUrl: Observable<string>;
  githubRepoList: Observable<GithubRepoModel[]>;

  constructor(private codeService: CodeService) { }

  ngOnInit() {
    this.githubUserImageUrl = this.codeService.getGithubUserImageUrl();
    this.githubRepoList = this.codeService.getGithubRepoList();
  }
}
