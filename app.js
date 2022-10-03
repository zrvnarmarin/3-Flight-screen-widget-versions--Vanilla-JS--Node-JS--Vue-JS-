const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: "OMAN",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "06:21",
        destination: "LONDON",
        flight: "CL 203",
        gate: "F 10",
        remarks: "ON TIME"
    },
    {
        time: "08:11",
        destination: "DUBAI",
        flight: "GT 166",
        gate: "B 04",
        remarks: "CANCELED"
    },
    {
        time: "08:11",
        destination: "ZAGREB",
        flight: "DE 003",
        gate: "E 45",
        remarks: "ON TIME"
    },
    {
        time: "21:41",
        destination: "NEW YORK",
        flight: "GZ 113",
        gate: "H 14",
        remarks: "CANCELED"
    },
]

const destinations = ["TOKYO", "FRANKFURT", "LOS ANGELES", "HAVANA", "BEIRUT"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement('tr')

        for (const flightDetail in flight) {
            const tableCell = document.createElement('td')
            const word = Array.from(flight[flightDetail])

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                }, 100 * index);

            }

            tableRow.append(tableCell)

        }

        tableBody.append(tableRow)
    }
}

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "123456789"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour

    if (hour < 24) hour++

    if (hour >= 24) {
        hour = 1
        displayHour = hour
    }

    if (hour < 10) displayHour = '0' + hour

    return displayHour + ':' + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(destinations.length * Math.random())],
        flight: generateRandomLetter() + ' ' + generateRandomLetter() + ' '
                + generateRandomNumber() + ' ' + generateRandomNumber(),
        gate: generateRandomLetter() + ' ' + generateRandomNumber() + ' ' +
              generateRandomNumber(),
        remarks: remarks[Math.floor(remarks.length * Math.random())],
    })
    tableBody.textContent = ''
    populateTable()
}

setInterval(shuffleUp, 3000)
populateTable()