export function isDescending (data) {
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].localeCompare(data[i + 1]) < 0) {
            return false;
        }
    }
    return true
}

export function isAscending (data) {
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].localeCompare(data[i + 1]) > 0) {
            return false;
        }
    }
    return true
}

// let nama = ['MTI','MMI','I3','EDII','Ecomindoo','Ecomindo','Bambang 1','Bambang','Astra Internasional']
// console.log(isAscending(nama))
// console.log(isDescending(nama))
