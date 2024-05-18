export default function Footer() {
    const now = new Date();
    const currentYear = now.getFullYear();
  return (
    <footer>
      <div className="container section_container">
        <h3>Arman Kabir's Portfolio</h3>
        <p>Copyright &copy; Arman Kabir { currentYear } </p>
      </div>
    </footer>
  );
}
