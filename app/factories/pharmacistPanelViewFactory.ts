import { Medicine } from "../medicine";
import { MedicineCategory } from "../medicineCategory";
import { MedicineDataModel } from "../models/medicineDataModel"

export class PharmacistPanelViewFactory {

    constructor() {
    }

    public createPharmacistPanelViews_Json(json: string): HTMLElement[] {

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

    public createPharmacistPanelViews_Model(medicineArray: Array<MedicineDataModel>): HTMLElement[] {

        let views: HTMLElement[] = new Array<HTMLElement>();

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

    public createPharmacistPanelView_Model(medicine: MedicineDataModel): HTMLElement {

        let view: HTMLElement;

        let category: MedicineCategory = new MedicineCategory(medicine.category);
        medicine.medicineList.forEach(medicineName => {
            let medicine: Medicine = new Medicine(medicineName);
            category.addMedicineToCategory(medicine);
        });

        view = category.getCategoryContainerElement();

        return view;
    }
};
