export const required = (value) => {
    if (value) return undefined;

    return "Field is required";
}

export const maxLengthCreator = (maxLegnth) => (value) => {
    if (value && value.length > maxLegnth) return `max length is ${maxLegnth}`;
    return undefined;
}

