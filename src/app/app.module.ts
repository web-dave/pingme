import { AppRoutingModule } from './app-routing.module';
import { PingmeService } from './shared/pingme.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MsgComponent } from './msg/msg.component';

@NgModule({
  declarations: [
    AppComponent,
    MsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PingmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
