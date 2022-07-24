const AboutSection = () => {
  return (
    <section className="sct-about d-flex col">
      <div className="abt-ctn-1">
        <img className="profile-pic" src="./profilepic.png" alt="profile" />
      </div>
      <div className="abt-ctn-2 d-flex col">
          <h2 className="title abt-title">¡Hola! I'm Angel and I want to be your Spanish tutor.</h2>
          <p>I'm a Medical Doctor and a certified Spanish teacher from Venezuela.
            I've been teaching online people all around the globe since 2018.</p>
      </div>
    </section>
  )
}

export default AboutSection;