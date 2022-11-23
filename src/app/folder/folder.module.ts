import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { SelectedTextComponent } from '../components/selected-text/selected-text.component';
import { ScrollToTopComponent } from '../components/scroll-to-top/scroll-to-top.component';
import { GenerateHexCodeComponent } from '../components/generate-hex-code/generate-hex-code.component';
import { ClipboardComponent } from '../components/clipboard/clipboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, SelectedTextComponent, ScrollToTopComponent, GenerateHexCodeComponent, ClipboardComponent]
})
export class FolderPageModule { }
