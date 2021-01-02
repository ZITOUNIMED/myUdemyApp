import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { VideoToModel } from "../models/video.to.model";

@Injectable({
    providedIn: 'root'
})
export class VideosService {
    url = environment.api+'videos';
    constructor(private http: HttpClient){}

    generateVideoUrl(directory: string): Observable<VideoToModel>{
        return this.http.post<VideoToModel>(this.url, {
            fileName: directory
        });
    }
}