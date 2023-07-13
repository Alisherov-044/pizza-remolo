import { useEffect, useRef, useState } from "react";
import {
  Button,
  DeleteModal,
  Drawer,
  FormGroup,
  Loading,
  Table,
  Modal,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  deleteCategory,
  addCategory,
  editCategory,
} from "../../redux/actions";
import { TextArea } from "../../components";
import { collectFormData } from "../../utils";

export const Categories = () => {
  const titleData = [
    {
      id: 1,
      key: "name",
      value: "Name",
    },
    {
      id: 2,
      value: "Action",
      actions: (el) => (
        <div className="table__buttons-wrapper">
          <Button
            content="Edit"
            className="table__button edit"
            onClick={() => onEdit(el)}
          />
          <Button
            content="Delete"
            className="table__button delete"
            onClick={() => onDelete(el.id)}
          />
        </div>
      ),
    },
  ];

  const categories = useSelector((state) => state.categories);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(null);
  const [isDelete, setIsDelete] = useState(null);
  const formRef = useRef();

  const dispatch = useDispatch();

  const closeDrawer = () => {
    setDrawerIsOpen(false);
    setEdit(null);
    formRef.current.reset();
  };

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = collectFormData(e);
    setIsLoading(true);
    if (edit) {
      const response = await editCategory(data, edit);
      if (response.status === 201) {
        dispatch(getCategories());
      }
    } else {
      const response = await addCategory(data);
      if (response.status === 201) {
        dispatch(getCategories());
      }
    }
    setIsLoading(false);
    closeDrawer();
  };

  const onEdit = (data) => {
    setEdit(data.id);
    const form = formRef.current;
    for (let i in data) {
      if (form[i]) {
        form[i].value = data[i];
      }
    }
    openDrawer();
  };

  const onDelete = (id) => {
    setIsDelete(id);
  };

  const onCloseDelete = () => {
    setIsDelete(null);
  };

  const onDeleteAgree = async () => {
    setIsLoading(true);
    const response = await deleteCategory(isDelete);
    if (response.status === 204) {
      dispatch(getCategories());
    }
    onCloseDelete();
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <main className="categories-page main">
      <div className="categories-page__container">
        <div className="categories-page__header">
          <h2 className="title">Categories</h2>
          <div className="actions">
            <Button
              content="Add"
              className="table__button add"
              onClick={openDrawer}
            />
            <Button
              content="Refresh"
              className="table__button edit"
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
        {categories.isLoading | isLoading ? (
          <Loading />
        ) : (
          <Table title={titleData} data={categories.items} />
        )}
      </div>
      <Drawer
        isOpen={drawerIsOpen}
        onClose={closeDrawer}
        className="categories-page__drawer"
      >
        <form className="form" ref={formRef} onSubmit={onSubmit}>
          <div className="form__wrapper">
            <FormGroup name="name" title="Name" required={true} />
            <TextArea
              title="Icon"
              name="icon"
              className="input-group"
              required={true}
            />
            <Button
              content={edit ? "Edit" : "Add"}
              className="table__button add"
              disabled={isLoading}
            />
          </div>
        </form>
      </Drawer>
      <Modal isOpen={isDelete} onClose={onCloseDelete}>
        <DeleteModal onClose={onCloseDelete} onDeleteAgree={onDeleteAgree} />
      </Modal>
    </main>
  );
};
