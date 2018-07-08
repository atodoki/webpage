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

export class AppleAppModel {
  artworkUrl100: string;
  trackName: string;
  version: string;
  releaseDate: string;
  trackViewUrl: string;
  description: string;
  screenshotUrls: string[];
}
