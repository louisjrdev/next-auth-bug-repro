import Link from "next/link";
import Layout from "../components/layout";

export default function IndexPage(props) {
  console.log(props);
  return (
    <div>
      <Layout>
        <div>
          {props.data.content || "No content" }
          <br/>
          {props.data.error || "No error" }
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let res = await fetch("http://localhost:3000/api/examples/protected");
  if (res.ok) {
    let data = await res.json();
    return { props: { data } };
  }

  return { props: {} };
}
