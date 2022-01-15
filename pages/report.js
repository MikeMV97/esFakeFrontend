import { ReportGridLayout } from "../components/ReportGridLayout";
import styled from "styled-components";
import axios from "axios";

const ReportLayout = styled.div`
  width: calc(100vw - 300px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 150px;
`;

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const { id, title } = query
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/analysis`, {
      data: {
        id
      }
    })
    if (data.error) {
      console.log("Entra acá")
      return { props: { error: data.error } }
    }
    return { props: { data } }
  } catch (error) {
    console.error(error)
    return {
      redirect: {
        permanent: false,
        destination: "/analysis",
      },
    }
  }
}

const Report = (props) => {
  console.log(props)
  return (
    <>
          <ReportLayout>
            <ReportGridLayout />
          </ReportLayout>
    </>
  );
};

export default Report;
