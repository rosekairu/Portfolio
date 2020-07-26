import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  
  ngOnInit(){
    AOS.init(
      {
        disable: false,
        startEvent: 'DOMContentLoaded', 
        initClassName: 'aos-init', 
        animatedClassName: 'aos-animate',
        useClassNames: false, 
        disableMutationObserver: false, 
        debounceDelay: 50, 
        throttleDelay: 99, 
        
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease', 
        once: false, 
        mirror: false,
        anchorPlacement: 'top-bottom',
      }
    );
   }
}
