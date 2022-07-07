import { useState } from "react";
import { Form, InnerForm } from "./styles";
import { URL } from "./Home";
import Axios from "axios";

const detailsInitialValue = { author: "", title: "", content: "" };

const CreateBlog = () => {
  const [details, setDetails] = useState(detailsInitialValue);
  const [loading, setLoading] = useState(false);

  //function to set details
  const setPostDetails = (e) => {
    setDetails((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  //function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await Axios.post(URL, details);
      if (result?.status === 200) {
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
    setDetails(detailsInitialValue);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InnerForm>
        <label htmlFor="author">Author:</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          value={details.author}
          onChange={setPostDetails}
          required
        />
      </InnerForm>
      <InnerForm>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={details.title}
          onChange={setPostDetails}
          required
        />
      </InnerForm>
      <InnerForm>
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          cols="30"
          rows="4"
          type="text"
          id="content"
          name="content"
          value={details.content}
          onChange={setPostDetails}
          required
        />
      </InnerForm>
      <button disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
    </Form>
  );
};

export default CreateBlog;
