import { Link } from "react-router-dom";

function EmptyPage() {
  return (
    <>
      <h2>Page Not Found</h2>
      <Link to='/'>Back</Link>
    </>
  );
}

export default EmptyPage;
