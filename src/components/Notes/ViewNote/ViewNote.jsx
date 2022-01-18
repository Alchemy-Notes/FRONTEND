import Markdown from './Markdown';

const title = 'My First Note';
const modifiedDate = null;
const body = `
# TEST \n
*React-Markdown* \n
**test** \n
appears to be working \n
\`code goes in these\` `;
const tags = 'First Note';

export default function ViewNote({ title, body, modifiedDate, tags }) {
  // useEffect to get the note from backend
  // destructure note
  return (
    <section>
      <h2>{title}</h2>
      <p>{modifiedDate && { modifiedDate }}</p>
      <Markdown body={body} />
      <p>{tags}</p>
    </section>
  );
  // predefined sizes, title in top right corner with date modified
  // body will take up most of the screen
}
