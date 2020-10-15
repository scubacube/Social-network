let obj = {
    name: "first",
    surname: "First",
    _status: "",
    setStatus(value) {
        this._status = value;
    },
    getStatus() {
        return this._status;
    }
}

obj.setStatus("single");
console.log(obj.getStatus());