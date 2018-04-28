
import { Database } from "../database/database"
import { MedicinePanelViewFactory } from "../factories/medicinePanelViewFactory"

export class PharmcistDashboardController {

    medicineName: string;
    database: Database = new Database()

    buildPharmacistDashboard() {

        let medicineCollection = this.database.getMedicineCollection();

        // let medicinePanelViews: HTMLElement[] = new MedicinePanelViewFactory().createMedicinePanelViews_Model(medicineCollection);

        // medicinePanelViews.forEach(view => {
        //     $('#medicine-panel').append(view);
        // });
    }

    async buildPharmacistDashboardAsync() {

        let medicineCollection = await this.database.getMedicineCollectionAsync();

        let medicinePanelViews: HTMLElement[] = new MedicinePanelViewFactory().createMedicinePanelViews_Model(medicineCollection);

        medicinePanelViews.forEach(view => {
            $('#medicine-panel').append(view);
        });
    }

    selectCategory(e: JQuery.Event): void {
        e.preventDefault();

        let targetElement: Element | undefined = e.toElement;
        if (targetElement) {
            let medicineCategory: string | null = (targetElement.textContent !== null) ? targetElement.textContent : "null";
            $('#selected-medicine-info').text(medicineCategory);
        }
    };

    selectMedicine(e: JQuery.Event): void {
        e.preventDefault();

        // This will need some exception handling...!
        let targetElement: Element | undefined = e.toElement;
        if (targetElement) {
            this.medicineName = targetElement.id;
        }

        let self: any = this;

        // Using then (not as clear to me)
        $('.selected-medicine-name').fadeOut(500)
            .promise()

            .progress(function (data) {
                alert('progress');
            });

        // Using done, fail and progress (much more clear to me)
        $('.selected-medicine-name').fadeOut(500)
            .promise()

            .done(function (data) {
                $('.selected-medicine-name').text(self.medicineName);
                $('.selected-medicine-name').fadeIn(500);
                console.log(`The medicine category: ${self.medicineName}`);
            })

            .fail(function (data) {
                alert('fail');
            })

            .progress(function (data) {
                alert('progress');
            });
    };
}