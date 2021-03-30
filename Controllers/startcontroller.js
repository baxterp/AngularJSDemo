app.controller('StartController', function StartController() {
    try {
        sendMail();
    } catch (e) {

    }
});

function sendMail() {

    if (userIP == '')
        return;

    //if (userIP == '86.24.104.246')
    //    return;

    Email.send("from@you.com",
        "baxter@brpsoft.co.uk",
        "This is a subject",
        "this is the body",
        "mail.brpsoft.co.uk",
        "auto@brpsoft.co.uk",
        "::L1ghting");

    //$.ajax({
    //    type: 'POST',
    //    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    //    data: {
    //        'key': 'D3Dr9ywH1Liq7rfVCk0dWQ',
    //        'message': {
    //            'from_email': 'baxterrpearson@gmail.com',
    //            'to': [
    //                {
    //                    'email': 'baxter@brpsoft.co.uk',
    //                    'name': 'Baxter',
    //                    'type': 'to'
    //                }
    //            ],
    //            'autotext': 'true',
    //            'subject': 'Someone logged onto your ANGULARJS site',
    //            'html': 'Client ip is : ' + userIP
    //        }
    //    },
    //    async: true

    //}).done(function (response) {
    //    console.log('Emailer response = ' + response[0].status);
    //}).fail(function (jqXHR, textStatus) {
    //    alert("Request failed: " + textStatus);
    //});
}
