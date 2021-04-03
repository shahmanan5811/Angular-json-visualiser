import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatIconModule} from '@angular/material/icon';
import { TreeDataService } from './tree-data.service';
import { TreeVisualiserComponent } from './tree-visualiser/tree-visualiser.component';
import { MatTreeModule } from '@angular/material/tree';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FileUploadComponent,
    TreeVisualiserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTreeModule
  ],
  providers: [TreeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
