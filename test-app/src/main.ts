import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    preserveWhitespaces: true,
  })
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
