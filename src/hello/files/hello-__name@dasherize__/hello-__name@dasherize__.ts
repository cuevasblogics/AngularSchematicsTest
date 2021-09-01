import { classify } from "@angular-devkit/core/src/utils/strings";
import { Component } from '@angular/core';

@Component({
    selector: 'hello-<%= dasherize(name) %>'
})

export class Hello<%= classify(name) %>Component {
    
}