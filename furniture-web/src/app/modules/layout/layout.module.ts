import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';

const declarations = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...declarations, NavigationComponent],
  imports: [CommonModule, RouterModule],
  exports: [...declarations],
})
export class LayoutModule {}
