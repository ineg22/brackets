module.exports = function check(str, bracketsConfig) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let currentBr = str.charAt(i);
        let openBr;
        let closeBr;

        for (let j = 0; j < bracketsConfig.length; j++) {
            if (currentBr === bracketsConfig[j][0] || currentBr === bracketsConfig[j][1]) {
                openBr = bracketsConfig[j][0];
                closeBr = bracketsConfig[j][1];
            }
        }

        if (openBr === closeBr) {
            if (result[result.length - 1] === openBr) {
                result.pop();
            } else {
                result.push(openBr);
            }
        } else {
            if (currentBr === openBr) {
                result.push(openBr);
            } else if (currentBr === closeBr && result[result.length - 1] === openBr) {
                result.pop();
            } else return false;
        }
    }

    return result.length === 0 ? true : false;
}
