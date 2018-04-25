import { MedicineView } from "./views/medicineView";

export class Medicine {

    private medicineView: MedicineView;

    constructor(readonly name: string) {
        this.medicineView = new MedicineView(name);
    }

    public getMedicineButtonElement(): HTMLElement {
        return this.medicineView.getMedicineButtonViewElement();
    }

    // $('#atorvastatin').click(function (e) {
    //     atorvastatin.select(e);
    // });

    select(e: JQuery.Event): void {
        e.preventDefault();

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
                // console.log(self.name);
                $('.selected-medicine-name').text(self.name);
                $('.selected-medicine-name').fadeIn(500);
            })

            .fail(function (data) {
                alert('fail');
            })

            .progress(function (data) {
                alert('progress');
            });
    };
};
