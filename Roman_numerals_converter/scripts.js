let submit = document.querySelector(".submit");
let output = document.querySelector(".output");
let rawData = document.querySelector("#rawData");

rawData.addEventListener("keypress", function(evt) {
    if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
    }
});

submit.addEventListener("click", generate);
rawData.addEventListener("keydown", generate);

function generate(e) {
    if (e.type == "keydown" && e.keyCode == 13) {
        let value = rawData.value;
        if (value > 3999 || value == "") {
            output.innerText = `Введите число от 1 до 3999`;
            return;
        }
        let outputResult = converter(value);
        output.innerText = `${value} = ${outputResult}`;
    } else if (e.type == "click") {
        let value = rawData.value;
        if (value > 3999 || value == "") {
            output.innerText = `Введите число от 1 до 3999`;
            return;
        }
        let outputResult = converter(value);
        output.innerText = `${value} = ${outputResult}`;
    }
}

let obj_small = [
    { Name: "I", ID: 1 },
    { Name: "II", ID: 2 },
    { Name: "III", ID: 3 },
    { Name: "IV", ID: 4 },
    { Name: "V", ID: 5 },
    { Name: "VI", ID: 6 },
    { Name: "VII", ID: 7 },
    { Name: "VIII", ID: 8 },
    { Name: "IX", ID: 9 }
];

let obj_mid = [
    { Name: "X", ID: 10 },
    { Name: "XX", ID: 20 },
    { Name: "XXX", ID: 30 },
    { Name: "XL", ID: 40 },
    { Name: "L", ID: 50 },
    { Name: "LX", ID: 60 },
    { Name: "LXX", ID: 70 },
    { Name: "LXXX", ID: 80 },
    { Name: "XC", ID: 90 }
];

let obj_large = [
    { Name: "C", ID: 100 },
    { Name: "CC", ID: 200 },
    { Name: "CCC", ID: 300 },
    { Name: "CD", ID: 400 },
    { Name: "D", ID: 500 },
    { Name: "DC", ID: 600 },
    { Name: "DCC", ID: 700 },
    { Name: "DCCC", ID: 800 },
    { Name: "CM", ID: 900 }
];
let obj_extra = [
    { Name: "M", ID: 1000 },
    { Name: "MM", ID: 2000 },
    { Name: "MMM", ID: 3000 }
];

function converter(num) {
    let check = num.toString().length;
    let x = num.toString().split("");
    let fst, snd, thrd, frth;
    let a, b, c, d, result;

    switch (check) {
        case 4:
            fst = parseInt(x[0]) * 1000;
            snd = parseInt(x[1]) * 100;
            thrd = parseInt(x[2]) * 10;
            frth = parseInt(x[3]) * 1;

            for (let i = 0; i < obj_extra.length; i++) {
                if (obj_extra[i].ID == fst) {
                    a = obj_extra[i].Name;
                    break;
                }
            }

            for (let i = 0; i < obj_large.length; i++) {
                if (obj_large[i].ID == snd) {
                    b = obj_large[i].Name;
                    break;
                }
            }

            for (let i = 0; i < obj_mid.length; i++) {
                if (obj_mid[i].ID == thrd) {
                    c = obj_mid[i].Name;
                    break;
                }
            }

            for (let i = 0; i < obj_small.length; i++) {
                if (obj_small[i].ID == frth) {
                    d = obj_small[i].Name;
                    break;
                }
            }

            if (b == undefined) b = "";
            if (c == undefined) c = "";
            if (d == undefined) d = "";
            return (result = a + b + c + d);

        case 3:
            fst = parseInt(x[0]) * 100;
            snd = parseInt(x[1]) * 10;
            thrd = parseInt(x[2]) * 1;

            for (let i = 0; i < obj_large.length; i++) {
                if (obj_large[i].ID == fst) {
                    a = obj_large[i].Name;
                    break;
                }
            }

            for (let i = 0; i < obj_mid.length; i++) {
                if (obj_mid[i].ID == snd) {
                    b = obj_mid[i].Name;
                    break;
                }
            }

            for (let i = 0; i < obj_small.length; i++) {
                if (obj_small[i].ID == thrd) {
                    c = obj_small[i].Name;
                    break;
                }
            }

            if (b == undefined) b = "";
            if (c == undefined) c = "";
            return (result = a + b + c);

        case 2:
            fst = parseInt(x[0]) * 10;
            snd = parseInt(x[1]) * 1;

            for (let i = 0; i < obj_mid.length; i++) {
                if (obj_mid[i].ID == fst) {
                    a = obj_mid[i].Name;
                    break;
                }
            }

            for (let i = 0; i < obj_small.length; i++) {
                if (obj_small[i].ID == snd) {
                    b = obj_small[i].Name;
                    break;
                }
            }

            if (b == undefined) b = "";
            return (result = a + b);

        case 1:
            fst = parseInt(x[0]) * 1;

            for (let i = 0; i < obj_small.length; i++) {
                if (obj_small[i].ID == fst) {
                    a = obj_small[i].Name;
                    break;
                }
            }

            return (result = a);
    }
}
