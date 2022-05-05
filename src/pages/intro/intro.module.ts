import { NgModule } from '@angular/core';
import { Config, IonicPageModule } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { IntroPage } from './intro';


@NgModule({
  declarations: [
    IntroPage    
  ],
  imports: [
    IonicPageModule.forChild(IntroPage)
  ],
  exports: [
    IntroPage    
  ]
})
export class IntroPageModule {}
