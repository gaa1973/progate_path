import {Link, useParams} from "react-router-dom";

const items = [
  "1 is pronounced 'ichi' in Japanese.",
  "2 is pronounced 'Ni' in Japanese.",
  "3 is pronounced 'San' in Japanese.",
  "4 is pronounced 'Shi' in Japanese.",
  "5 is pronounced 'Go' in Japanese.",
];

export function NumberDetailsPage() {
  const {id} = useParams<{id: string}>();
  const item = items[Number(id) - 1];

  return (
    <>
      <div>{item}</div>
      <div>
        <Link to={"/numbers"}>List</Link>
      </div>
    </>
  );
}
