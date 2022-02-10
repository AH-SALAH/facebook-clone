export const isEmpty = val => {
    let isObj = (typeof val === 'object' && val.constructor === Object);
    if (!isObj && !Array.isArray(val)) {
        console.log(val, " is not array or object");
        return;
    }

    switch (val) {
        case isObj:
            return Object.keys(val).length === 0;
        case Array.isArray(val):
            return !!val[0];

        default:
            return false;
    }
};