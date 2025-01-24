import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { MenuComponent } from './components/menu/menu.component';
import { CadastroSegurosComponent } from './components/cadastro-seguros/cadastro-seguros.component';
import { ListarSegurosComponent } from './components/listar-seguros/listar-seguros.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi, withJsonpSupport } from '@angular/common/http';
import { HttpInterceptorService } from './shared/services/http-interceptor.service';

@NgModule({ declarations: [
        AppComponent,
        MenuComponent,
        CadastroSegurosComponent,
        ListarSegurosComponent
    ],
    // providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpInterceptorService,
    //   multi: true
    // }
    // ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })], providers: [provideHttpClient(withInterceptorsFromDi(), withJsonpSupport())] })
export class AppModule { }
