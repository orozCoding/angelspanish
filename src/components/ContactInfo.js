const ContactInfo = () => {

  const info = [
    {
      t: 'Email',
      i: 'bi bi-envelope-fill',
      d: 'angel.orozco7@gmail.com',
      u: 'mailto:angel.orozco7@gmail.com'
    },
    {
      t: 'Instagram',
      i: 'bi bi-instagram',
      d: '@angelSpanishCom',
      u: 'https://www.instagram.com/angelspanishcom/'
    }
  ]

  return (
    <div className="contact-info-ctn d-flex col">{info.map((item) => (
      <div className="contact-info-box d-flex" key={info.indexOf(item) + 1}>
        <i className={item.i} />
        <strong><p>{item.t}:</p></strong>
        <a 
        className="contact-info-link ck"
        href={item.u} target="_blank" rel="noreferrer">{item.d}</a>
      </div>
    ))}
    </div>
  )
}

export default ContactInfo;