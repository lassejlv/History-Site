import styles from "./index.module.scss";
import Header from '../../components/Header';
import DateComponent from '../../components/Date';
import { useQuery } from '@tanstack/react-query';
import ky from 'ky';

interface Event {
   year: number;
   pages: { content_urls: { desktop: { page: string } }, description: string }[];
}


const currentDate = new Date();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

export default function Home() {
   const query = useQuery({
      queryKey: ['date'],
      queryFn: async () => {
         return ky.get(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/${month}/${day}`).json<{ events: Event[] }>();
      },
   });

   if (query.isLoading) {
      return <div>Loading...</div>;
   }

   if (query.isError) {
      return <div>Error: {query.error.message}</div>;
   }

   if (!query.data) {
      return <div>No data</div>;
   }

   console.log(query.data);

   return (
      <>
         <Header title={'On this day'} description='What happened on this day - historical events, deaths and births thoughout time' />{' '}
         <DateComponent
            dates={[
               {
                  date: 'By Date',
                  active: false,
                  href: '/date',
               },
               {
                  date: 'Today',
                  active: true,
                  href: '/',
               },
               {
                  date: 'Since',
                  active: false,
                  href: '/since',
               },
            ]}
         />

         <div className={styles.eventsContainer}>

            {query.data.events.map((event) => (
               <div key={event.pages[0].description}>
                  {event.year}
               </div>
            ))}

         </div>
      </>
   );
}
