/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Card from "./Card";

function CardList(props) {
  const { updateDatas } = props;
  return (
    <div>
      {updateDatas.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
}

export default CardList;
