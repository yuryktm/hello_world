define(['jquery',
        'backbone',
        'js/vendor-card',
    ],
    function($, Backbone, VendorCardView) {

        var vendorCardModel = Backbone.Model.extend({
            defaults: {
                name : "name 123",
                systemNumber: "21341234",
                contactDetails: "Вкладка карточка состоит из 2 частей: Карточка на просмотр и карточка на редактирование. Данная вкладка доступна на редактирование всегда всем сотрудникам группы «Поставщики» независимо от запущенных",
                status: "Итоговый RO статус"
            }
        });

        var dataDict = {
            organizationLegalFormVendorList: [{key: "1", value: 'БУ'},{key: "2", value: 'БФ'}, {key: "3", value: 'ГУП'}]
        };

        var data = {
            name : "name999",
            systemNumber: "4564567456",
            contactDetails: "Вкладка карточка состоит из 2 частей: Карточка на просмотр и карточка на редактирование. Данная вкладка доступна на редактирование всегда всем сотрудникам группы «Поставщики» независимо от запущенных",
            status: "Итоговый RO статус",
            agreementQualityFile: "файл123.docx",
            vendorType: "вендор тип 1",
            needForAudit: true,
            organizationLegalFormVendor: 2,
            auditFiles: [
                {
                    files: [{fileName: "file1.docx"}, {fileName: "file2..docx"}],
                    auditDate: "1.1.2020",
                    resultsConfirmAuditDate: "2.2.2022"
                },
                {
                    files: [{fileName: "file7.docx"}],
                    auditDate: "1.7.2010",
                    resultsConfirmAuditDate: "2.2.2022"
                }
            ],
            vendorWorksheets: [
                {
                    worksheets: [{fileName: "актета1.doc"}, {fileName: "актета1.doc"}],
                    sentDate: "3.3.2022",
                    receivedDate: "4.4.2027"
                },
                {
                    worksheets: [{fileName: "актета1444.docx"}],
                    sentDate: "3.3.2018",
                    receivedDate: "4.4.2019"
                }
            ]
        };

        var model =  new vendorCardModel(data);

        var vendorCard = new VendorCardView(model);
        $('#container').html(vendorCard.render().el);

        return {};
    });

