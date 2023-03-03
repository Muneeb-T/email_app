export default {
    "emailout-config": {
        "sd_29PC2F1eHQwItcjq": {
            "id": "sd_29PC2F1eHQwItcjq",
            "type": "emailout-config",
            "viewType": "server",
            "nodeType": "flow",
            "name": "",
            "server": process.env.EMAIL_HOST,
            "port": process.env.EMAIL_PORT,
            "tls": false,
            "secure": false,
            "userid": process.env.EMAIL_USERID,
            "password": process.env.EMAIL_PASSWORD,
            "category": "config",
            "__ssdTypeInputs__": {
                "server": {
                    "type": "process.env",
                    "value": "EMAIL_HOST",
                    "constant": false
                },
                "port": {
                    "type": "process.env",
                    "value": "EMAIL_PORT",
                    "constant": false
                },
                "userid": {
                    "type": "process.env",
                    "value": "EMAIL_USERID",
                    "constant": false
                },
                "password": {
                    "type": "process.env",
                    "value": "EMAIL_PASSWORD",
                    "constant": false
                }
            },
            "__n_excludedFromValidation__": {}
        }
    }
}