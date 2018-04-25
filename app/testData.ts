import { MedicineDataModel } from "./models/medicineDataModel"

export class TestData {

    private static medicines: MedicineDataModel[] = [
        new MedicineDataModel("Cholesterol", ["Atorvastatin", "Rosuvastatin", "Lipitor", "Crestor"]),
        new MedicineDataModel("Hypertension", ["Lisinopril", "Amlodipine", "Benicar", "Losartan", "Carvedilol"]),
        new MedicineDataModel("Diabetes-Type1", ["Apidra", "Lantus", "Humalog", "Novalog"]),
        new MedicineDataModel("Diabetes-Type2", ["Victoza", "Januvia", "Metformin", "Glucophage"]),
    ];

    getJsonData(): string {

        let json = JSON.stringify(TestData.medicines);

        return json;
    };
};
