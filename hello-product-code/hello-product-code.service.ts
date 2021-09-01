import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = '/api/product-code';

@Injectable()
export class ProductCodeService {
    constructor(private http: HttpClient) {}

    findAll(): Observable<ProductCode> {
        
        return this.http.get<ProductCode>(API_URL);
        
    }

    
}

export interface ProductCode {
    someProperty: string;
}

