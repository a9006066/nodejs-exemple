
console.log('刷新')



$('#searchBtn').click((event) => {

    event.preventDefault();

    $.ajax({
        type: 'GET',
        dataType: "json",
        url: "http://localhost:8888/start",
        async: false,
        success: function (data) {
            console.log(data);
            if (data) {

                data.forEach(element => {
                    $('#content').append("<tr></tr>");
                    for (key in element) {
                        $('#content').append("<td>" + element[key] + "</td>")
                    }
                });

                var count = 0

                for (var index = 1; index < $('#content td').length; index++) {

                    var _item = $('#content td');

                    if (count === 0)
                        _item.eq(index).css({ 'width': '25%' })

                    if (count === 1)
                        _item.eq(index).css({ 'width': '19%' })

                    if (count === 2)
                        _item.eq(index).css({ 'width': '10%' })

                    if (count === 3)
                        _item.eq(index).css({ 'width': '16%' })

                    if (count === 4)
                        _item.eq(index).css({ 'width': '15%' })

                    count++

                    if (count == 5)
                        count = 0;
                }

                console.log('sucess')

            }
        },
        error: function () {

        }
    });



})






