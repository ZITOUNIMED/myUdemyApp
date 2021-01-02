import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ConfigToModel } from "../models/config.to.model";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    url = environment.api + 'config';
    
    constructor(private http: HttpClient){}
    getDirectoryRoot(): Observable<ConfigToModel>{
      return this.http.get<ConfigToModel>(this.url+'/directoryRoot');
    }

    changeDirectoryRoot(directoryRoot): Observable<ConfigToModel> {
        return this.http.post<ConfigToModel>(this.url+'/directoryRoot', {directoryRoot: directoryRoot});
    }
}