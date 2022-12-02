import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqService {

  constructor(private http: HttpClient) { }
	url: string = "http://localhost:8090/OOP";

  oneOp(n: string, ext: string): Observable<string>{
		return this.http.get(this.url + ext, {params:{n}, responseType: 'text'});
	}

	twoOp(n: string): Observable<string>{
		return this.http.get(this.url + "/two_op", {params:{n}, responseType: 'text'});
	}

}
