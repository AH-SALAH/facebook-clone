import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig);

/**
 * 
 * @description return current break point
 * @param {*} w // window.innerWidth
 * @returns e.g ['md', '768px']
 */
export let getBreakPoint = (w=Number) => {
    let obj = fullConfig.theme.screens;
    let values = Object.values(fullConfig.theme.screens).map(s => s.match(/(\d)+/gi)).sort((a, b) => (+a) - (+b));
    let currBrkPoint = values.find(v => (w || window.innerWidth) <= v);
    console.log(obj, values, currBrkPoint);

    return currBrkPoint && Object.entries(obj).find(v => v[1].match(/(\d)+/gi)[0] === currBrkPoint[0]) || null;
};