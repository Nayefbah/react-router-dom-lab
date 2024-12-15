import { useParams } from 'react-router-dom'

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams()
  const mailbox = mailboxes.find((box) => box._id === Number(mailboxId))
  const mailboxLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  )

  if (!mailbox) {
    return <h1>Mailbox Not Found!</h1>
  }

  return (
    <div>
      <h1>Mailbox {mailbox._id}</h1>
      <p>
        <strong>Boxholder:</strong> {mailbox.boxholder}
      </p>
      <p>
        <strong>Box Size:</strong> {mailbox.boxSize}
      </p>

      <h2>Letters:</h2>
      <ul>
        {mailboxLetters.map((letter, index) => (
          <li key={index}>
            <p>
              <strong>Recipient:</strong> {letter.recipient}
            </p>
            <p>
              <strong>Message:</strong> {letter.message}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MailboxDetails
