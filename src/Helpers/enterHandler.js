export const handleEnter = (e, data) => {
    if (e.keyCode === 13) {
        e.preventDefault()
        data(e.target.value);
    }
};

