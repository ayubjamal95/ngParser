import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private httpClient: HttpClient,
  ) { }
  
  public uploadfile(file: File) {

    let formParams = new FormData();
    formParams.append('file', file)
    return this.httpClient.post<any>('http://localhost:8000/api/parser/upload', formParams)
  }

  public getAllData(){

    return this.httpClient.get<any>("http://localhost:8000/api/parser/all");
  }
  public getTaskIdNumbers(taskId:any){

    return this.httpClient.get<any>("http://localhost:8000/api/parser/getTaskNumbers/"+taskId);
  }
  public deleteTaskById(taskId:any){
    return this.httpClient.delete<any>("http://localhost:8000/api/parser/deleteByTaskId/"+taskId);
  }
}
