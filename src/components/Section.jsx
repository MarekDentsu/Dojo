
export default function Section(props) {
  return (
    <section className={`${props.classes}`}>
      {props.children}
    </section>
  )
}
