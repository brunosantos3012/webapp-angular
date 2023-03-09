import { CustomerConsultService } from './service/customer-consult.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-consult',
  templateUrl: './customer-consult.component.html',
  styleUrls: ['./customer-consult.component.scss']
})
export class CustomerConsultComponent implements OnInit {

  readonly displayedColumns: string[] = ['customerName', 'cpf', 'createdDate', 'monthlyFinance', 'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource;

  constructor(
    private service: CustomerConsultService
  ) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  public getCustomer(page?: number, limit?: number): void {
    this.service.getCustomer(page, limit).subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    })
  }

  public handlePageEvent(event: any) {
    this.getCustomer(event.pageIndex, event.pageSize);
  }

  public deleteCustomer(id: any): void {
    this.service.deleteCustomer(id).subscribe(res => {
      res: this.getCustomer();
    })
  }

  public editCustomer(customer: any): void {

  }

}
