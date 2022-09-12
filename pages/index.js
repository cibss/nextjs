import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return(
    <MeetupList meetups={props.meetups} />
  ) 
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_KEY}@clusterpractice.vwsbpra.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupCollection = db.collection('meetups');

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return{
    props: {
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address
      }))
    },
    revalidate: 1
  }
}

export default HomePage;


// // Only use when data change frequently, like every second
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }