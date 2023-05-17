import ButtonWPP from "../buttons/ButtonWPP";

const ListGroupHorizontal = () => {
  return (
    <div className="text-center">
      <div className="py-2 py-sm-3 py-md-4 py-lg-5">
        <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>
      <div>
        <ButtonWPP />
      </div>
    </div>
  );
};

export default ListGroupHorizontal;
