import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '../model/form';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {




  constructor(private http: HttpClient) { }

  saveDetails(formData: Form):Observable<Form>{
   return this.http.post<Form>('https://cindy-portfolio-form-default-rtdb.firebaseio.com/form.json', formData)
  }

}
