export class Language {
    constructor(readonly name: string, readonly cssClass: string) {
    };

    select(e: JQuery.Event): void {
        let self = this;
        e.preventDefault();

        $('.selected-medicine-language').removeClass('bg-primary').removeClass('bg-warning').removeClass('bg-danger').addClass(self.cssClass).text(self.name).show();
        
        $('#download').removeClass('bg-primary').removeClass('bg-warning').removeClass('bg-danger').addClass(self.cssClass).text(self.name).show();
    }
}