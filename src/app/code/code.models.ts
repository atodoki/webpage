import { SafeResourceUrl } from '@angular/platform-browser';

export class GithubRepoModel {
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
}

export class LabMappingModel {
  constructor(public name: string = null, public file: SafeResourceUrl = 'about:blank') {}
}
