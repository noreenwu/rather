export function formatQuestion(question, author, authedUser) {
  const { id, timestamp } = question
  const { name, avatarURL } = author
  
  return {
    id,
    timestamp,
    name,
    avatarURL
  }
}
