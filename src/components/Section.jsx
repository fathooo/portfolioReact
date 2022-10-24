function Section(props) {
  var name__section = props.name__section;
  var title__section = props.title__section;
  var subtitle_section = props.subtitle_section;
  var content__section = props.content__section;
  
  return (
    <>
      <section className="section" id={name__section} >
        <h2 className="section__title">{title__section}</h2>
        <span className="section__subtitle">{subtitle_section}</span>
        <div className="container">
          {content__section.map((content, index) => (
             <div key={index}> {content} </div >
          ))}
          </div>
      </section>
    </>
  );
}

export default Section;
