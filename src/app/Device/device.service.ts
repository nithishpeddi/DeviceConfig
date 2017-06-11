import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, Response } from '@angular/http';
@Injectable()
export class ProjectService {
    private _baseURL = 'api/something';//declare API 
    private _options: { headers: Headers } = { headers: new Headers({ 'Content-Type': 'application/json' }) };

    constructor(private _http: Http) {

    }

    create(project: any): Observable<any> {
        return this._http
            .post(this._baseURL, project, this._options)
            .map((res: Response) => res.json())
            .catch(this.handleError);

    }
    read(projectId: string): Observable<any> {
        return this._http
            .get(`${this._baseURL}/${projectId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    update(project: any): Observable<any> {
        return this._http
            .put(`${this._baseURL}/${project._id}`,project)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    delete(projectId: any): Observable<any> {

        return this._http
            .delete(`${this._baseURL}/${projectId}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    list(): Observable<any> {
        return this._http
            .get(this._baseURL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.log('handleError');
        return Observable.throw(error.json().message || 'Server error');
    }
}
// Material itself is a Design Principles , we apply it in angular framework for developing an application.