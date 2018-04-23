export class Medicine {

    constructor(readonly name: string) {
        // console.log(this.name);
    }

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