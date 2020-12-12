export const updateObjectInArray = (itemId, items, objPropName, newPropsOfObj) => {
    return items.map(e => {
        if(e[objPropName] === itemId) {
            return{...e, ...newPropsOfObj}
        }
        return e;
    })
}