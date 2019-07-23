import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';// We have to import the Observable from rxjs library 
import { HttpClient } from '@angular/common/http';// Any Http request we have to import HttpClient librabry 


@Injectable()
//This is our Service that we are going to inject in our component 
export class mockApiServer{

    //In this class we have going to inject HTTP Request using Constructor
    constructor(private httpClient : HttpClient){}
    //This Method will return an Observable of type any

    getaccounts() : Observable<any> {
        return this.httpClient.get("http://localhost:8080/api/accounts");
    }

}