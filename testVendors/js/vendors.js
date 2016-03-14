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

        var data = {
            name : "name999",
            systemNumber: "4564567456",
            contactDetails: "Вкладка карточка состоит из 2 частей: Карточка на просмотр и карточка на редактирование. Данная вкладка доступна на редактирование всегда всем сотрудникам группы «Поставщики» независимо от запущенных",
            status: "Итоговый RO статус",
            agreementQuality: "файл123.docx",
            vendorType: "",
            needForAudit: true
        };
        var model =  new vendorCardModel(data);

        var vendorCard = new VendorCardView(model);
        $('#container').html(vendorCard.render().el);

        return {};
    });

