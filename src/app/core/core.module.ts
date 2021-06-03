import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
    exports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
})
export class CoreModule {}
