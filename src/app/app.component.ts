import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { PushNotificationService } from './shared/services/push-notification.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'angular-pwa-auto-seguros';

  constructor(private push: PushNotificationService, private swUpdate: SwUpdate) {}

  /* ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('Nova versão disponível. Deseja recarregar a página?')) {
          window.location.reload();
        }
      });
    }

    this.push.adicionaPushSubscriber();

  } */
  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(update => {
        if (update.type === 'VERSION_READY') {
          if (confirm('Nova versão disponível. Deseja recarregar a página?')) {
            window.location.reload();
          }
        }
      });
    }

    this.push.adicionaPushSubscriber();
  }
}
