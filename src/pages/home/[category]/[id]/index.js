import Image from "next/image";



import Header from "@/components/Header";
import Footer from "@/components/Footer";
const PetsId = ({ users }) => {
  return (
    <div>
      <Header/>
      <div className={styles.petprofile}>
        <Image
          src={petImg}
          alt="Pet Image"
          width={"auto"}
          height={"auto"}
          priority={true}
        />
        <article>
          <h1>{users.name}</h1>
          <p>Owner: {users.owner}</p>
          <strong>About:</strong>
          <p>{users.about}</p>
        </article>
        <div className="">
          <strong>Contact with Owner</strong>
          <div className="">
            <Image src={phoneImg} />
            <Image src={smsImg} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PetsId;
export const getServerSideProps = async (ctx) => {
  const { params } = ctx;
  console.log(params.id);
  const res = await fetch(`http://localhost:4000/pets/${params.id}`);
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

// export const getStaticPaths = async ({category,id}) => {

//   const res = await fetch(
//     `http://localhost:4000/pets`
//   );
//   const users = await res.json();
//   const paths = users.map(user=>{
//     return{
//         params:{
//             category:`${user.type}`,
//             id:`${user.id}`
//         }
//     }
//   })
//   return {
//     paths,
//     fallback: false,
//   };
// };
