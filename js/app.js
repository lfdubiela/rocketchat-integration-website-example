var ddp = new MeteorDdp('ws://socket-url/websocket');
var userId = undefined;
var token = undefined;
var notifications = undefined;

ddp.connect().done(function () {
    console.log('Connected!');
    ddp.call("login",
        [
            {
                "user": {"username": "your-username"},
                "password": {
                    "digest": "password-encrypted",
                    "algorithm": "sha-256"
                }
            }
        ]
    ).done(function (response) {
        userId = response.id;
        token = response.token;

        console.log('Connect! as user: your-user');

        ddp.call("subscriptions/get").done(function (response) {
            console.log('show subscriptions');
            console.log(response);
        });

        console.log('subscrib');

        notifications = ddp.subscribe("stream-notify-user", [userId + '/notification', false]);

        console.log(notifications);

        notifications.fail(function(err) {
            console.log('não pode inscrever em subsc-change');
        });

        notifications.done(function() {
            console.log('watching...');
            ddp.watch("stream-notify-user", function(changedDoc, message) {
                console.log("changed...");
                console.log(changedDoc);
                console.log(message);
            });
        });
    })
});