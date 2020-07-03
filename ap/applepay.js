const paymentRequest = {
    total: {
        label: 'wooppay.com',
        amount: 50
    },
    countryCode: 'RU',
    currencyCode: 'RUR',
    merchantCapabilities: ['supports3DS'],
    supportedNetworks: ['masterCard', 'visa']
};
const merchantPaymentData = {
    order_id: "123456",
    terminal_id: 1
}

let performValidation = (validation_url) => {
    return new Promise(function(resolve, reject) {
        // запрос на получение сессии
        /*var req = new XMLHttpRequest();
        req.open("POST", "https://pci-ws.wooppay.com/cashin/applepay/validate-merchant", false);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify({validation_url: validation_url}));
        resolve(JSON.parse(req.responseText));  // тело ответа - сессия
        */
        resolve('asdasd');
    });
}

let performAuthorization = (pk_payment) => {
    return new Promise(function(resolve, reject) {
        document.getElementById('authorize').textContent = JSON.stringify(pk_payment);
        // document.getElementById('authorize').textContent = pk_payment;
        // создаём заказ
        var req = new XMLHttpRequest();
        req.open(
            "POST",
            "https://pci-ws.wooppay.com/cashin/applepay/" + merchantPaymentData.terminal_id
            + "/" + merchantPaymentData.order_id,
            false);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify({validation_url: validation_url}));
        resolve(true);
    });
}


if (window.ApplePaySession) {
    //Apple Pay JS API доступно
    let merchantIdentifier = 'merchant.com.wooppay.processing';
    let promise = window.ApplePaySession.canMakePaymentsWithActiveCard(merchantIdentifier);
    promise.then(function (canMakePayments) {
        if (canMakePayments) {
            // у пользователя есть активная карта Apple Pay
            // отображаем кнопку
            document.getElementById('applepay-btn').onclick = function (event) {
                const applePaySession = new window.ApplePaySession(1, paymentRequest);
                applePaySession.onvalidatemerchant = (event) => {
                    // отправляем запрос на валидацию сессии
                    console.log(event);
                    document.write(`event: ${event}`);
                    document.write(`event.validationUrl: ${event.validationURL}`);
                    performValidation(event.validationURL)
                        .then((merchantSession) => {
                            // завершаем валидацию платежной сессии
                            document.getElementById('validate').textContent = JSON.stringify(merchantSession);
                            applePaySession.completeMerchantValidation(merchantSession);
                        })
                        .catch((reason) => {
                                console.log(reason);
                                applePaySession.abort();
                                // показ сообщения об ошибке и т.п.
                            }
                        );
                };
                applePaySession.onpaymentauthorized = (event) => {
                    performAuthorization(event.payment)
                        .then((success) => {
                            if (success) {
                                applePaySession.completePayment(window.ApplePaySession.STATUS_SUCCESS);
                            } else {
                                applePaySession.completePayment(window.ApplePaySession.STATUS_FAILURE);
                            }
                        })
                        .catch((reason) => {
                            console.log(reason);
                            applePaySession.completePayment(window.ApplePaySession.STATUS_FAILURE);
                        })
                };
                applePaySession.begin();
            }
        }
    });
}
