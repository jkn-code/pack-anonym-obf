

var JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`html-file pack: `, name => {
    readline.close();
    pack1(name)
});


function pack1(fname) {
    let path = ''
    console.log('-PACK-');

    const httx = fs.readFileSync(path + fname, { encoding: 'utf8', flag: 'r' })

    let mas = httx.split('\n')
    let spack = false
    let alltx = ''
    let newHt = ''
    mas.forEach(lna => {
        let ln = lna.trim()
        if (ln.indexOf('<!-- pack -->') != -1) {
            spack = true
            newHt += '\t<script src="scripts.js"></script>\n'
        } else if (spack && ln.indexOf('<script src="') != -1) {
            ln = ln.replace("'", '"')
            let mk = ln.split('"')
            console.log(mk[1]);
            let txts = fs.readFileSync(path + mk[1], { encoding: 'utf8', flag: 'r' })
            alltx += txts
        } else newHt += lna
    })
    fs.writeFileSync(path + "index.html", newHt)

    alltx = '(() => {\n\n' + alltx + '\n\n})()'
    alltx = obf(alltx, 'medium')

    fs.writeFileSync(path + "scripts.js", alltx)



    console.log('-OK-');
}




function obf(str, tcfg) {
    let cfg = {
        def: {
            compact: true,
            controlFlowFlattening: false,
            deadCodeInjection: false,
            debugProtection: false,
            debugProtectionInterval: 0,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            numbersToExpressions: false,
            renameGlobals: false,
            selfDefending: false,
            simplify: true,
            splitStrings: false,
            stringArray: true,
            stringArrayCallsTransform: false,
            stringArrayCallsTransformThreshold: 0.5,
            stringArrayEncoding: [],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 1,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 2,
            stringArrayWrappersType: 'variable',
            stringArrayThreshold: 0.75,
            unicodeEscapeSequence: false
        },
        medium: {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            debugProtectionInterval: 0,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            numbersToExpressions: true,
            renameGlobals: false,
            selfDefending: true,
            simplify: true,
            splitStrings: true,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayCallsTransformThreshold: 0.75,
            stringArrayEncoding: ['base64'],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 2,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 4,
            stringArrayWrappersType: 'function',
            stringArrayThreshold: 0.75,
            transformObjectKeys: true,
            unicodeEscapeSequence: false
        }
    }

    var obfuscationResult = JavaScriptObfuscator.obfuscate(str, cfg[tcfg]);
    const ot = obfuscationResult.getObfuscatedCode()
    return ot
}