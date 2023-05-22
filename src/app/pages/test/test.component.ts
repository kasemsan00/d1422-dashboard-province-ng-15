import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<nb-layout>
    <nb-layout-column>
      <div>
        Test Component
        <nb-card>
          <nb-card-body class="example-last-child-no-b-margin">
            <nb-alert outline="basic"
              >Primary. You have been successfully authenticated!</nb-alert
            >
            <nb-alert outline="primary"
              >Primary. You have been successfully authenticated!</nb-alert
            >
            <nb-alert outline="success"
              >Success. You have been successfully authenticated!</nb-alert
            >
            <nb-alert outline="info"
              >Info. You have been successfully authenticated!</nb-alert
            >
            <nb-alert outline="danger"
              >Danger. You have been successfully authenticated!</nb-alert
            >
            <nb-alert outline="warning"
              >Warning. You have been successfully authenticated!</nb-alert
            >
            <div class="control-status-example">
              <nb-alert outline="control"
                >Control. You have been successfully authenticated!</nb-alert
              >
            </div>
          </nb-card-body>
        </nb-card>
      </div>
    </nb-layout-column>

    <nb-layout-footer fixed>
      <!-- Insert footer here -->
    </nb-layout-footer>
  </nb-layout> `,
})
export class TestComponent {}
