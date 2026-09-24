import { Component } from '@angular/core';
import { CustomerGroupApiService } from '../customer-group-api';

@Component({
  selector: 'app-customer-group',
  standalone: false,
  styleUrl: './customer-group.css',
  templateUrl: './customer-group.html',
})
export class CustomerGroup {
  groups: any;
  errMessage: string = '';

  constructor(private _service: CustomerGroupApiService) {
    this._service.getCustomerGroups().subscribe({
      next: (data) => { this.groups = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
