import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Carbon } from '../pages/carbon/carbon';
import { CarbonButton } from '../pages/button/button';
import { CarbonExpression } from '../pages/expression/expression';
import { CarbonResult } from '../pages/result/result';

import { SubstrPipe } from '../pipes/substr-pipe/substr-pipe';

import { ScannerService } from '../providers/scanner-service';
import { CalcService } from '../providers/calc-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Carbon,
    CarbonButton,
    CarbonExpression,
    CarbonResult,
    SubstrPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp), HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    ScannerService,
    CalcService
  ]
})
export class AppModule {}
