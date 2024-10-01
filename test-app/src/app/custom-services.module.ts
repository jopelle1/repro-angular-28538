import { NgModule } from "@angular/core";
import { TestService } from "custom-services";

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [{ provide: TestService, useValue: new TestService() }],
})
export class CustomServicesModule {
}
