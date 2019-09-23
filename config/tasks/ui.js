const fs = require('fs');
const path = require('path');
const yaml = require('write-yaml');
const {parse} = require('scss-parser');

export const UIColorsGenerate = (done) => {
    let fileContent = fs.readFileSync(path.join(__dirname, "../../src/scss/helpers/_colors.scss"), "utf8");
    let parsed = parse(fileContent);

    //parsed.value[0].value[0].value[0].value - variable
    //parsed.value[0].value[2].value[1].value - color
    let result = [];

    let i = 0;
    for (let i = 0; i < parsed.value.length; i++) {
        if (parsed.value[i].type === "declaration") {
            let val = ['$' + parsed.value[i].value[0].value[0].value, '#' + parsed.value[i].value[2].value[1].value]
            result.push(val);
        }
    }
    let colors = {
        colors: result
    };

    yaml.sync(path.join(__dirname, "../../src/components/ui-guide/helpers/color.yml"), colors);
    done();
}

