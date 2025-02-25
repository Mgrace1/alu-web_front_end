function countPrimeNumbers() {
    let count = 0;

    for (let i = 2; i <= 100; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            count++;
        }
    }

    return count;
}

const startTime = performance.now();

function executeCounting(count) {
    countPrimeNumbers();

    if (count > 1) {
        setTimeout(executeCounting, 0, count - 1);
    } else {
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
    }
}

executeCounting(100);
