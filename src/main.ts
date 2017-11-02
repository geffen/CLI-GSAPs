import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'gsap';

//typical import
//import {SteppedEase , TweenMax, Power2, TimelineLite} from "gsap";

//import {TweenMax, SteppedEase, TimelineLite} from "gsap";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
