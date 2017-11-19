import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpringFoxApiService {
    constructor(private http: Http) { }

    uiConfiguration(): Observable<any> {
        const url = 'http://localhost:8085/swagger-resources/configuration/ui';
        return this.http.get(url).map((res: Response) => {
            return res.json();
        });
    }

    resouces(): Observable<any> {
        const url = 'http://localhost:8085/swagger-resources';
        return this.http.get(url).map((res: Response) => {
            return res.json();
        });
    }

    apiDoc(group: string): Observable<any> {
        const url = 'http://localhost:8085/api-docs';
        return this.http.get(url, {params: {group: group}}).map((res: Response) => {
            return res.json();
        });
    }
}
