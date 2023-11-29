import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(
    public http: HttpClient
  ) { }

  public fetchProjects$() {
    return this.http.get('assets/data.json').pipe(map((data: any) => data.progetti));
  }
}
