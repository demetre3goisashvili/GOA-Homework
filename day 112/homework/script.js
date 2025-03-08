class StringHelper {
    static reverse(str) {
        return str.split('').reverse().join('');
    }

    static compare(str1, str2) {
        let minLength = Math.min(str1.length, str2.length);
        let count = 0;
        for (let i = 0; i < minLength; i++) {
            if (str1[i] === str2[i]) {
                count++;
            }
        }
        return count;
    }

    static isValid(str) {
        return /^[a-zA-Z0-9_]+$/.test(str);
    }
}

class MathHelper {
    static PI = Math.PI;
    static E = Math.E;
    static DEFAULT_PRECISION = 3;

    static factorial(n) {
        if (n < 0) return undefined;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    static endsWithFiveOrZero(num) {
        return num % 10 === 0 || num % 10 === 5;
    }

    static roundToNearestFiveOrZero(num) {
        return Math.round(num / 5) * 5;
    }

    static roundToPrecision(num, precision = MathHelper.DEFAULT_PRECISION) {
        return num.toFixed(precision);
    }
}
