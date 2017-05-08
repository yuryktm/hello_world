
Evelopers.forms.dialog.displayMessage({
    text: "",
    type: 'warning',
    buttons: [
        {
            text: 'Ok',
            handler: function() {
                functionCB(arg);
                this.destroy();
            }
        }
        //{
        //    text: 'Отмена',
        //    handler: function() {
        //        this.destroy();
        //    },
        //    isDefault: true
        //}
    ]
});