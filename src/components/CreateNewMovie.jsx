// dpendencies import here=====================================
import React, { useState } from "react";
import { Button, Modal, Input, Rate, message } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import validator from "validator";

const CreateNewMovie = ({ setMyMovies, memorizedMovies, setRandom }) => {
  // the hook for the create new movie, and the object state =================================
  const [movieInfo, setMovieInfo] = useState({
    id: Math.random(),
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });
  // code and function for the modal==================================================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const handleInput = (event) => {
    const { id, value } = event.target;
    setMovieInfo((preValue) => {
      return {
        ...preValue,
        [id]: value,
      };
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // Validating input for creating new movie here=======================================================
    if (!validator.isURL(movieInfo.posterUrl)) {
      messageApi.open({
        type: "error",
        content: "Please provide a valid Url",
      });
      return;
    }
    if (validator.isEmpty(movieInfo.title)) {
      messageApi.open({
        type: "error",
        content: "Please provide a movie title",
      });
      return;
    }

    if (movieInfo.rating < 1) {
      messageApi.open({
        type: "error",
        content: "Please provide a rating",
      });
      return;
    }

    if (validator.isEmpty(movieInfo.description)) {
      messageApi.open({
        type: "error",
        content: "Please provide a movie description",
      });
      return;
    }

    messageApi.open({
      type: "success",
      content: "Movie added successfully",
    });
    // validator code end here=========================================
    setMyMovies(() => [movieInfo, ...memorizedMovies.myMemorizedMovies]);

    setRandom(Math.random());
    // funcntion to return initial state ===========================================
    setMovieInfo({
      id: Math.random(),
      title: "",
      description: "",
      posterUrl: "",
      rating: "",
    });

    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        icon={<VideoCameraAddOutlined />}
        onClick={showModal}
        className="bg-custGreen"
      >
        Add New Movie
      </Button>
      {/* Modal code here */}
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* Modal form here =========================================================== */}
        {contextHolder}
        <div className="space-y-3">
          {/* Url input here ======================================================== */}
          <Input
            placeholder="Movie Poster url"
            id={"posterUrl"}
            value={movieInfo.posterUrl}
            onChange={handleInput}
          />
          <div>
            {/* title input here ============================================= */}
            <Input
              placeholder="Movie Title"
              id={"title"}
              onChange={handleInput}
              value={movieInfo.title}
            />
            {/*  input for rating ======================================================  */}
            <div className="shadow my-4 rounded-md p-2 w-fit">
              <p>Rate Movie</p>
              <Rate
                ddafaultValue={1}
                onChange={(value) => {
                  setMovieInfo((preValue) => ({
                    ...preValue,
                    rating: value,
                  }));
                }}
              />
            </div>
          </div>
          {/* Text area here================================================================ */}
          <Input.TextArea
            rows={4}
            placeholder="Movie Description"
            id={"description"}
            value={movieInfo.description}
            onChange={handleInput}
          />
        </div>
      </Modal>
    </>
  );
};
export default CreateNewMovie;
