import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FilesService {
    private url = environment.api+'files';
    constructor(private http: HttpClient){}

    loadFileContent(directory: string): Observable<{content: string}>{
        return this.http.post<{content: string}>(this.url, {
            directory: directory
        });
    }
}