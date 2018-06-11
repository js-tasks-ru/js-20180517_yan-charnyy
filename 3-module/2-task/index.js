let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {


    let current = this.from;
    let last = this.to;

    current.setDate(current.getDate() + 1);
    last.setDate(last.getDate() + 1);

    // метод должен вернуть объект с методом next()
    return {
        next() {
            if (current <= last) {

                checkweekend = current.getDay();
                dayM = current.getDate();
                current.setDate(current.getDate() + 1);

                if (dayM <= 9) {dayM='0'+dayM}
                if ((checkweekend === 0) || (checkweekend === 6)) {
                    answer = '['+dayM+']'
                } else {
                    answer = dayM.toString();
                }

                return {
                    done: false,
                    value: answer
                };
            } else {
                return {
                    done: true
                };
            }
        }

    }

};

