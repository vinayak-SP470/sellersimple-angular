import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "../../environments/environment.development";


export const appServiceConfig = new InjectionToken<AppConfig>('app.config');

export const appConfigure : AppConfig = {
    apiEndPoint: environment.apiEndPoint
}



