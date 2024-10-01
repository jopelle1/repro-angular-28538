import {Component, inject, OnInit} from "@angular/core";
import {TestService} from "custom-services";

@Component({
  // eslint-disable-next-line
  selector: "body",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  private service = inject(TestService);

  ngOnInit() {
    this.service.test();
  }
}
