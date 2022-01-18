import EditNote from '../../components/Notes/EditNote/EditNote';
import Search from '../../components/Search/Search';

// search bar up top and submit button
// some number of recent notes load initially (useEffect gets most recent notes by default)
// state or context called SearchResults

// IF SEARCHING WHILE IN EDIT MODE:
// warn about unsaved changes

export default function Notes() {
  return (
    <section>
      {/* <Search /> */}
      {/* is there a note in context or state? if not render a list view */}

      {/* have a prop isEditing, if editing grab the note contents and load them into the inputs */}
      <EditNote />
    </section>
  );
}
