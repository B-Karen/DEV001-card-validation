const validator = {
    isValid: function (creditCardNumber) {
        let cardArr = creditCardNumber.split("");
       // console.log({ cardArr });
        for (let i = 0; i < cardArr.length; i++) {
            if (i % 2 === 0) {
                let acumulador = cardArr[i] * 2;
                if (acumulador > 9) {
                    cardArr[i] = acumulador.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b), 0)
                } else {
                    cardArr[i] = acumulador;
                }

            }
        }

        let suma = 0;
        for (let i = 0; i < cardArr.length; i++) {
            suma += parseInt(cardArr[i]);
        }

        //console.log({ suma })
        //console.log({ cardArr })

        if (suma % 10 === 0) {
            alert("tarjeta Valida");

        } else {
            console.log("tarjeta invalida");
            return false;
        }


        // if (i % 2 === 0) {


        //     let acumulador = cardArr[i] * 2;
        //     if (acumulador >= 10) {
        //         let acumulador2 = acumulador - 9;
        //         cardArr[i] = acumulador2;
        //     } else {
        //         cardArr[i] = acumulador;
        //     }
        // }

        // let suma = 0;
        // for (let i = 0; i < cardArr.length; i++) {
        //     suma += parseInt(cardArr[i]);
        // }

        // console.log({suma});

        // if (suma % 10 === 0) {
        //     alert("tarjeta Valida");

        // } else {
        //     console.log("tarjeta invalida");
        //     return false;
        // }


    },

    maskify: function () { }

}

export default validator;