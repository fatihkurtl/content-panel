export enum InvoicesTableHeader {
    invoice = 'Fatura',
    buyer = 'Alıcı',
    status = 'Durum',
    payment = 'Ödeme',
    date = 'Tarih',
    totalPrice = 'Toplam Fiyat'
    // actions = 'Eylemler'
}

export enum InvoicesChoices {
    exportPdf = "Pdf'ye aktar",
    allEdit = 'Toplu düzenleme',
    // allDelete = 'Toplu sil'
}

export enum InvoicesFilter {
    active = 'Aktif',
    inactive = 'Aktif değil'
}

export enum InvoicesActions {
    preview = 'Ön izleme',
    edit = 'Düzenle'
}
