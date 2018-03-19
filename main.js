var isSortedApp = function (d) {
    "use strict";

    var model = {
        htmlTargets: d.targets,
        arrayIn: [],
        arrayLen: 3,
        arraySorted: true
    };

    function isSorted(uin, len) {
        // Returns true or false;
        // Determines if an array
        // is sorted. Takes in the
        // array and the number of
        // members in the array.
        var sorted = null;
        var nextItem = null;
        var index = 0;

        if (uin !== null) {
            while (index < len - 1) {
                nextItem = uin[index + 1];

                if (uin[index] > nextItem) {
                    sorted = false;
                } else {
                    sorted = true;
                }

                if (sorted === false) {
                    break;
                }
                index += 1;
            }
        }
        return sorted;
    }

    function setArrayEntered(ai) {
        model.arrayIn = ai;
        model.arrayLen = ai.length;
        model.arraySorted = isSorted(model.arrayIn, model.arrayLen);
    }

    function render(m) {
        var arrayEl = m.htmlTargets.arrayEl[0];
        var arrayLenEl = m.htmlTargets.arrayLenEl[0];
        var solEl = m.htmlTargets.solEl;
        var uin = m.arrayIn.toString();

        arrayEl.textContent = uin.replace(/,/g, ", ");
        arrayLenEl.textContent = m.arrayLen.toString();

        if (model.arraySorted) {
            solEl.textContent = "yes";
        } else {
            solEl.textContent = "no";
        }
    }

    function main(ai) {
        setArrayEntered(ai);
        render(model);
    }

    // user input
    const arrayEntered = ["cat", "dog", "panda", "pig", "bat", "hamster", "giraffe", "monkey", "penguin"];

    main(arrayEntered);
};
isSortedApp(data);