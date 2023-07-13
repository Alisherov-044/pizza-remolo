import { Button } from "../ui/Button";

const defaultTitle = "Are you sure to delete this product?";

export const DeleteModal = ({
  onClose,
  onDeleteAgree,
  title = defaultTitle,
}) => {
  return (
    <div className="delete-modal">
      <div className="delete-modal__panel">
        <h4 className="title">{title}</h4>
        <div className="action__buttons">
          <Button
            content="No"
            className="table__button cancel"
            onClick={onClose}
          />
          <Button
            content="Yes"
            className="table__button delete"
            onClick={onDeleteAgree}
          />
        </div>
      </div>
    </div>
  );
};
