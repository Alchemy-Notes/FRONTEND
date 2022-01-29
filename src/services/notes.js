//always think about how your variable names communicate your code to other devs. Especially future devs, including your future self
export const getUserTags = async (userId) => {
  const userTags = await fetch(`${process.env.BACKEND_URL}/api/tags/${userId}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return userTags.json();
};

export async function getUserNotes({ userId, query }) {
  const userNotes = await fetch(`${process.env.BACKEND_URL}/api/notes/`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      query,
    }),
  });
  return userNotes.json();
}

export async function addNote(note) {
  const newNote = await fetch(`${process.env.BACKEND_URL}/api/notes/new`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return newNote.json();
}

export async function updateNote(note, noteId) {
  const updatedNote = await fetch(
    `${process.env.BACKEND_URL}/api/notes/edit/${noteId}`,
    {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }
  );
  return updatedNote.json();
}