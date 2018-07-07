import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const GITHUB_USER_IMAGE_STORAGE_KEY = 'githubImg';
const GITHUB_REPO_STORAGE_KEY = 'githubRepos';
const GITHUB_USER_IMAGE_URL = 'https://api.github.com/users/atodoki';
const GITHUB_REPO_URL = 'https://api.github.com/users/atodoki/repos';

@Injectable()
export class CodeService {

  constructor(private http: HttpClient) {}

  /**
   * Get the avatar url of the user
   */
  getGithubUserImageUrl(): Observable<string> {
    return this.queryGithubApi<{avatar_url: string}>(GITHUB_USER_IMAGE_URL, GITHUB_USER_IMAGE_STORAGE_KEY)
    .pipe(map(
      (response) => response.avatar_url
    ));
  }

  /**
   * Gets the repo info of the user
   */
  getGithubRepoList(): Observable<GithubRepoModel[]> {
    return this.queryGithubApi<GithubRepoModel[]>(GITHUB_REPO_URL, GITHUB_REPO_STORAGE_KEY)
      .pipe(map(
      (response) => {
        response.sort(
          (a: any, b: any) => {
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          }
        );
        return response;
      }
    ));
  }

  /**
   * Queries github's api and uses local storage to minimize the number of requests to prevent going over the rate limit
   * @param apiUrl The Github Api Endpoint
   * @param localStorageKey The key used for localstorage
   */
  private queryGithubApi<T>(apiUrl: string, localStorageKey: string): Observable<T> {
    // Mapping function to store the response and ETag in local storage
    // and pass the response through
    const httpMap = function (response) {
      const storage = {
        data: response.body,
        ETag: response.headers.get('ETag')
      };
      window.localStorage.setItem(localStorageKey, JSON.stringify(storage));
      return response.body;
    };

    // Check if request is in local storage and if it is, make sure data has not changed
    const storedData = JSON.parse(window.localStorage.getItem(localStorageKey));
    if (storedData && storedData['ETag']) {
      return this.http.get<HttpResponse<T>>(apiUrl,
      {
        observe: 'response',
        headers: new HttpHeaders(
          {'If-None-Match': storedData['ETag']}
        )
      }).pipe(
        map(httpMap),
        catchError(
          // 304 requests are considered errors
          (response) => {
            if (response.status === 304) {
              return of(storedData.data);
            }
          }
        )
      );
    }

    // Do a normal get if there the request is not in local storage
    return this.http.get<HttpResponse<T>>(apiUrl, {observe: 'response'})
      .pipe(map(httpMap));
  }
}
