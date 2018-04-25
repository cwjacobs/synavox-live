import { Medicine } from "../medicine";
import { MedicineCategory } from "../medicineCategory";
import { MedicineDataModel } from "../models/medicineDataModel"

export class MedicinePanelViewFactory {

    constructor() {
    }

    public createMedicinePanelViews(json: string): HTMLElement[] {

        let views: HTMLElement[] = new Array<HTMLElement>();

        let medicineArray: Array<MedicineDataModel> = JSON.parse(json);

        medicineArray.forEach(e => {
            let category: MedicineCategory = new MedicineCategory(e.category);
            e.medicineList.forEach(medicineName => {
                let medicine: Medicine = new Medicine(medicineName);
                category.addMedicineToCategory(medicine);
            });
            views.push(category.getCategoryContainerElement());
        });

        return views;
    }
};
