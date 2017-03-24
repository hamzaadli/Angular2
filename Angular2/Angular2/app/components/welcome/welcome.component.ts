import { Component } from '@angular/core';
import { NgControl } from '@angular/common';

@Component({
    selector: 'WelcomeComponent',
    templateUrl: './app/components/welcome/welcome.component.html',
    styleUrls: ['./app/components/welcome/welcome.component.css']
})
export class AppComponent {
    name = 'Tour of heroes';
 
}
