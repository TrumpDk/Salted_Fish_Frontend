const groupBy = (origin, name) => {
    let temp = {};
    let target = [];
    for (let item of origin) {
        if (temp[item[name]]) {
            temp[item[name]].push(item);
        } else {
            temp[item[name]] = [];
            temp[item[name]].push(item);
        }
    }
    Object.entries(temp).forEach(element => {
        target.push({ spec: element[0], data: element[1] });
    })
    return target;
}

export default groupBy;