import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './transfer/transfer.component';
import { HistoryComponent } from './history/history.component';
import { NavItemComponent } from './menu/nav-item/nav-item.component';
import { NavComponent } from './menu/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransferComponent,
    HistoryComponent,
    NavItemComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
