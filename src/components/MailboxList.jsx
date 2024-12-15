import { Link } from 'react-router-dom'

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h1>Mailboxes</h1>
      <div className="mailbox-list">
        {mailboxes.map((mailbox) => (
          <Link
            to={`/mailboxes/${mailbox._id}`}
            key={mailbox._id}
            className="mail-box"
          >
            Mailbox {mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MailboxList
