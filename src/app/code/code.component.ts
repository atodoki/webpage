import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeService, GITHUB_REPO_URL } from './code.service';
import { GithubRepoModel, LabMappingModel } from './code.models';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  githubUserImageUrl: Observable<string>;
  githubRepoList: Observable<GithubRepoModel[]>;

  repositoryLink = GITHUB_REPO_URL;

  labs: Observable<LabMappingModel[]>;
  selectedLab = new LabMappingModel();

  constructor(private codeService: CodeService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.githubUserImageUrl = this.codeService.getGithubUserImageUrl();
    this.githubRepoList = this.codeService.getGithubRepoList();

    this.labs = this.codeService.getComputerGraphicsList();
    this.labs.subscribe(
      (response) =>
      console.log(JSON.stringify(response))
    );
  }

  onSelectedLab(lab: LabMappingModel) {
    this.selectedLab = lab;
  }
}
