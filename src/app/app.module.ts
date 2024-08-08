import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FiterUserPipe } from './pipes/filter-user.pipe';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [AppComponent, UserListComponent, UserDetailsComponent, FiterUserPipe,],
  imports: [BrowserModule, AppRoutingModule , HttpClientModule , FormsModule , NgxSkeletonLoaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

