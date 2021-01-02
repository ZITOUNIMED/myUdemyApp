import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { NodeModel } from "../models/node.model";
import { FormationService } from "./formation.service";

@Injectable({
    providedIn: 'root'
})
export class FomationResolverService implements Resolve<Observable<NodeModel>>{
    constructor(private formationService: FormationService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NodeModel> {
        const name = route.paramMap.get('name');
        return this.formationService.getFormation(name);
    }
}