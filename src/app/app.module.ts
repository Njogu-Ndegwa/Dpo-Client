import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  GoogleInitOptions,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  FacebookLoginProvider,

} from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';
import { ErrorIntercept } from './interceptors/interceptors';

const googleLoginOptions: GoogleInitOptions = {
  oneTapEnabled: false,

  scopes: 'email,profile'

};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(

    //           environment.googgle_sign_in_key,

    //           googleLoginOptions
    //         ),
    //       },


    //     ],
    //     onError: (err: any) => {
    //       console.error(err);
    //     }
    //   } as SocialAuthServiceConfig,
    // },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('869422684538521'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
