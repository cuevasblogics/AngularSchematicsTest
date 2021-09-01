import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = '/api/<%= dasherize(name) %>';

@Injectable()
export class <%= classify(name) %>Service {
    constructor(private http: HttpClient) {}

    findAll(): Observable<<%= classify(name) %>> {
        <% if(transform) { %>
        return this.http.get<<%= classify(name) %>Response>(API_URL).pipe(map(this.transform));
        <% } else { %>
        return this.http.get<<%= classify(name) %>>(API_URL);
        <% }  %>
    }

    <% if(transform) { %>
    private transform(response: <%= classify(name) %>Response): <%= classify(name) %> {
        return {
            someProperty: someResponseProperty
        };
    }
    <% }  %>
}

export interface <%= classify(name) %> {
    someProperty: string;
}

<% if(transform) { %>
interface <%= classify(name) %>Response {
    someResponseProperty
}
<% }  %>