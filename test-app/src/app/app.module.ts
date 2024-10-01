import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CustomServicesModule } from "./custom-services.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    CustomServicesModule,
    DragDropModule,
    BrowserModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register("ngsw-worker.js"),
    NgOptimizedImage,
  ],
})
export class AppModule {}
