import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const onMeetupAddHandler = (meetupData) => {
    console.log(meetupData);
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onMeetupAdd={onMeetupAddHandler} />
    </section>
  );
}

export default NewMeetupsPage;
