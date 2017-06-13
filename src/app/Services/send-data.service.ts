import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Request, RequestMethod, Response, JsonpModule } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class SendDataService {
    public pushDat = new EventEmitter<Object>();
    private _baseURL = 'https://database-99452.firebaseio.com/data.json';
    private _options: { headers: Headers } = { headers: new Headers({ 'Content-Type': 'application/json' }) };

    constructor(private _http: Http, private _route: Router) {

    }

    create(project: any) {
        return this._http.post(this._baseURL, project);
    }

    onSubscribeData(f) {
        return this.create(f.value).subscribe(
            (response) => this.onSuccess(response, f));

    }
    onReadData() {
        this.read(null).subscribe((response: Response) => {

            this.redirect(response);
        });
    }
    redirect(response) {
        let temp;
        for (let res in response) {
            if (response[res]) {
                temp = true;

            }
            else {
                temp = false
            }
            if (temp) {
                this._route.navigate(['/']);
            }
        }

    }

    onSuccess(response, f) {

        this.pushDat.emit(f.value);
        this._route.navigate(['/view-project']);
    }

    read(projectId: string): Observable<any> {
        return this._http
            .get(this._baseURL)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    update(project: any): Observable<any> {
        return this._http
            .put(`${this._baseURL}/${project._id}`, project)
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
