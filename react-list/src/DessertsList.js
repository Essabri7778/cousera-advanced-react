function DessertsList(props) {
  let filtredList = (props.data).filter(dessert => dessert.calories < 500);
  let sortedAndFiltredList = filtredList.sort((dessert1, dessert2) => dessert1.calories - dessert2.calories);
  let resultList = sortedAndFiltredList.map(dessert => {
    let itemText = `${dessert.name} - ${dessert.calories}`;
    return <li>{itemText}</li>;
  })
  return <ul>{ resultList}</ul>;
}

export default DessertsList;
