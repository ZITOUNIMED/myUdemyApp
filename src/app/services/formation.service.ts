import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
import { environment } from "src/environments/environment";
import { NodeModel } from "../models/node.model";

@Injectable({
    providedIn: 'root'
})
export class FormationService {
   
    url = environment.api + 'formations';

    constructor(private http: HttpClient){}

    getFormation(name: string): Observable<NodeModel> {
        return this.http.get<NodeModel>(this.url + '/'+ name);
    }

    loadFormations() {
        return this.http.get<NodeModel[]>(this.url);
    }

    intOrResetFormation(formationName: string): Observable<NodeModel>{
        return this.http.get<NodeModel>(this.url + '/initOrReset/'+formationName);
    }

    saveFormation(formation: NodeModel){
        return this.http.post(this.url, formation);
    }
}