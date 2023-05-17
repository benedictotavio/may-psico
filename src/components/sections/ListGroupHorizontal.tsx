import ButtonWPP from "../buttons/ButtonWPP";

const ListGroupHorizontal = () => {
  return (
    <div>
      <div className="p-sm-3 p-md-4 p-lg-5">
        <ul class="list-group list-group-horizontal-sm">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <ul class="list-group list-group-horizontal-lg">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
      <div className="text-center">
        <ButtonWPP />
      </div>
    </div>
  );
};

export default ListGroupHorizontal;
