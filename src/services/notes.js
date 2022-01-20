export const getUserTags = async (userId) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/tags/${userId}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
};

export async function getUserNotes({ userId, query }) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/notes/`, {
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
  return res.json();
}

export async function addNote(note) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/notes/new`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return res.json();
}

export async function updateNote(note, noteId) {
  const res = await fetch(
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
  return res.json();
}
