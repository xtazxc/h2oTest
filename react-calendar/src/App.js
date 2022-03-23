import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import shortid from 'shortid'
import AdjustIcon from '@mui/icons-material/Adjust'
import ReplayIcon from '@mui/icons-material/Replay'
import CropFreeIcon from '@mui/icons-material/CropFree'
import Button from '@mui/material/Button'
import './index.css'

const locales = {
	'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
})

const events = [
	{
		id: shortid(),
		color: 'red',
		typeOfEvent: 'remake',
		title: 'ул.Двинская 45, квартира 74',
		allDay: true,
		start: new Date(2022, 2, 7),
	},
	{
		id: shortid(),
		color: 'green',
		typeOfEvent: 'washing',
		title: 'ул.Двинская 40, квартира 54',
		start: new Date(2022, 2, 7),
	},
	{
		id: shortid(),
		color: 'blue',
		title: 'Свободная дата',
		start: new Date(2022, 2, 20),
	},
]

function App() {
	const [allEvents] = useState(events)
	const [filtered, setFiltered] = useState(allEvents)
	const handleFilter = ({ target }) => {
		setFiltered(allEvents.filter(i => i.color === target.id))
	}
	const handleBack = () => {
		setFiltered(allEvents)
	}

	return (
		<div className='App flex-auto items-center'>
			<div className='flex font-bold'>
				<Calendar
					localizer={localizer}
					events={filtered}
					startAccessor='start'
					endAccessor='start'
					style={{
						height: 600,
						width: 1500,
						margin: '50px',
						fontFamily: 'roboto',
					}}
					eventPropGetter={(event, start, end, isSelected) => ({
						event,
						start,
						end,
						isSelected,
						style: { backgroundColor: event.color },
						className: 'flex justify-center',
					})}
				/>
			</div>
			<div>
				<div className='flex justify-center '>
					<div className='px-4'>
						<Button
							id='red'
							variant='outlined'
							color='error'
							startIcon={<AdjustIcon />}
							onClick={handleFilter}
						>
							Переделка
						</Button>
					</div>
					<div className='px-4'>
						<Button
							id='green'
							startIcon={<ReplayIcon />}
							variant='outlined'
							color='success'
							onClick={handleFilter}
						>
							Уборка
						</Button>
					</div>
					<div className='px-4'>
						<Button
							id='blue'
							startIcon={<CropFreeIcon />}
							variant='outlined'
							onClick={handleFilter}
						>
							Свободная дата
						</Button>
					</div>
				</div>
				<div className='flex justify-center pt-5'>
					<Button variant='contained' onClick={handleBack}>
						Reset all
					</Button>
				</div>
			</div>
		</div>
	)
}

export default App
