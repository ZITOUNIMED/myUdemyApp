import { Action } from '@ngrx/store';
import { NodeModel } from 'src/app/models/node.model';

const SET_FORMATIONS = 'SET_FORMATIONS';

export class SetFormationsAction implements Action {
    readonly type = SET_FORMATIONS;

    constructor(public payload: NodeModel[]){}
}