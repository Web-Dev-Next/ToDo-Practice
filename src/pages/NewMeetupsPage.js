import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
  const onMeetupAddHandler = (meetupData) => {
    fetch(
      "https://academind-meetup-project-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onMeetupAdd={onMeetupAddHandler} />
    </section>
  );
}

export default NewMeetupsPage;
