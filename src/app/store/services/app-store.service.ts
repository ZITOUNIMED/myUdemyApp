import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { NodeModel } from "src/app/models/node.model";
import { SetFormationsAction } from "../actions/formations.actions";
import { AppState, FormationsState } from "../states/app.state";

@Injectable({
    providedIn: 'root'
})
export class AppStoreService {
    constructor(private store: Store<AppState>){}

    setFormations(formations: NodeModel[]){
        this.store.dispatch(new SetFormationsAction(formations));
    }

    getFormations(): Observable<NodeModel[]>{
        return this.store.select('formations').pipe(map((state: FormationsState) => state && state.formations || []));
    }
}