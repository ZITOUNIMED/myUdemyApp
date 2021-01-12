import { NodeModel } from "src/app/models/node.model";

export interface AppState {
    formations: FormationsState;
}

export interface FormationsState {
    formations: NodeModel[];
}