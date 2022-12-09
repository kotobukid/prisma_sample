const check_session = (req, res, next) => {
    console.log('checking session');
    next();
};
export { check_session };
