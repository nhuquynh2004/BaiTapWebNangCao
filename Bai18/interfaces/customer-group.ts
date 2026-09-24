import { ICustomer } from "./customer";

export interface ICustomerGroup {
  CustomerTypeId: number,
  CustomterTypeName: string,
  Customers: Array<ICustomer>
}