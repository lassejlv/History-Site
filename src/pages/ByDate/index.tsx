import Header from '../../components/Header'
import DateComponent from '../../components/Date'

export default function ByDate() {

  // example of 22 september
  // date like: 22/09 
  const dateToday = new Date().toLocaleDateString('en-GB').slice(0, -5);
  

  return (
    <>
    <Header title={`On: ${dateToday}`} description='What happened on this day - Here you can enter a specific date to get only events that happened on this date' />{' '}
    <DateComponent
       dates={[
          {
             date: 'By Date',
             active: true,
             href: '/date',
          },
          {
             date: 'Today',
             active: false,
             href: '/',
          },
          {
             date: 'Since',
             active: false,
             href: '/since',
          },
       ]}
    />
 </>
  )
}
