import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Seoul Coffee',
    image: 'https://images.adsttc.com/media/images/5afc/3629/f197/cc4a/5700/0072/large_jpg/SEOUL_COFFEE_-_1.jpg?1526478348',
    address: 'Seoul, South Korea',
    description: 'Coffee Shop'
  },
  {
    id: 'm2',
    title: 'CREAMCHIC',
    image: 'https://images.adsttc.com/media/images/60ec/137a/e312/353f/9bdc/2d0b/newsletter/creamchic-4.jpg?1626084320',
    address: 'Jung-gu, South Korea',
    description: 'Coffee Shop'
  }
]

function HomePage(props) {
  return(
    <MeetupList meetups={props.meetups} />
  ) 
}

export function getStaticProps() {
  return{
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;