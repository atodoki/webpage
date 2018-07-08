import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeService, GITHUB_REPO_URL } from './code.service';
import { GithubRepoModel, LabMappingModel, AppleAppModel } from './code.models';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  githubUserImageUrl: Observable<string>;
  githubRepoList: Observable<GithubRepoModel[]>;
  musicalEarData: Observable<AppleAppModel>;
  repositoryLink = GITHUB_REPO_URL;

  labList: Observable<LabMappingModel[]>;
  selectedLab = new LabMappingModel();

  constructor(private codeService: CodeService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.githubUserImageUrl = this.codeService.getGithubUserImageUrl();
    this.githubRepoList = this.codeService.getGithubRepoList();
    this.musicalEarData = this.codeService.getMusicalEarData();
    this.labList = this.codeService.getComputerGraphicsList();

    this.selectedLab.file = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedLab.file.toString());
    this.labList.subscribe(
      (list) => {
        this.selectedLab = list[0];
      }
    );
  }

  onSelectedLab(lab: LabMappingModel) {
    this.selectedLab = lab;
  }
}
