import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.adsttc.com/media/images/5afc/3629/f197/cc4a/5700/0072/large_jpg/SEOUL_COFFEE_-_1.jpg?1526478348"
      title="a"
      address="a"
      description="a"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      image:
        "https://images.adsttc.com/media/images/5afc/3629/f197/cc4a/5700/0072/large_jpg/SEOUL_COFFEE_-_1.jpg?1526478348",
      title: meetupId,
      address: "address",
      description: "description",
    },
  };
}

export default MeetupDetails;
