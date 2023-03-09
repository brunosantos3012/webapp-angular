import { ContactModel } from './contact.model';

export interface CustomerRegisterModel {
  id: string,
	customerName: string,
	cpf: string,
	birthDay: string,
	monthlyFinance: string,
	createdDate: string,
	contact: ContactModel
}
