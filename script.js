// var fs = require('fs');
// let { parse, stringify } = require('scss-parser');

// var string = fs.readFileSync('style.scss');

// // Create an AST from a string of SCSS
// // let ast = parse(`.hello { color: $red; }
// // .print__header { position: relative; z-index: $z-modal + 10;  width: 210mm; margin: auto;}`);
// let ast = parse(string);
// // Modify the AST (see below for a better way to do this)
// // ast.value[0].value[0].value[0].value[0].value = 'world'
// // // Convert the modified AST back to SCSS
// // let scss = stringify(ast) // .world { color: $red; }

// // ast.value.forEach(element => {
// //     console.log('element.value');

// //     if (Array.isArray( element.value)) {
// //         element.value.forEach(ele=>{
// //             if(ele.type === 'block'){
// //                 if (Array.isArray(el.value)) {
// //                     el.value.forEach
// //                     console.log(ele.value);
// //                 }

// //             }
// //             // a.forEach(j=>console.log(j))
// //         })
// //     }
// // });
// const rules = ast.value.filter(val=>val.type === 'rule');
// const blocks = rules.flatMap(item=> item.value.filter(i=> i.type === 'block'));
// const dec = blocks.flatMap(item=> item.value.filter(i=> i.type === 'declaration'));
// const prop = dec.flatMap(item=> item.value.filter(i=> i.type === 'property'));

// prop.forEach(element => {
//     console.log(element.value)
// });

// // console.log(prop);


// var editorSass = ace.edit('sass-editor');
// editorSass.setTheme('ace/theme/dracula');
// editorSass.session.setMode('ace/mode/scss');
//
// var itog = ace.edit('sass-editor-itog');
// itog.setTheme('ace/theme/dracula');
// itog.session.setMode('ace/mode/javascript');
//
// editorSass.on("change", (e)=>{console.log(e)})

const Positioning = [
    'content',
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'z-index',
    'Box model',
    'display',
    'flex',
    'flex-grow',
    'float',
    'width',
    'height',
    'max-width',
    'max-height',
    'min-width',
    'min-height',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'margin-collapse',
    'margin-top-collapse',
    'margin-right-collapse',
    'margin-bottom-collapse',
    'margin-left-collapse',
    'overflow',
    'overflow-x',
    'overflow-y',
    'clip',
    'clear',
    'Typographic',
    'font',
    'font-family',
    'font-size',
    'font-smoothing',
    'osx-font-smoothing',
    'font-style',
    'font-weight',
    'hyphens',
    'src',
    'line-height',
    'letter-spacing',
    'word-spacing',
    'color',
    'text-align',
    'text-decoration',
    'text-indent',
    'text-overflow',
    'text-rendering',
    'text-size-adjust',
    'text-shadow',
    'text-transform',
    'word-break',
    'word-wrap',
    'white-space',
    'vertical-align',
    'list-style',
    'list-style-type',
    'list-style-position',
    'list-style-image',
    'pointer-events',
    'cursor',
    'Visual',
    'background',
    'background-attachment',
    'background-color',
    'background-image',
    'background-position',
    'background-repeat',
    'background-size',
    'border',
    'border-collapse',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',
    'border-color',
    'border-image',
    'border-top-color',
    'border-right-color',
    'border-bottom-color',
    'border-left-color',
    'border-spacing',
    'border-style',
    'border-top-style',
    'border-right-style',
    'border-bottom-style',
    'border-left-style',
    'border-width',
    'border-top-width',
    'border-right-width',
    'border-bottom-width',
    'border-left-width',
    'border-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',
    'border-top-left-radius',
    'border-radius-topright',
    'border-radius-bottomright',
    'border-radius-bottomleft',
    'border-radius-topleft',

    'quotes',
    'outline',
    'outline-offset',
    'opacity',
    'filter',
    'visibility',
    'size',
    'zoom',
    'transform',
    'box-align',
    'box-flex',
    'box-orient',
    'box-pack',
    'box-shadow',
    'box-sizing',
    'table-layout',
    'animation',
    'animation-delay',
    'animation-duration',
    'animation-iteration-count',
    'animation-name',
    'animation-play-state',
    'animation-timing-function',
    'animation-fill-mode',
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
    'background-clip',
    'backface-visibility',
    'resize',
    'appearance',
    'user-select',
    'interpolation-mode',
    'direction',
    'marks',
    'page',
    'set-link-source',
    'unicode-bidi',
    'speak'
];

const oneTextArea = document.querySelector('#one');
const twoTextArea = document.querySelector('#itogo');
const rules = document.querySelector('#rules');
const h2itog = document.querySelector('.h2itog');

const ul = document.createElement('ul');
Positioning.forEach(item=>{
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
});

rules.appendChild(ul);
let flag = false;

// oneTextArea.addEventListener('change', (event)=>{
//     const string = event.target.value;
//
//     const arrStr = string.replace(/\n/g, '').split(';').map(item=>item.split(':'));
//     const widthArr = arrStr.map(item=>({weight: Positioning.indexOf(trim(item[0])), value: `${trim(item[0])}: ${trim(item[1])}\n`}));
//
//     const filter = widthArr.filter(item => item.weight > -1);
//     const sort = filter.sort((one, two)=>one.weight - two.weight);
//
//     const gotovchick = sort.map(item => item.value);
//     twoTextArea.value = gotovchick.join('\n');
// });

const bufferReady = document.querySelector('#buffer-ready');

function trim(str) {
    if(typeof str === 'string') {
        return str.trim()
    }
    return str;
}
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/scss");

var itog = ace.edit("itog");
itog.setTheme("ace/theme/monokai");
itog.session.setMode("ace/mode/scss");

editor.on("change", myFunct);

function myFunct(e) {
    const value = editor.getValue();

    const a = value.match(/(.*){([\s\S]*?)}/mg, );

    const b = a.map(item => {
        const arr = item.match(/(.*){([\s\S]*?)}/m, );
        const selector = arr[1];
        const property = orderer(arr[2])
        return `${selector} {\n${property}\n}`
    });
    const string = b.join('\n');
    itog.setValue(string);
    copy(string);
    bufferReady.classList.toggle('hidden', flag);
    flag = true;

    h2itog.innerHTML += ' или уже в буфере';
    setTimeout(()=> {
        bufferReady.classList.toggle('hidden', flag)
        h2itog.innerHTML = 'отсюда забрать';

    }, 2000)
}

function orderer(string) {
    const arrStr = string.split('\n').map(item=>item.split(':'));
    const widthArr = arrStr.map(item=>(
        {
            weight: Positioning.indexOf(trim(item[0])),
            value: `${item[0]}: ${trim(item[1])}`
        }
        ));

    const filter = widthArr.filter(item => item.weight > -1);
    const sort = filter.sort((one, two)=>one.weight - two.weight);

    const gotovchick = sort.map(item => item.value);
    return gotovchick.join('\n');
}

function copy(str){
    let tmp   = document.createElement('textarea'), // Создаём новый текстовой input
        focus = document.activeElement; // Получаем ссылку на элемент в фокусе (чтобы не терять фокус)

    tmp.value = str; // Временному input вставляем текст для копирования

    document.body.appendChild(tmp); // Вставляем input в DOM
    tmp.select(); // Выделяем весь текст в input
    document.execCommand('copy'); // Магия! Копирует в буфер выделенный текст (см. команду выше)
    document.body.removeChild(tmp); // Удаляем временный input
    focus.focus(); // Возвращаем фокус туда, где был
}

