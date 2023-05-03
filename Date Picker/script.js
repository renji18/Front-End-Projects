import { addMonths, eachDayOfInterval, endOfMonth, endOfWeek, format, fromUnixTime, getUnixTime, isSameDay, isSameMonth, startOfMonth, startOfWeek, subMonths } from 'date-fns'


const dateButton = document.querySelector('#current-date-button')
const mainContainer = document.querySelector("#main-container")
const dateGrid = document.querySelector("#grid-dates")
const headerDate = document.querySelector("#calender-header-month-year")
const leftArrow = document.querySelector('#btn-before-month')
const rightArrow = document.querySelector('#btn-after-month')
let currentDate = new Date()

function setDate(date) {
    dateButton.textContent = format(date, "MMMM do, yyyy")
    dateButton.dataset.selectedDate = getUnixTime(date)
}

setDate(new Date())


//On button click, show or hide the calander, link Date() with the button to display the current date on the button
dateButton.addEventListener('click', () => {
    mainContainer.classList.toggle('hidden')
    const selectedDate = fromUnixTime(dateButton.dataset.selectedDate)
    currentDate = selectedDate
    setupDatePicker(selectedDate)
})

function setupDatePicker(selectedDate) {
    headerDate.textContent = format(currentDate, 'MMMM - yyyy')
    setupDates(selectedDate)
}

function setupDates(selectedDate){
    const firstWeekStart = startOfWeek(startOfMonth(currentDate))
    const lastWeekEnd = endOfWeek(endOfMonth(currentDate))
    const dates = eachDayOfInterval({start: firstWeekStart, end: lastWeekEnd})
    dateGrid.innerHTML = ''
    dates.forEach(d => {
        const dateElement = document.createElement('button')
        dateElement.classList.add('date')
        dateElement.textContent = d.getDate()
        if(!isSameMonth(d, currentDate)){
            dateElement.classList.add('other-month-date')
        }
        if(isSameDay(d, selectedDate)){
            dateElement.classList.add('selectedDate')
        }
        dateElement.addEventListener('click', ()=>{
            setDate(d)
            mainContainer.classList.toggle('hidden')
        })
        dateGrid.appendChild(dateElement)
    })
}

rightArrow.addEventListener('click', () => {
    currentDate = addMonths(currentDate, 1)
    const selectedDate = fromUnixTime(dateButton.dataset.selectedDate)
    setupDatePicker(selectedDate)
})

leftArrow.addEventListener('click', () => {
    currentDate = subMonths(currentDate, 1)
    const selectedDate = fromUnixTime(dateButton.dataset.selectedDate)
    setupDatePicker(selectedDate)
})
