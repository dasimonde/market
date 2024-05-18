export type InvoiceData = {
  invoice_id: string
  invoice_date: string
  paid: boolean
  issuer_name: string
  issuer_company: string
  issuer_address: string
  issuer_email: string
  client_name: string
  client_company: string
  client_address: string
  client_email: string
  currencyToken: string
  currencyAddress: string
  items: {
    name: string
    price: number
  }[]
  tax: number
  currencyTax: string
  note: string
}
